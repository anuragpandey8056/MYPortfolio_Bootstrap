import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Topmenu = () => {
  return (
    <>
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" className="bg-dark">
          <Container>
            <Navbar.Brand href="#jorney" className="text-light">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#" className="text-light">About Me</Nav.Link>
                <Nav.Link href="#projects" className="text-light">Projects</Nav.Link>
                <Nav.Link href="#skill" className="text-light">Skills</Nav.Link>
                <Nav.Link href="#about" className="text-light">About</Nav.Link>
                <NavDropdown title="More" id="collapsible-nav-dropdown" className="text-light">
                  <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                  <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets" className="text-light">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes" className="text-light">Dank memes</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Topmenu;
