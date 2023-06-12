import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const BooksPage = (props) => {
const [status, setStatus] = useState('available');

const navigate = useNavigate();

const handleBackToHome = () => {
navigate('/');
};

return (
<div>
<h2>Books</h2>
{props.books.length === 0 ? (
<p>There are no books available in the e-library at the moment.</p>
) : (
<table>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Author</th>
<th>Year of Publishing</th>
<th>Status</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{props.books.map((book) => (
<tr key={book.id}>
<td>{book.id}</td>
<td>{book.bookName}</td>
<td>{book.bookAuthor}</td>
<td>{book.bookYear}</td>
<td>{status}</td>
<td>
<button>Edit</button>
<button>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
)}
<button onClick={handleBackToHome}>Back to Home</button>
</div>
);
};

export default BooksPage;
 
/*
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BooksPage = (props) => {
  const navigate = useNavigate();

  const handleDeleteBook = (bookId) => {
    // Logic to delete a book
    const updatedBooks = props.books.filter((book) => book.id !== bookId);
    props.setBooks(updatedBooks);
  };

  const handleEditBook = (bookId) => {
    // Logic to edit a book
    // You can navigate to a separate edit page or open a modal/dialog to edit the book details
    console.log('Editing book with ID:', bookId);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Books</h2>
      {props.books.length === 0 ? (
        <p>There are no books available in the e-library at the moment.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Author</th>
              <th>Year of Publishing</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.bookName}</td>
                <td>{book.bookAuthor}</td>
                <td>{book.bookYear}</td>
                <td>{book.status}</td>
                <td>
                  <button onClick={() => handleEditBook(book.id)}>Edit</button>
                  <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default BooksPage;


const handleEditBook = (bookId) => {
  // Find the book with the specified ID
  const bookToEdit = props.books.find((book) => book.id === bookId);

  // Implement your logic to handle the book editing
  // You can navigate to a separate edit page or open a modal/dialog to edit the book details
  // Here's an example of updating the book's status
  const updatedStatus = bookToEdit.status === 'available' ? 'unavailable' : 'available';
  const updatedBooks = props.books.map((book) => {
    if (book.id === bookId) {
      return { ...book, status: updatedStatus };
    }
    return book;
  });

  // Update the books state with the edited book
  props.setBooks(updatedBooks);
};
*/