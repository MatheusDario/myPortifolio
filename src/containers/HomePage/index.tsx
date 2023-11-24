import { MainContainer } from '@/components/MainContainer';
import { Container, MainBody } from './styled';
import ShowCase from '@/components/ShowCase';

export default function HomePage() {
  return (
    <>
      <MainContainer>
        <MainBody>
          <Container>
            <ShowCase />
          </Container>
        </MainBody>
      </MainContainer>
    </>
  );
}
