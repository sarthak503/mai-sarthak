import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import img from '../../images/giphy.gif';
import '../header/Nav.css'
function OffcanvasExample() {
  return (
    <>
     
        <Navbar key="false" bg={img} expand="false" variant="dark" className="mb-3">
          <Container fluid>
          {/* <Navbar bg="dark">
          <Container>
          <Navbar.Brand href="#home">
            <img
              src={img}
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
        </Navbar> */}
            {/* <Navbar.Brand href="#" className='titles'>Sarthak Kumar</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-"false"`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-$"false"`}
              aria-labelledby={`offcanvasNavbarLabel-expand-"false"`}
              placement="end"
            >
              {/* <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-"false"`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header> */}
              <Offcanvas.Body bg="dark" variant="dark">
                <Nav bg="dark" variant="dark" className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About me</Nav.Link>
                  <Nav.Link href="#action2">Projects</Nav.Link>
                  <Nav.Link href="#action2">Contacts</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
   
    </>
  );
}

export default OffcanvasExample;