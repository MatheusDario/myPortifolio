import { MainContainer } from '@/components/MainContainer';
import { Container, MainBody } from './styled';
import ShowCase from '@/components/ShowCase';
import MySkils from '@/components/MySkils';
import MyProjects from '@/components/MyProjects';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function HomePage() {
  return (
    <>
      <NavBar />
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
