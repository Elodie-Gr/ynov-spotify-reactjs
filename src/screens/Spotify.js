import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Body from "./Body";


const Spotify = ({currentTrackInfo}) => {
  const defaultTrackInfo = {
    title: "",
    durationAudio: "",
    cover: "",
  };
  const { title, durationAudio, cover } = currentTrackInfo || defaultTrackInfo;
  return (
    <Container>
      <div className="spotify__body">
        <Sidebar />
        <div className="body">
          <Navbar/>
          <div className="body__contents">
            <Body/>
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer currentTrackInfo={{ title, cover, durationAudio }} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify__body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;

export default Spotify;