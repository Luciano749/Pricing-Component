import styled from "styled-components";
import { darken } from "polished";

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex-wrap: wrap;
`;

export const Card = styled.div`
  height: 40rem;
  background-color: ${(props) => props.theme.colors.primary};

  margin: 0 2rem;
  margin-top: 5rem;
  padding: 2rem;
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  text-align: center;

  &:nth-child(2) {
    margin-bottom: 10rem;
    background-color: ${(props) => darken("0.3", props.theme.colors.primary)};
  }

  @media (max-width: 1341px) {
    margin: 1rem;
  }

  @media (max-width: 1281px) {
    margin: 1rem;

    &:nth-child(2) {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 430px) {
    width: calc(100% - 2rem);
  }
`;

export const UsageText = styled.h2`
  font-size: 3rem;
  @media (max-width: 430px) {
    font-size: 2.2rem;
  }
`;
export const Price = styled.h1`
  font-size: 12rem;
  @media (max-width: 430px) {
    font-size: 7rem;
  }
`;
export const RandomText = styled.h3`
  font-size: 2.5rem;
  @media (max-width: 430px) {
    font-size: 2rem;
  }
`;

export const LearnMoreButton = styled.button`
  background-color: ${(props) => props.theme.colors.secundary};

  padding: 1rem;
  border-radius: 1rem;

  font-size: 2.3rem;
  color: ${(props) => props.theme.colors.buttonText};

  cursor: pointer;
  @media (max-width: 430px) {
  }
`;
