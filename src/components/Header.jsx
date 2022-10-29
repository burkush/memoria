import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import Navigation from './Navigation';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledHeader = styled.header`
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 500px) {
    & {
      padding: 15px 15px;
      flex-direction: column;
    }
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 3.5rem;
  aspect-ratio: 1;
  margin-right: 1rem;
`;

const StyledLogoTitle = styled.span`
  font-weight: 700;
  font-size: 1.3rem;
  color: #1d1e2c;
  letter-spacing: 1px;
`;

function Header() {
  return (
    <StyledContainer>
      <StyledHeader>
        <Link to="/">
          <StyledLogoContainer>
            <StyledLogo src={logo} alt="Memoria logo" />
            <StyledLogoTitle>Memoria</StyledLogoTitle>
          </StyledLogoContainer>
        </Link>
        <Navigation />
      </StyledHeader>
    </StyledContainer>
  );
}

export default Header;
