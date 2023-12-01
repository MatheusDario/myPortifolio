import { Dispatch, SetStateAction } from 'react';
import {
  Container,
  FlexContainer,
  FlexMenuItens,
  MenuIcon,
  MenuItem,
  PaddingContainer,
  PaddingMenuItens,
} from './styled';
import { AiOutlineClose } from 'react-icons/ai';
import { navLinks } from '@/utils/Data';
import { fadeInTopVariant, slideInLeft } from '@/utils/Variants';
import { motion } from 'framer-motion';

export type NavMenuProps = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export default function NaveMenu({ setOpenMenu }: NavMenuProps) {
  return (
    <Container
      as={motion.div}
      variants={slideInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PaddingContainer>
        <FlexContainer>
          <MenuIcon onClick={() => setOpenMenu(false)}>
            <AiOutlineClose />
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>

      <PaddingMenuItens
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexMenuItens>
          {navLinks.map((link) => (
            <MenuItem
              key={link.id}
              href={`#${link.href}`}
              onClick={() => setOpenMenu(false)}
            >
              {link.name}
            </MenuItem>
          ))}
        </FlexMenuItens>
      </PaddingMenuItens>
    </Container>
  );
}
