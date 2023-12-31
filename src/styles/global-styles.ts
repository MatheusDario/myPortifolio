import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

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
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${({ theme }) => theme.font.sizes.medium};
    //background-color: ${({theme}) => theme.colors.primary};
    background: ${({theme}) => theme.colors.primary} url('images/background.svg');
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
