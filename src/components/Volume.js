import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

const Volume = ({ audioRef }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [manualMute, setManualMute] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      setVolume(audioRef.current.volume);
      setIsMuted(audioRef.current.muted);
    }
  }, [audioRef.current]);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);

    if (isFinite(newVolume)) {
      // Vérifier si l'ajustement est manuel
      if (e.nativeEvent instanceof MouseEvent) {
        setManualMute(newVolume === 0);
      }

      // Vérifier si la sourdine n'est pas déjà activée et si l'ajustement est manuel
      if (!manualMute && newVolume >= 0 && newVolume <= 1) {
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
      }

      // Activer la sourdine uniquement si le curseur de volume est mis au minimum manuellement
      setIsMuted(manualMute || newVolume === 0);
    }
  };

  const handleMuteToggle = () => {
    // Mettre à jour manuellement le statut de la sourdine
    setManualMute(!manualMute);

    // Appliquer la sourdine uniquement si le changement est manuel
    if (manualMute) {
      setIsMuted(!isMuted);

      if (!isMuted) {
        audioRef.current.volume = 0;
        setVolume(0);
      } else {
        audioRef.current.volume = volume;
        setVolume(volume);
      }
    }
  };

  return (
    <Container>
      <div onClick={handleMuteToggle}>
        {isMuted ? (
          <BsFillVolumeMuteFill color="white" size={25} />
        ) : (
          <BsFillVolumeUpFill color="white" size={25} />
        )}
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <audio ref={audioRef} src="#" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end; 
  div {
    svg {
      transition: 0.2s ease-in-out;
      &:hover {
        color: white;
      }
    }
  }

  input {
    width: 70%;
    margin-left: 10px;
  }
`;

export default Volume;
