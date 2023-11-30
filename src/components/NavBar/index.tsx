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
import { useEffect, useState } from 'react';
import NaveMenu from '../NavMenu';
import { theme } from '@/styles/theme';

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <NavbarContainer background-color={sticky ? theme.colors.primary : 'transparent'}>
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
