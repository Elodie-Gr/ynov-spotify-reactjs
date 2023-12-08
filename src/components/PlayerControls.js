import React, {useState, useRef} from "react";
import styled from "styled-components";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";

const PlayerControls = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);
  const [repeatMode, setRepeatMode] = useState("none");
  const [shuffleMode, setShuffleMode] = useState(false);

  const handleShuffleToggle = () => {
    setShuffleMode(!shuffleMode);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (e) => {
    setCurrentTime(e.playedSeconds);
  };

  const handleSeek = (time) => {
    playerRef.current.seekTo(time);
  };

  const handleRepeatToggle = () => {
    switch (repeatMode) {
      case "none":
        setRepeatMode("playlist");
        break;
      case "playlist":
        setRepeatMode("song");
        break;
      case "song":
        setRepeatMode("none");
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    // Logic to play the next song based on shuffle and repeat modes
  };

  const handlePrev = () => {
    // Logic to play the previous song based on shuffle and repeat modes
  };

  return (
    <Container>
      <ButtonContainer>
      <div className="shuffle" onClick={handleShuffleToggle}>
        <BsShuffle color={shuffleMode ? "green" : "white"} />
      </div>
      <div className="previous" onClick={() => handlePrev()} >
        <CgPlayTrackPrev />
      </div>
      <div className="state" onClick={handlePlayPause} >
      {isPlaying ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
      </div>
      <div className="next" onClick={() => handleNext()} >
        <CgPlayTrackNext/>
      </div>
      <div className="repeat" onClick={handleRepeatToggle}>
        <FiRepeat color={repeatMode !== "none" ? "green" : "white"} />
      </div>
      </ButtonContainer>
      <ProgressBar
      max={duration}
      value={currentTime}
      onChange={(e) => handleSeek(e.target.value)} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  svg {
    color: #b3b3b3;
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

export default PlayerControls;