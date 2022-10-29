import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 30px;
`;

function Navigation() {
  return (
    <nav>
      <StyledUL>
        <li>
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) =>
              isActive ? { backgroundColor: 'rgb(230, 230, 230)' } : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/flashcards"
            className="nav-link"
            style={({ isActive }) =>
              isActive ? { backgroundColor: 'rgb(230, 230, 230)' } : undefined
            }
            end
          >
            Flashcards
          </NavLink>
        </li>
      </StyledUL>
    </nav>
  );
}

export default Navigation;
