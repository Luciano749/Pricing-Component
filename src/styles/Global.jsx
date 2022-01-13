import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
}

html,body{
    min-height: 100%;
}

body{
    background-color: ${(props) => props.theme.colors.background};

    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;
}

:root{
    font-size: 62.5%;
}
`;

export const OutInformations = styled.div`
  height: 8rem;

  color: #333;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const SwitchArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default GlobalStyle;
