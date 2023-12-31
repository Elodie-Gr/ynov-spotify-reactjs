import React, { useRef, useState } from "react";
import styled from "styled-components";
import CurrentTrack from "../components/Track";
import PlayerControls from "../components/PlayerControls";

const Footer = ({ currentTrackInfo }) => {

  return (
    <Container>
      <CurrentTrack
        title={currentTrackInfo.title == null ? "" : currentTrackInfo.title}
        //artist={currentTrackInfo.artist == null ? "" : currentTrackInfo.artist}
        cover={currentTrackInfo.cover == null ? "" : currentTrackInfo.cover}
      />
      <PlayerControls
        durationAudio={currentTrackInfo.durationAudio == null ? "" : currentTrackInfo.durationAudio}
        audioAudio={currentTrackInfo.audioAudio == null ? "" : currentTrackInfo.audioAudio}/>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #181818;
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export default Footer;