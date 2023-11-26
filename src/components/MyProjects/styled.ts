import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const Heading = styled.h4`
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

export const Title = styled.h2`
  padding-top: 2rem;
  padding-bottom: 5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.superLarge};
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondaryLight};
`;
