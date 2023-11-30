import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    max-width: 250rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(1280px, fr));
    @media (max-width:720px) {
      display: block;
    }
  `}
`;
