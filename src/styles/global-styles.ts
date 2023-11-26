import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
//@import url("https://fonts.googleapis.com/css2?family=Prata&family=Titillium+Web&display=swap");

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Titillium Web', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${({ theme }) => theme.font.sizes.medium};
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
  }

  a {
    color: ${({theme}) => theme.colors.secondaryLight};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: .6;
    }
  }

  svg {
    margin: 0;
    padding: 0;
    text-decoration: 0;
  }
`;

