import React, { useState } from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { Link } from "react-router-dom";

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

  const toggleSidecar = () => {
    setSidecarOpen(!sidecarOpen);
  };

  // Données pour les cartes
  const cardData = [
    {
      title: "Carte 1",
      image: "url-image-1",
      description: "Description",
    },
    {
      title: "Carte 2",
      image: "url-image-2",
      description: "Description",
    },
    {
      title: "Carte 3",
      image: "url-image-3",
      description: "Description",
    },
    {
      title: "Carte 4",
      image: "url-image-4",
      description: "Description",
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
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
            showImageOnly={!sidecarOpen}
          />
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
  img {
    width: ${({ showImageOnly }) => (showImageOnly ? "100%" : "30%")};
    height: auto;
    border-top-left-radius: 8px;
    border-bottom-left-radius: ${({ showImageOnly }) =>
      showImageOnly ? "8px" : "0"};
  }

  div {
    flex: 1;
    padding: 8px; /* Ajustez la marge intérieure selon vos préférences */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 2px; /* Ajustez l'espace entre le titre et la description */
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
