import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-bottom: 10%;
`;

export const Content = styled.section``;

export const SkillsCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;
  padding: 0 5%;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: block;
    padding: 0;
  }
`;

export const SkillsCard = styled.div`
  width: 230px;
  border: 1px solid #fff;
  padding: 3rem 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const IconContainer = styled.span`
  color: ${({ theme }) => theme.colors.secondaryLight};
  font-size: ${({ theme }) => theme.font.sizes.superLarge};
`;

export const Heading = styled.h4`
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

export const ContentAside = styled.div`
  justify-content: flex-end;
  padding-left: 15%;
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondaryLight};
`;

export const Title = styled.h2`
  padding-top: 2rem;
  padding-bottom: 5rem;
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.font.sizes.superLarge};
`

export const ParaText = styled.p`
  color: ${({theme}) =>  theme.colors.lightGray};
  font-size: ${({theme}) => theme.font.sizes.extraSmall};
  text-align: justify;
  padding-bottom: 2rem;
`;
