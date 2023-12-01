import { MainContainer } from '@/components/MainContainer';
import { Container, MainBody } from './styled';
import ShowCase from '@/components/ShowCase';
import MySkils from '@/components/MySkils';
import MyProjects from '@/components/MyProjects';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <meta name="description" content="Portifolio de projetos e habilidades do Matheus Dario" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Matheus Dario</title>
      </Head>
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
