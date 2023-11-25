import { MainContainer } from '@/components/MainContainer';
import { Container, MainBody } from './styled';
import ShowCase from '@/components/ShowCase';
import MySkils from '@/components/MySkils';

export default function HomePage() {
  return (
    <>
      <MainContainer>
        <MainBody>
          <Container>
            <ShowCase />
            <MySkils />
          </Container>
        </MainBody>
      </MainContainer>
    </>
  );
}
