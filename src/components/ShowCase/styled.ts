import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-left: 3%;
  padding-right: 10%;
  padding-bottom: 23%;
  padding-top: 10%;
  align-items: center;
  @media (max-width:720px) {
      display: block;
      padding-bottom: 0;
    }
`;

export const Content = styled.section``;

export const Title = styled.h1`
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.superLarge};
`;

export const Heading = styled.h4`
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

export const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondaryLight};
`;

export const ParaText = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.font.sizes.extraSmall};
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

export const IconContainer = styled.span`
  color: ${({ theme }) => theme.colors.secondaryLight};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  padding-right: 20px;
  cursor: pointer;
`;

export const ShowcaseParticleContainer = styled.div`
  position: relative;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: none;
  }
`;

export const ContentAside = styled.div`
  justify-content: flex-end;
  padding-left: 15%;
`;

export const ShowcaseImageCard = styled.div`
  border: 1px solid white;
  width: max-content;
  padding-top: 2rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
`;

export const CardPerfil = styled.img``;

export const Particle = styled.img`
  position: absolute;
  top: -70px;
  left: 90px;
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`;

export const Particle2 = styled.img`
  position: absolute;
  top: 90px;
  right: -70px;
  rotate: 60deg;
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`;

export const Particle3 = styled.img`
  position: absolute;
  bottom: 10px;
  left: -70px;
  rotate: 90deg;
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`;
