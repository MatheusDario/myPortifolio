import styled from 'styled-components';

export const PaddingContainer = styled.div`
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1320px) {
    padding-right: 3%;
  }
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 300ms ease-in;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 2px 3px 8px 2px rgba(0,0,0,.2);
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export const Logo = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  @media (max-width: 1320px) {
    display: block;
    padding-left: 3%;
  }

`;

export const MenuIcon = styled.a`
  color: ${({theme}) => theme.colors.secondaryLight};
  font-size: 2.5rem;
  cursor: pointer;
  transition: all 300ms ease;
  display: flex;
  align-items: center;
`;
