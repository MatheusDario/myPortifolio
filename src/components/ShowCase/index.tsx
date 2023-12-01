import Link from 'next/link';
import {
  BlueText,
  Container,
  Content,
  Heading,
  Title,
  SubTitle,
  ParaText,
  IconContainer,
  ContentAside,
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  CardPerfil,
  Particle,
  Particle3,
  Particle2,
} from './styled';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import {
  GITHUB_URL,
  IMGPERFIL_URL,
  LINKEDING_URL,
  PARTICLE_URL,
} from '@/config/app-config';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '@/utils/Variants';

export default function ShowCase() {
  return (
    <Container id="Home">
      <Content
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <Heading>Hello!</Heading>
        <Title>
          I'm <BlueText>Matheus Dario</BlueText>
        </Title>
        <SubTitle>
          I'm a <BlueText>Web Developer</BlueText>
        </SubTitle>
        <ParaText>
          Hello, I'm a web developer width 2 years of experience in creating web
          applications.
        </ParaText>
        <IconContainer>
          <Link target="_blank" href={LINKEDING_URL}>
            <BsLinkedin />
          </Link>
        </IconContainer>
        <IconContainer>
          <Link target="_blank" href={GITHUB_URL}>
            <BsGithub />
          </Link>
        </IconContainer>
      </Content>

      <ContentAside>
        <ShowcaseParticleContainer>
          <ShowcaseImageCard
            as={motion.div}
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
          >
            <CardPerfil src={IMGPERFIL_URL} alt="Profile image" />
          </ShowcaseImageCard>
          <Particle
            as={motion.img}
            animate={{ x: [0, 100, 0], rotate: 360, scale: [1, 0.5, 1] }}
            transition={{
              duration: 20,
              repeat: Infinity,
            }}
            src={PARTICLE_URL}
          />
          <Particle2
            src={PARTICLE_URL}
            as={motion.img}
            animate={{ x: [0, 100, 10], rotate: 360, scale: [1, 0.8, 1] }}
            transition={{
              duration: 18,
              repeat: Infinity,
            }}
          />
          <Particle3
            src={PARTICLE_URL}
            as={motion.img}
            animate={{ x: [0, -100, 10], rotate: 360, scale: [1, 0.8, 1] }}
            transition={{
              duration: 15,
              repeat: Infinity,
            }}
          />
        </ShowcaseParticleContainer>
      </ContentAside>
    </Container>
  );
}
