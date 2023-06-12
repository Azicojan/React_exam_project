
//RegistrationPage.js

import React, { useState } from 'react';
import { Form, ButtonGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css'


const RegistrationPage = ({ addUser, addBook}) => {


const [userFirstName, setUserFirstName] = useState('');
const [userLastName, setUserLastName] = useState('');
const [userEmail, setUserEmail] = useState('');


const [bookName, setBookName] = useState('');
const [bookAuthor, setBookAuthor] = useState('');
const [bookYear, setBookYear] = useState('');

const navigate = useNavigate();

const handleUserSubmit = (e) => {
e.preventDefault();
// Logic to handle user form submission
const newUser = {
 
  registrationDate: new Date().toLocaleDateString(),
  userFirstName,
  userLastName,
  userEmail,
  
};

addUser(newUser);


setUserFirstName('');
setUserLastName('');
setUserEmail('');


};


const handleBookSubmit = (e) => {
e.preventDefault();
// Logic to handle book form submission
const newBook = {
 
  registrationDate: new Date().toLocaleDateString(),
  bookName,
  bookAuthor,
  bookYear,
  
};

addBook(newBook);


setBookName('');
setBookAuthor('');
setBookYear('');

};

const handleBackToHome = () => {
navigate('/');
};

const handleToUsers = () => {
  navigate('/users')
}

const handleToBooks = () => {
  navigate('/books')
}

const handleToActive = () => {
  navigate('/active')
}

return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="user_registration_title">User Registration</h2>
      <Form onSubmit={handleUserSubmit} className="text-center" style={{ marginTop: 20 + 'px' }}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          
          <Form.Control
            type="text"
            placeholder="Enter a first name"
            value={userFirstName}
            onChange={(e) => setUserFirstName(e.target.value)}
            className="form-control"
            
          />
          
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          
          <Form.Control
            type="text"
            placeholder="Enter a last name"
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
            className="form-control"
          />
          
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          
          <Form.Control
            type="email"
            placeholder="Enter an email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="form-control"
          />
          
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: 30 + 'px' }}>
          Submit User
        </Button>
      </Form>
  
      <h2 className="book_registration_title">Book Registration</h2>
      <Form onSubmit={handleBookSubmit} className="text-center">
        <Form.Group controlId="bookName">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a book name"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="bookAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter an author's name"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="bookYear">
          <Form.Label>Year of Publishing</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the year of publishing"
            value={bookYear}
            onChange={(e) => setBookYear(e.target.value)}
            className="form-control"
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: 30 + 'px' }}>
          Submit Book
        </Button>
      </Form>
  
      <ButtonGroup style={{ marginTop: 30 + 'px' }}>
      <Button variant="success" onClick={handleBackToHome}>Back to Home</Button>
      <Button variant="success" onClick={handleToUsers}>Users</Button>
      <Button variant="success" onClick={handleToBooks}>Books</Button>
      <Button variant="success" onClick={handleToActive}>Active</Button>

    </ButtonGroup>
     
    </div>
  );
  


};

export default RegistrationPage;

