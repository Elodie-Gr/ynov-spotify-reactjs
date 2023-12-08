import React from "react";
import styled from "styled-components";

const Track = () => {
  return (
    <Container>
        <div className="track">
          <div className="track__image">
            <img src=" " alt=" " />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">Nom</h4>
            <h6 className="track__info__track__artists">
              Artiste
            </h6>
          </div>
        </div>
    </Container>
  );
};

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &__image {
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      &__track__name {
        color: white;
      }
      &__track__artists {
        color: #b3b3b3;
      }
    }
  }
`;

export default Track;