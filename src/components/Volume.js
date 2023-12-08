import React, { useState } from "react";
import styled from "styled-components";
import {
  BsFillVolumeUpFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

const Volume = () => {

  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    setIsMuted(false);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Container>
      <div onClick={handleMuteToggle}>
    {isMuted ? (
            <BsFillVolumeMuteFill color="white" size={25}/>
          ) : (
            <BsFillVolumeUpFill color="white" size={25}/>
          )}
      <input type="range"
      min={0}
      max={1}
      step={0.01}
      value={isMuted ? 0 : volume}
      onChange={handleVolumeChange}
       />
      </div>
    </Container>
  );
};

const Container = styled.div`
display: flex;
gap: 1rem;
align-items: center;

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
  margin-left:10px;
}
`;

export default Volume;