import { motion } from 'framer-motion';
import {
  BlueText,
  Container,
  Content,
  ContentAside,
  Heading,
  IconContainer,
  ParaText,
  SkillsCard,
  SkillsCardContainer,
  Title,
} from './styled';
import { Skils } from '@/utils/Data';
import { fadeInLeftVariant, fadeInRightVariant } from '@/utils/Variants';

export default function MySkils() {
  return (
    <Container id="Skills">
      <Content>
        <SkillsCardContainer 
           as={motion.div}
           variants={fadeInLeftVariant}
           initial="hidden"
           whileInView="visible"
        >
          {Skils.map((skill) => (
            <SkillsCard>
              <IconContainer>{<skill.icon></skill.icon>}</IconContainer>
              <Heading>{skill.tech}</Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>
      </Content>
      <ContentAside 
         as={motion.div}
         variants={fadeInRightVariant}
         initial="hidden"
         whileInView="visible"
      >
        <Heading>My Skils</Heading>
        <Title>
          What <BlueText>I can do</BlueText>
        </Title>
        <ParaText>
          As a developer, I have a wide range of expirence in front-end
          development. I am proficient in Typescript, Javascript, Next, React,
          Html, Css. My strong experience in building responsive and dynamic
          user interfaces using React and Redux has allowed me to create
          engaging and interactive web applications.
        </ParaText>
        <ParaText>
          I have experience in using Next and React for building scalable and
          maintainable applications. This has allowed me to create efficient and
          sustainable code that can adapt to the changing needs of a business.
        </ParaText>
      </ContentAside>
    </Container>
  );
}
