import { MainContainer } from '@/components/MainContainer';
import { Container, MainBody } from './styled';
import ShowCase from '@/components/ShowCase';
import MySkils from '@/components/MySkils';
import MyProjects from '@/components/MyProjects';

export default function HomePage() {
  return (
    <>
      <MainContainer>
        <MainBody>
          <Container>
            <ShowCase />
            <MySkils />
            <MyProjects />
          </Container>
        </MainBody>
      </MainContainer>
    </>
  );
}
