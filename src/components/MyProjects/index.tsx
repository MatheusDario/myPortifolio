import { ProjectDetails } from '@/utils/Data';
import { BlueText, Container, Heading, Title } from './styled';
import Project from '../Project';

export default function MyProjects() {
  return (
    <Container>
      <Heading>My Projects</Heading>
      <Title>
        What <BlueText>I Have Built</BlueText>
      </Title>
      {ProjectDetails.map((project) => (
        <Container key={project.id}>
          <Project data={project}/>
        </Container>
      ))}
    </Container>
  );
}
