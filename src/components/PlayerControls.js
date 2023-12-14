import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import shuffle from "just-shuffle";
import soundOne from "../assets/audio/sound_one.mp3";
import soundTwo from "../assets/audio/sound_two.mp3";
import soundThree from "../assets/audio/sound_three.mp3";
import Volume from "./Volume";

const playlistData = [soundOne, soundTwo, soundThree];

const PlayerControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [repeatMode, setRepeatMode] = useState("none");
  const [shuffleMode, setShuffleMode] = useState(false);
  const [playList, setPlayList] = useState(playlistData);
  const [indexPlayList, setIndexPlayList] = useState(0);

  useEffect(() => {
    audioRef.current.pause();

    const intervalId = setInterval(() => {
      if (!audioRef.current) {
        return;
      }

      setDuration(Math.round(audioRef.current.duration));
      setCurrentTime(Math.round(audioRef.current.currentTime));

      // Passer à la piste suivante si la piste actuelle est terminée (et que la répétition n'est pas activée)
      if (audioRef.current.ended) {
        if (repeatMode === 'song') {
          // Répéter la même piste
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        } else {
          handleNext();
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [repeatMode]);

  const randomize = (array) => {
    setShuffleMode(!shuffleMode);
    const randomizedArray = shuffle(array);
    setPlayList(randomizedArray);
    setIndexPlayList(0);
  };

  const handleCanPlay = () => {
    setDuration(Math.round(audioRef.current.duration));
  };

  const handleProgress = (e) => {
    setCurrentTime(Math.round(e.target.currentTime));
  };

  const handleSeek = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(Math.round(time));
  };

  const handlePlayPause = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleRepeatToggle = () => {
    // Stockez l'état actuel de lecture
    const wasPlaying = isPlaying;
  
    // Mettez à jour le mode de répétition
    setRepeatMode((prevRepeatMode) => {
      switch (prevRepeatMode) {
        case "none":
          return "playlist";
        case "playlist":
          return "song";
        case "song":
          return "none";
        default:
          return prevRepeatMode;
      }
    });
  
    // Si la musique était en cours de lecture, et le nouveau mode est différent de "song",
    if (wasPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };

  const handleNext = () => {
    let newIndex;
    if (repeatMode === 'song') {
      newIndex = indexPlayList;
    } else {
      newIndex = indexPlayList < playList.length - 1 ? indexPlayList + 1 : 0;
    }

    setIndexPlayList(newIndex);
    // Réinitialiser le temps actuel
    setCurrentTime(0);
  };

  const handlePrev = () => {
    if (indexPlayList > 0) {
      setIndexPlayList(indexPlayList - 1);
    } else {
      setIndexPlayList(playList.length - 1);
    }
    // Réinitialiser le temps actuel
    setCurrentTime(0);
  };

  useEffect(() => {
    // Mettre à jour la source audio lors du changement de piste
    audioRef.current.src = playList[indexPlayList];
    // Réinitialiser le temps actuel et jouer la nouvelle piste si elle est en cours de lecture
    setCurrentTime(0);
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [indexPlayList, playList, isPlaying]);

  const getRepeatIconColor = () => {
    switch (repeatMode) {
      case "none":
        return "white";
      case "playlist":
        return "green";
      case "song":
        return "red";
      default:
        return "white";
    }
  };

  return (
    <Container repeatMode={repeatMode}>
      <audio
        onCanPlay={handleCanPlay}
        onTimeUpdate={handleProgress}
        onSeeked={handleProgress}
        ref={audioRef}
        src={playList[indexPlayList]}
      />
      <ButtonContainer>
        <div className="shuffle" onClick={() => randomize(playList)}>
          <BsShuffle color={shuffleMode ? "red" : "white"} />
        </div>
        <div className="previous" onClick={handlePrev}>
          <CgPlayTrackPrev />
        </div>
        <div className="state" onClick={handlePlayPause}>
          {isPlaying ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
        </div>
        <div className="next" onClick={handleNext}>
          <CgPlayTrackNext />
        </div>
        <div className="repeat" onClick={handleRepeatToggle}>
          <FiRepeat color={getRepeatIconColor()} />
        </div>
      </ButtonContainer>
      <Bar>
        <TimeDisplay>
          <span>{formatTime(currentTime)}</span>
        </TimeDisplay>
        <ProgressBar
          max={duration}
          value={currentTime}
          onChange={(e) => {
            const time = parseInt(e.target.value, 10);
            handleSeek(time);
          }}
        />
        <TimeDisplay>
          {formatTime(duration)}
        </TimeDisplay>
      </Bar>
      <div className="volume">
        <Volume audioRef={audioRef} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;

  .shuffle {
    color: ${(props) => (props.repeatMode === "none" ? "white" : props.repeatMode === "playlist" ? "green" : "red")};
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }

  .volume {
    position: absolute;
    top: 0;
    right: -150px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: white;
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }

  .state {
    svg {
      color: white;
    }
  }

  .previous,
  .next,
  .state {
    font-size: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const ProgressBar = styled.input.attrs((props) => ({
  type: "range",
  max: props.max || 100,
  value: props.value || 0,
}))`
  width: 80%;
  appearance: none;
  height: 5px;
  border-radius: 5px;
  outline: none;
  background: #888;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
  }
`;

const Bar = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const TimeDisplay = styled.div`
  color: white;
  font-size: 12px;
  margin-bottom: 2px;
  text-align: center;
`;

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
};

export default PlayerControls;