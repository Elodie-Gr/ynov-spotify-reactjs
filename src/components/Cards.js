import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { fetchSongs } from "../services/api/songApi";
import { fetchArtists } from "../services/api/artistApi";
import { fetchAlbums } from "../services/api/albumApi";
import artistImage from "../assets/images/artist.png";

const Cards = () => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // Fetch songs when the component mounts
    const fetchData = async () => {
      try {
        const songsData = await fetchSongs();
        setSongs(songsData);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Fetch artist when the component mounts
    const fetchDataArtist = async () => {
      try {
        const artistsData = await fetchArtists();
        setArtists(artistsData);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchDataArtist();
  }, []);

  useEffect(() => {
    // Fetch album when the component mounts
    const fetchDataAlbum = async () => {
      try {
        const albumsData = await fetchAlbums();
        setAlbums(albumsData);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchDataAlbum();
  }, []);

  const cardData = [
    {
      title: "Derniers sons",
      items: songs.slice(0, 10).map((song) => ({
        id: song._id,
        title: song.title,
        image: song.albumCover,  
        artist: song.artistName,
      })),
    },
    {
      title: "Artistes",
      items: artists.slice(0, 10).map((artist) => ({
        id: artist._id,
        title: artist.name,
        image: artist.image, 
      })),
    },
    {
      title: "Albums",
      items: albums.slice(0, 10).map((album) => ({
        id: album._id,
        title: album.title,
        artist: album.artist.name,
        image: album.albumCover,  
      })),
    },
  ];

  
  return (
    <>
      {cardData.map((section, index) => (
        <CardsWrap key={index}>
          <h1>{section.title}</h1>
          <InlineCards>
            {section.items.map((item, itemIndex) => (
              <StyledLink to={`/playlists/${item.id}`} key={itemIndex}>
                <Card>
                  <CardImg>
                    <img src={item.image != null ? `http://localhost:4000/${item.image}` : artistImage} alt={item.title} />
                    <Button className="card__play_button">
                      <BsFillPlayCircleFill size={60} color="green" />
                    </Button>
                  </CardImg>

                  <CardContent>
                    <h3>{item.title}</h3>
                    {item.artist && <span>{item.artist}</span>}
                  </CardContent>
                </Card>
              </StyledLink>
            ))}
          </InlineCards>
        </CardsWrap>
      ))}
    </>
  );
};

export const CardsWrap = styled.div`
  padding-bottom: 1.5rem;
  padding-left: 20px;
  h1 {
    color:white;
  }
`;

export const InlineCards = styled.div`
display: flex;
  overflow-x: auto;
  margin-bottom: -1.5rem;
  padding-bottom: 1.5rem;
  width: 100%; 

  & > * {
    flex: 0 0 250px; // Réglez une largeur fixe pour chaque carte (ajustez au besoin)
    margin-right: 0;
    height: 100%; // Force les cartes à avoir la même hauteur
    display: flex; // Utilisez le modèle de boîte flexible
    flex-direction: column; /
  }
`;

export const Card = styled.div`
  position: relative;
  width: 70%;
  padding: 1rem;
  overflow: hidden;
  flex: 1;
  background-color: var(--grey-lighter);
  transition: background-color .3s ease;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  max-width: 200px;
  &:hover {
    background-color: #282828
  }
  &:hover div.card__play_button {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardImg = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding-bottom: 90%;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2px;
  }
`;

export const CardContent = styled.div`

  h3 {
    font-size: 1rem;
    line-height: 24px;
    text-transform: none;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    display: inline-block;
  }

  span {
    font-size: 14px;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 4px;
    white-space: normal;

    color: var(--grey-text);
  }
`;

export const Button = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  transform: translateY(0.5rem);
  transition: all .3s ease;
  display: flex;
  width: 60px;
  height: 60px;
  background-color: var(--green-button);
  border-radius: 50%;
  opacity: 0;
  &:hover {
    transform: scale(1.06);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default Cards;