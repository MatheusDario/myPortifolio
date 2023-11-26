import { FaGithub } from 'react-icons/fa';
import {
  Center,
  Container,
  Heading,
  IconContainer,
  MyButton,
  PaddingContainer,
  ParaText,
  ProjectImage,
  ProjectImageContainer,
  TechStackCard,
} from './styled';
import Link from 'next/link';
import { ProjectDetailsProps } from '@/utils/Data';

export type ProjectsPros = {
  data: ProjectDetailsProps;
};

export default function Project({ data }: ProjectsPros) {
  return (
    <Container>
      <div>
        <Center>
          <Heading>{data.projetc_name}</Heading>
          <IconContainer>
            <Link target="_blank" href={data.repository_url}>
              <FaGithub />
            </Link>
          </IconContainer>
        </Center>
        <PaddingContainer>
          <Container>
            {data.tech_stack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </Container>
        </PaddingContainer>

        <ParaText>{data.project_desc}</ParaText>
        <Link target="_blank" href={data.projet_url}>
          <MyButton>Visit my Website</MyButton>
        </Link>
      </div>

      <ProjectImageContainer>
        <ProjectImage src={data.projetc_img} alt='Projects Images' />
      </ProjectImageContainer>
    </Container>
  );
}
