import React, { useState } from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({
    songs: [],
    artists: [],
    albums: [],
  });

  const navigateToPreviousPage = () => {
    navigate(-1);
  };

  const navigateToNextPage = () => {
    navigate(+1);
  };

  const handleSearch = async () => {
    try {
       const songsResponse = await fetch(`http://localhost:5001/api/v1/song/${searchQuery}`);
      const artistsResponse = await fetch(`http://localhost:5001/api/v1/artist/${searchQuery}`);
      const albumsResponse = await fetch(`http://localhost:5001/api/v1/album/${searchQuery}`);

      const songsData = await songsResponse.json();
      const artistsData = await artistsResponse.json();
      const albumsData = await albumsResponse.json();

      setSearchResults({
        songs: songsData,
        artists: artistsData,
        albums: albumsData,
      });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  

  return (
    <Container>
      <div className="arrow">
        <IoIosArrowDropleftCircle size={40} onClick={navigateToPreviousPage} />
        <IoIosArrowDroprightCircle size={40} onClick={navigateToNextPage}/>
      </div>
      <div className="search__bar">      
        <FaSearch onClick={handleSearch} />
        <input type="text" placeholder="Que souhaitez-vous écouter ?" value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />
            {searchResults.songs.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))}
      </div>
      <div className="avatar">
        <a>
          <CgProfile />
          <span>SpoWish</span>
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  transition: 0.3s ease-in-out;
  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0,0,0,0.7)" : "none"};
  .arrow {
    padding: 0.4rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .avatar {
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: white;
      font-weight: bold;
      svg {
        font-size: 1.3rem;
        background-color: #282828;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
      }
    }
  }
  .search__bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
      
    }
  }
`;

export default Navbar;