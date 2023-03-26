import './navbar.css';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Router
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className="navbar">
    <Container>
      <Navbar.Brand>
        <NavLink to={'/'}> <img src="/assets/images/logo.png" alt="brand-logo" className="logo"/></NavLink>
      </Navbar.Brand>
      <Nav>
        <Nav.Link>
          <NavLink to={'/brand/Ducatti'} className="brandLink">Ducatti</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to={'/brand/EGO'} className="brandLink">EGO</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to={'/brand/Suzuki'} className="brandLink">Suzuki</NavLink>
        </Nav.Link>
      </Nav>
    </Container>
    </Navbar>
  )
};

export default NavBar;