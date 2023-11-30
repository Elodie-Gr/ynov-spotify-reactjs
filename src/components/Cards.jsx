import React from "react";
import styled from "styled-components";
import {
    BsFillPlayCircleFill,
  } from "react-icons/bs";

export default function Cards() {
    return (
            <>
              {/* Section 1 */}
              <CardsWrap>
                <h1>Titres likés</h1>
                <InlineCards>
                  <Card>
                    <CardImg>
                      <img
                        src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                        alt="Sons Likés"
                      />
                      <Button className="card__play_button">
                       <BsFillPlayCircleFill size={60}/>
                      </Button>
                    </CardImg>
        
                    <CardContent>
                      <h3>Sons likées</h3>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardImg>
                      <img
                        src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                        alt="Sons Likés"
                      />
                      <Button className="card__play_button">
                       <BsFillPlayCircleFill size={60} />
                      </Button>
                    </CardImg>
        
                    <CardContent>
                      <h3>Sons Likés</h3>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardImg>
                      <img
                        src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                        alt="Sons Likés"
                      />
                      <Button className="card__play_button">
                       <BsFillPlayCircleFill size={60} />
                      </Button>
                    </CardImg>
        
                    <CardContent>
                      <h3>Sons Likés</h3>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardImg>
                      <img
                        src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                        alt="Sons Likés"
                      />
                      <Button className="card__play_button">
                       <BsFillPlayCircleFill size={60} />
                      </Button>
                    </CardImg>
        
                    <CardContent>
                      <h3>Sons Likés</h3>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardImg>
                      <img
                        src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                        alt="Focus"
                      />
                      <Button className="card__play_button">
                        <BsFillPlayCircleFill size={60} />
                      </Button>
                    </CardImg>
        
                    <CardContent>
                      <h3>Sons Likés</h3>
                    </CardContent>
                  </Card>
                </InlineCards>
              </CardsWrap>
              {/* Section 2 */}
              <CardsWrap>
                <h1>Top tendances</h1>
                <InlineCards>
                  {/* Card 1 */}
                  <Card>
                    <CardImg>
                      <img
                        src="https://charts-images.scdn.co/REGIONAL_FR_DEFAULT.jpg"
                        alt="Regional BR"
                      />
                      <Button className="card__play_button">
                        <BsFillPlayCircleFill size={60} />
                      </Button>
                    </CardImg>
        
                    <CardContent>
                      <h3>Top 50 France</h3>
                      <span>
                        Votre point quotidien sur les titres les plus joués en France en ce moment.
                      </span>
                    </CardContent>
                  </Card>
                  {/* Card 2 */}
                  <Card>
                    <CardImg>
                      <img
                        src="https://charts-images.scdn.co/REGIONAL_FR_DEFAULT.jpg"
                        alt="Regional BR"
                      />
                      <Button className="card__play_button">
                        <BsFillPlayCircleFill size={60} />
                      </Button>
                    </CardImg>
        
                    <CardContent>
                      <h3>Top 50 France</h3>
                      <span>
                        Votre point quotidien sur les titres les plus joués en France en ce moment.
                      </span>
                    </CardContent>
                  </Card>
                  {/* Card 3 */}
                  <Card>
                    <CardImg>
                      <img
                        src="https://charts-images.scdn.co/REGIONAL_FR_DEFAULT.jpg"
                        alt="Regional FR"
                      />
                      <Button className="card__play_button">
                        <BsFillPlayCircleFill size={60} />
                      </Button>
                    </CardImg>
        
                    <CardContent>
                      <h3>Top 50 France</h3>
                      <span>
                        Votre point quotidien sur les titres les plus joués en France en ce moment.
                      </span>
                    </CardContent>
                  </Card>
                  {/* Card 4 */}
                  <Card>
                    <CardImg>
                      <img
                        src="https://charts-images.scdn.co/REGIONAL_FR_DEFAULT.jpg"
                        alt="Regional FR"
                      />
                      <Button className="card__play_button">
                        <BsFillPlayCircleFill size={60} />
                      </Button>
                    </CardImg>
        
                    <CardContent>
                      <h3>Top 50 France</h3>
                      <span>
                        Votre point quotidien sur les titres les plus joués en France en ce moment.
                      </span>
                    </CardContent>
                  </Card>
                  {/* Card 5 */}
                  <Card>
                    <CardImg>
                      <img
                        src="https://charts-images.scdn.co/REGIONAL_FR_DEFAULT.jpg"
                        alt="Regional FR"
                      />
                      <Button className="card__play_button">
                        <BsFillPlayCircleFill size={60} />
                      </Button>
                    </CardImg>
        
                    <CardContent>
                      <h3>Top 50 France</h3>
                      <span>
                        Votre point quotidien sur les titres les plus joués en France en ce moment.
                      </span>
                    </CardContent>
                  </Card>
                </InlineCards>
              </CardsWrap>
              {/* Section 3 */}
      <CardsWrap>
        <h1>Focus</h1>
        <p>Musique pour vous aider à la concentration</p>
        <InlineCards>
          <Card>
            <CardImg>
              <img
                src="https://i.scdn.co/image/ab67706f000000020c527c5b3a3398fc24082d5b"
                alt="Focus"
              />
              <Button className="card__play_button">
                <BsFillPlayCircleFill size={60} />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Télétravail</h3>
              <span>Une sélection de hits pour vous accompagner en télétravail.</span>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://i.scdn.co/image/ab67706f000000020c527c5b3a3398fc24082d5b"
                alt="Focus"
              />
              <Button className="card__play_button">
                <BsFillPlayCircleFill size={60} />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Télétravail</h3>
              <span>Une sélection de hits pour vous accompagner en télétravail.</span>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://i.scdn.co/image/ab67706f000000020c527c5b3a3398fc24082d5b"
                alt="Focus"
              />
              <Button className="card__play_button">
                <BsFillPlayCircleFill size={60} />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Télétravail</h3>
              <span>Une sélection de hits pour vous accompagner en télétravail.</span>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://i.scdn.co/image/ab67706f000000020c527c5b3a3398fc24082d5b"
                alt="Focus"
              />
              <Button className="card__play_button">
                <BsFillPlayCircleFill size={60} />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Télétravail</h3>
              <span>Une sélection de hits pour vous accompagner en télétravail.</span>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://i.scdn.co/image/ab67706f000000020c527c5b3a3398fc24082d5b"
                alt="Focus"
              />
              <Button className="card__play_button">
                <BsFillPlayCircleFill size={60} />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Télétravail</h3>
              <span>Une sélection de hits pour vous accompagner en télétravail.</span>
            </CardContent>
          </Card>
        </InlineCards>
      </CardsWrap>
    </>
  );
}

export const CardsWrap = styled.div`
  padding-bottom: 1.5rem;
  padding-left: 20px;
`;

export const InlineCards = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  overflow-y: hidden;
  grid-template-rows: 1fr
`;

export const Card = styled.div`
  position: relative;
  width: 80%;
  padding: 1rem;
  overflow: hidden;
  flex: 1;
  background-color: var(--grey-lighter);
  transition: background-color .3s ease;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
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
  padding-bottom: 100%;
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
  min-height: 62px;

  h3 {
    font-size: 1rem;
    line-height: 24px;
    text-transform: none;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    display: inline-block;
  }

  span {
    font-size: 14px;
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
  