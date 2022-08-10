import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../resources/logopoke.png'
import SearchBar from './SearchBar';
import {BsCart3} from 'react-icons/bs'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Navigation() {

    return (
        <div>
            <Navbar bg="light" expand="lg" className='nav-bar'>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img alt="logo" src={Logo} style={{width: '50%'}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="flex-grow-1 justify-content-evenly">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <NavDropdown title="Products" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/Product">Pokemon</NavDropdown.Item>
                            <NavDropdown.Item href="/Accessories">Accessories</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <SearchBar />
                    </Navbar.Collapse>
                    <Nav className="flex-grow-1 justify-content-evenly">
                        <Nav.Link href="/Cart">View Cart <BsCart3 /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar className="banner" sticky="top">
                <Navbar.Brand href="#Subscribe">Subscribe to Our Email List</Navbar.Brand>
            </Navbar>
        </div>
    )
}

