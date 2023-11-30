import React from "react";
import styled, { withTheme } from "styled-components";
import { IoVolumeMediumOutline } from "react-icons/io5";

export default function Volume() {
  return (
    <Container>
        <IoVolumeMediumOutline size={25} color="white"/>
      <input type="range" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items
  input {
    width: 5rem;
    border-radius: 2rem;
    height: 0.5rem;
  }
`;
