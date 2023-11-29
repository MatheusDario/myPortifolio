import { Dispatch, SetStateAction } from 'react';
import { Container, FlexContainer, MenuIcon, PaddingContainer } from './styled';
import { AiOutlineClose } from 'react-icons/ai';

export type NavMenuProps = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export default function NaveMenu({ setOpenMenu }:NavMenuProps ) {
  return (
    <Container>
      <PaddingContainer>
        <FlexContainer>
          <MenuIcon onClick={() => setOpenMenu(false)}>
            <AiOutlineClose />
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>
    </Container>
  );
}
