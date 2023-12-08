import React, { useState } from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const navigateToPreviousPage = () => {
    navigate(-1);
  };

  const navigateToNextPage = () => {
    navigate(+1);
  };


  return (
    <Container>
      <div className="arrow">
        <IoIosArrowDropleftCircle size={40} onClick={navigateToPreviousPage} />
        <IoIosArrowDroprightCircle size={40} onClick={navigateToNextPage}/>
      </div>
      <div className="search__bar">      
        <FaSearch />
        <input type="text" placeholder="Que souhaitez-vous écouter ?" />
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
  position: sticky;
  top: 0;
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