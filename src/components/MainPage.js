
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../App.css'

const MainPage = () => {
return (
<div>
<Navbar  className='navbar' bg="dark" variant="dark">
<Container className="justify-content-center" >

<Nav variant='underline' activeKey='/' >
<Nav.Link as={Link} to="/">Home</Nav.Link>
<Nav.Link as={Link} to="/registration">Registration</Nav.Link>
<Nav.Link as={Link} to="/books">Books</Nav.Link>
<Nav.Link as={Link} to="/users">Users</Nav.Link>
<Nav.Link as={Link} to="/active">Active</Nav.Link>
</Nav>
</Container>
</Navbar>
<h1 className='title'>Welcome to the Electronic Library!</h1>
</div>
);
};

export default MainPage;
 