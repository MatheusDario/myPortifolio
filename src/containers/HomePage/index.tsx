import { MainContainer } from '@/components/MainContainer';
import { Container, MainBody } from './styled';
import ShowCase from '@/components/ShowCase';
import MySkils from '@/components/MySkils';
import MyProjects from '@/components/MyProjects';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <MainContainer>
        <MainBody>
          <Container>
            <ShowCase />
            <MySkils />
            <MyProjects />
            <Footer />
          </Container>
        </MainBody>
      </MainContainer>
    </>
  );
}
