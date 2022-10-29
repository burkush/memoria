import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled.div`
  padding: 10px 16px;
  background-color: #0582ca;
  color: white;
  border-radius: 4px;
  transition: background-color 150ms ease-in;

  &:hover {
    background-color: #0175b8;
  }
`;

function ButtonLink({ text, to }) {
  return (
    <Link to={to}>
      <StyledLink>{text}</StyledLink>
    </Link>
  );
}

export default ButtonLink;
