import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 1;
  background-color: ${({theme}) => theme.colors.primaryLight};
`;

export const PaddingContainer = styled.div`
  padding-top: 2em;
  padding-left: 5%;
  padding-right: 5%;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MenuIcon = styled.a`
  color: ${({theme}) => theme.colors.secondary};
  font-size: 2.5rem;
  cursor: pointer;
  transition: all 300ms ease;
  display: flex;
  align-items: center;
`;