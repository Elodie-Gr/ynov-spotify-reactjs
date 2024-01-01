import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { Link } from "react-router-dom";
import { fetchAlbums } from "../services/api/albumApi";

const Card = ({ title, image, description, showImageOnly }) => {
  return (
    <CardContainer showImageOnly={showImageOnly}>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </CardContainer>
  );
};

// Composant Sidebar
const Sidebar = () => {
  const [sidecarOpen, setSidecarOpen] = useState(true);
  const [albums, setAlbums] = useState([]);

  const toggleSidecar = () => {
    setSidecarOpen(!sidecarOpen);
  };

  useEffect(() => {
    // Fetch album when the component mounts
    const fetchDataAlbum = async () => {
      try {
        const albumsData = await fetchAlbums();
        setAlbums(albumsData);
        console.log(albumsData);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchDataAlbum();
  }, []);
  const cardData = [
    {
      items: albums.slice(0, 5).map((album) => ({
        id: album._id,
        title: album.title,
        artist: album.artist.name,
        image: album.albumCover,  
      })),
    },
  ];

  return (
    <Container sidecarOpen={sidecarOpen}>
      {/* Code existant pour les liens principaux */}
      <div className="top__links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <StyledLink to="/">
              <MdHomeFilled size={20} />
            </StyledLink>
            <StyledLink to="/" className={sidecarOpen ? "" : "hidden"}>
              Accueil
            </StyledLink>
          </li>
          <li className="menu">
            <StyledLink>
              <MdSearch size={20} />
            </StyledLink>
            <StyledLink className={sidecarOpen ? "" : "hidden"}>
              Rechercher
            </StyledLink>
          </li>
          <li onClick={toggleSidecar}>
            <IoLibrary size={20} />
            <StyledLink className={sidecarOpen ? "" : "hidden"}>
              Bibliothèque
            </StyledLink>
          </li>
        </ul>
      </div>

      {/* section pour la liste de cartes */}
      <CardList>
  {cardData.map((section, index) => (
    <div key={index}>
      {section.items.map((item, itemIndex) => (
           <StyledLink to={`/playlists/${item.id}`} key={itemIndex}>
        <Card
          key={itemIndex}
          title={item.title}
          image={`http://localhost:4000/${item.image}`}
          description={item.artist}
          showImageOnly={!sidecarOpen}
        />
        </StyledLink>
      ))}
    </div>
  ))}
</CardList>
    </Container>
  );
};

const CardContainer = styled.div`
  background-color: black;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  margin: 5px; 
  border: 1px solid #333;
  padding: 5px;
  height: 60px;
  img {
    width: ${({ showImageOnly }) => (showImageOnly ? "100%" : "30%")};
    height: auto;
    border-top-left-radius: 8px;
    border-bottom-left-radius: ${({ showImageOnly }) =>
      showImageOnly ? "8px" : "0"};
  }

  div {
    flex: 1;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 2px;
    margin-left: ${({ showImageOnly }) => (showImageOnly ? "0" : "2px")};
    font-size: 12px;
  }

  p {
    font-size: 10px;
  }
`;

const CardList = styled.div`
  margin-top: 5px;
`;

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${({ sidecarOpen }) => (sidecarOpen ? "100%" : "60px")};
  overflow-y: auto;
  max-height: 100vh;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
    .hidden {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default Sidebar;
