import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    max-width: 200rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(1800px, fr));
  `}
`;
