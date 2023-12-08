import React, { useState } from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidecarOpen, setSidecarOpen] = useState(true);

  const toggleSidecar = () => {
    setSidecarOpen(!sidecarOpen);
  };

  return (
    <Container sidecarOpen={sidecarOpen}>
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
            <MdHomeFilled size={20}/>
          </StyledLink>
            <StyledLink to="/" className={sidecarOpen ? "" : "hidden"}>Accueil</StyledLink>
          </li>
          <li className="menu">
          <StyledLink>
          <MdSearch size={20}/>
          </StyledLink>
          <StyledLink className={sidecarOpen ? "" : "hidden"}>Rechercher</StyledLink>
          </li>
          <li onClick={toggleSidecar}>
            <IoLibrary size={20}/>
            <StyledLink className={sidecarOpen ? "" : "hidden"} >Bibliothèque</StyledLink>
          </li>
        </ul>
      </div>
    </Container>
  );
}

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