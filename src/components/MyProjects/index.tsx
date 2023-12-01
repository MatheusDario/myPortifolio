import { motion } from 'framer-motion';

import { BlueText, Container, Heading, Title } from './styled';
import { ProjectDetails } from '@/utils/Data';
import { fadeInTopVariant } from '@/utils/Variants';
import Project from '../Project';

export default function MyProjects() {
  return (
    <Container id="Projects">
      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      >
        My Projects
      </Heading>
      <Title
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      >
        What <BlueText>I Have Built</BlueText>
      </Title>
      {ProjectDetails.map((project) => (
        <Container key={project.id}>
          <Project data={project} />
        </Container>
      ))}
    </Container>
  );
}
