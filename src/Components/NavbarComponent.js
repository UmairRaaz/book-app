import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/book-app">Book Managment App</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent