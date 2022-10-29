import { useEffect } from 'react';
import heroImage from '../../img/hero-photo.jpg';
import styled from 'styled-components';

const StyledHome = styled.section`
  padding: 0 15px;
  position: relative;
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroImage}) no-repeat center center;
  background-size: cover;
`;

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HomeContent = styled.div`
  padding: 100px 0;
  max-width: 600px;
  height: 90vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    & {
      padding: 50px 0;
      justify-content: flex-start;
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 2.2rem;
  text-shadow: #000 1px 0 10px;
`;

const Subtitle = styled.p`
  margin-bottom: 30px;
  font-size: 1.3rem;
  color: #eee;
  text-shadow: #000 1px 0 10px;
`;

function Home() {
  useEffect(() => {
    document.title = 'Memoria';
  });
  return (
    <StyledHome>
      <StyledContainer>
        <HomeContent>
          <Title>Master complex subjects easily with our flashcards</Title>
          <Subtitle>
            Join our community and learn various topics using flashcards and
            games to achieve your goals at school, university, and beyond!
          </Subtitle>
          <a href="#" className="button-filled">
            Join our community
          </a>
        </HomeContent>
      </StyledContainer>
    </StyledHome>
  );
}

export default Home;
