import React from "react";
import styled from "styled-components";

const Track = ({ title, cover }) => {
  return (
    <Container>
      <img src={cover} alt="" />
            <h4 className="track__info__track__name">{title}</h4>
            <h6 className="track__info__track__artists">
            </h6>
    </Container>
  );
};

const Container = styled.div`
width: 100%;
display: flex;
  img {
    width: 25%;
  }
  .track__info__track__artists {
    color: #ffffff;
    margin-left:10px;
  }

  .track__info__track__name {
    color: #ffffff;
    margin-left:10px;
  }

`;

export default Track;