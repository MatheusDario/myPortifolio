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

export default function ShowCase() {
  return (
    <Container id="Home">
      <Content>
        <Heading>Hello!</Heading>
        <Title>
          I'm <BlueText>Matheus Dario</BlueText>
        </Title>
        <SubTitle>
          I'm a <BlueText>Web Developer</BlueText>
        </SubTitle>
        <ParaText>
          Hello, my name is Matheus Dario and I'm a web developer width 2 years
          of experience in creating web applications
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
          <ShowcaseImageCard>
            <CardPerfil src={IMGPERFIL_URL} alt="Profile image" />
          </ShowcaseImageCard>
          <Particle src={PARTICLE_URL} />
          <Particle2 src={PARTICLE_URL} />
          <Particle3 src={PARTICLE_URL} />
        </ShowcaseParticleContainer>
      </ContentAside>
    </Container>
  );
}
