import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;

  & div {
    flex: 1;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: block;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Heading = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  padding-bottom: 1rem;
`;

export const IconContainer = styled.span`
  color: ${({ theme }) => theme.colors.secondaryLight};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  cursor: pointer;
`;

export const PaddingContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: block;
  }
`;

export const TechStackCard = styled.span`
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 5px;

    @media ${({ theme }) => theme.breakpoints.mobile}{
        margin-right: 1rem;
        margin-top: 1rem;
    }
`;

export const ParaText = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.font.sizes.extraSmall};
  padding-top: 1.5rem;
  padding-bottom: 2rem;
`;

export const MyButton = styled.button`
  display: inline-block;
  width: max-content;
  padding: 1rem 2rem;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.primaryLight};
  border: 1px solid ${({theme}) => theme.colors.gray};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({theme}) => theme.colors.primaryLight};
    background-color: ${({theme}) => theme.colors.white};
  }
`;

export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: block;
  }
`

export const ProjectImage = styled.img`
    border: 1px solid #fff;
    width: 80%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;

    @media ${({ theme }) => theme.breakpoints.mobile}{
        width: 100%;
        margin-top: 2rem;
    }
`

