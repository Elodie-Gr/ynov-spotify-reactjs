import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {fetchAlbumById} from "../services/api/albumApi";
import {fetchArtistById} from "../services/api/artistApi"; 
import { useParams } from "react-router-dom";
import { fetchSongById } from "../services/api/songApi";
import artistImage from "../assets/images/artist.png";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
} from "react-icons/bs";

const Playlists = () => {
  const { playlistId } = useParams();
  console.log("Playlist ID:", playlistId);
  const [playlistDataAlbum, setplaylistDataAlbum] = useState(null);
  const [playlistDataArtist, setplaylistDataArtist] = useState(null);
  const [playlistDataSong, setplaylistDataSong] = useState(null);
  const [currentlyPlayingSong, setCurrentlyPlayingSong] = useState(null);
  const [audio, setAudio] = useState(null);
  
  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    // Effect to handle play/pause logic
    const handlePlayPause = () => {
      if (audio) {
        if (currentlyPlayingSong) {
          // If a song is playing, either pause or play the current song
          if (audio.paused || audio.src !== `http://localhost:4000/${currentlyPlayingSong}`) {
            audio.play();
          } else {
            audio.pause();
          }
        } else {
          // If no song is playing, play the current song
          audio.play();
          setCurrentlyPlayingSong(playlistDataSong.audio);
        }
      }
    };

    handlePlayPause();

    // Cleanup function to handle the destruction of the previous Audio instance
    return () => {
      if (audio) {
        audio.pause();
        audio.src = "";
        audio.load();
      }
    };
  }, [audio, currentlyPlayingSong, playlistDataSong]);

  const playPauseSong = (audioUrl) => {
    if (audio && audio.src === `http://localhost:4000/${audioUrl}`) {
      // If the same song is selected, toggle play/pause
      if (audio.paused) {
        audio.play().catch((error) => console.error("Error playing audio:", error));
      } else {
        audio.pause();
      }
    } else {
      // Cleanup previous Audio instance
      if (audio) {
        audio.pause();
        audio.src = "";
        audio.load();
      }

      // Create a new Audio instance
      const newAudio = new Audio(`http://localhost:4000/${audioUrl}`);
      setAudio(newAudio);
      setCurrentlyPlayingSong(audioUrl);

      // Event listener to ensure audio is loaded before playing
      newAudio.addEventListener('loadedmetadata', () => {
        newAudio.play().catch((error) => console.error("Error playing audio:", error));
      });

      // Load the audio
      newAudio.load();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlist = await fetchAlbumById(playlistId);
        console.log("Fetched Album Data:", playlist);
        setplaylistDataAlbum(playlist);
        console.log(playlist);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchData();
  }, [playlistId]);

  useEffect(() => {
    const fetchDataSong = async () => {
      try {
        const playlistSong = await fetchSongById(playlistId);
        console.log("Fetched Song Data:", playlistSong);
        setplaylistDataSong(playlistSong);
        console.log(playlistSong);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchDataSong();
  }, [playlistId]);

  useEffect(() => {
    const fetchDataArtist = async () => {
      try {
        const playlistArtist = await fetchArtistById(playlistId);
        console.log("Fetched Artist Data:", playlistArtist);
        setplaylistDataArtist(playlistArtist);
        console.log(playlistArtist);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchDataArtist();
  }, [playlistId]);



  if (!playlistDataAlbum && !playlistDataArtist &&!playlistDataSong) {
    return <p>Loading...</p>;
  }

    return (
      <Container>
      <div className="spotify__body">
        <Sidebar />
        <div className="body">
          <Navbar />
          <div className="body__contents">
            {/* Section pour les données de musique */}
            <div className="playlist">
                {playlistDataSong && (
                  <>
                    <div className="image">
                      <img src={`http://localhost:4000/${playlistDataSong.albumCover}`} alt="selected playlist" />
                    </div>
                    <div className="details">
                      <span className="type">Sons</span>
                      <h1 className="title">{playlistDataSong.title}</h1>
                    </div>
                  </>
                )}
              </div>
  
             {/* Section pour les données de l'album */}
              <div className="playlist">
                {playlistDataAlbum && (
                  <>
                    <div className="image">
                      <img src={`http://localhost:4000/${playlistDataAlbum.albumCover}`} alt="selected playlist" />
                    </div>
                    <div className="details">
                      <span className="type">Album</span>
                      <h1 className="title">{playlistDataAlbum.title}</h1>
                    </div>
                  </>
                )}
              </div>

              {/* Section pour les données de l'artiste */}
              <div className="playlist">
                {playlistDataArtist && (
                  <>
                    <div className="image">
                      <img src={artistImage} alt="selected playlist" />
                    </div>
                    <div className="details">
                      <span className="type">Artiste</span>
                      <h1 className="title">{playlistDataArtist.name}</h1>
                    </div>
                  </>
                )}
              </div>
  
            <div className="list">
              <div className="header-row">
                <div className="col">
                  <span>#</span>
                </div>
                <div className="col">
                  <span>Titre</span>
                </div>
                <div className="col">
                  <span>Album</span>
                </div>
                <div className="col">
                  <span>
                    <AiFillClockCircle />
                  </span>
                </div>
              </div>
              {playlistDataAlbum && (
              <div className="tracks">
              {playlistDataAlbum.songs.map((song, index) => (
                <div key={song._id} className="row">
                  <div className="col">{index + 1}</div>
                  <div className="col">
                    <div className="detail">
                      <div className="info">
                        <span>{song.title}</span>
                        <span>{song.artist.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">{song.albumTitle}</div>
                  <div className="col">
                    <span>{formatDuration(song.duration)}</span>
                  </div>
                </div>
              ))}
              </div>
              )}

<div className="tracks">
      {playlistDataSong && (
        <div className="row">
          <div className="col">1</div>
          <div className="col">
            <div className="detail">
              <div className="info">
                    <div className="playPause" onClick={() => playPauseSong(playlistDataSong.audio)}>
                    {currentlyPlayingSong === playlistDataSong.audio
                        ? <BsFillPauseCircleFill />
                        : <BsFillPlayCircleFill />}
                    </div>
                <span>{playlistDataSong.title}</span>
                <span>{playlistDataSong.artist.name}</span>
              </div>
            </div>
          </div>
          <div className="col">{playlistDataSong.album.title}</div>
          <div className="col">
            <span>{formatDuration(playlistDataSong.duration)}</span>
          </div>
        </div>
      )}
    </div>

    {playlistDataArtist && (
              <div className="tracks">
              {playlistDataArtist.songs.map((song, index) => (
                <div key={song._id} className="row">
                  <div className="col">{index + 1}</div>
                  <div className="col">
                    <div className="detail">
                      <div className="info">
                        <span>{song.title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">{song.albumTitle}</div>
                  <div className="col">
                    <span>{formatDuration(song.duration)}</span>
                  </div>
                </div>
              ))}
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </Container>
  );
};

const Container = styled.div`
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
  .playlist {
    margin: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    .image {
      img {
        height: 10rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      }
    }
    .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #e0dede;
      .title {
        color: white;
        font-size: 4rem;
      }
    }
  }
  .list {
    .header-row {
      display: grid;
      grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
      margin: 1rem 0 0 0;
      color: #dddcdc;
      position: sticky;
      top: 15vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
    }
    .tracks {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      .row {
        padding: 0.5rem 1rem;
        display: grid;
        grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .col {
          display: flex;
          align-items: center;
          color: #dddcdc;
          img {
            height: 40px;
            width: 40px;
          }
        }
        .detail {
          display: flex;
          gap: 1rem;
          .info {
            display: flex;
            flex-direction: row;
          }
          .playPause {
            margin-right:10px;
          }
        }
      }
    }
}
`;

export default Playlists;