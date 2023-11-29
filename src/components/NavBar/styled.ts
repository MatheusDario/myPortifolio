import styled from 'styled-components';

export const PaddingContainer = styled.div`
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 300ms ease-in;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export const Logo = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

export const MenuIcon = styled.a`
  color: ${({theme}) => theme.colors.secondary};
  font-size: 2.5rem;
  cursor: pointer;
  transition: all 300ms ease;
  display: flex;
  align-items: center;
`;