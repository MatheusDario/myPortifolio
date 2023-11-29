import { GiHamburgerMenu } from 'react-icons/gi';
import { BlueText } from '../MySkils/styled';
import {
  Container,
  FlexContainer,
  Logo,
  MenuIcon,
  NavbarContainer,
  PaddingContainer,
} from './styled';
import { useState } from 'react';
import NaveMenu from '../NavMenu';

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <NavbarContainer>
      <PaddingContainer>
        <Container>
          <FlexContainer>
            <Logo>
              Matheus <BlueText>Dario</BlueText>
            </Logo>
            <MenuIcon onClick={() => setOpenMenu(true)}>
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>

        {openMenu && <NaveMenu setOpenMenu={setOpenMenu} />}
      </PaddingContainer>
    </NavbarContainer>
  );
}
