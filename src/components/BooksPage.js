


//BooksPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const BooksPage = ({ books, setBooks }) => {
  //const [status, setStatus] = useState('available');
  const [selectedBook, setSelectedBook] = useState(null);
  const [editedBook, setEditedBook] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const fromUsersPage = location.state?.fromUsersPage || false;


  useEffect(() => {
    const storedActiveObjects = JSON.parse(localStorage.getItem('activeObjects') || '[]');
    const borrowedBookIds = storedActiveObjects.map(activeObject => activeObject.book.id);
    

    // Update the status of books based on borrowedBookIds
    const updatedBooks = books.map(book => ({
      ...book,
      status: borrowedBookIds.includes(book.id) ? 'unavailable' : 'select'
    }));

    setBooks(updatedBooks);
  },[]);





  const handleBackToHome = () => {
    navigate('/');
  };
  

const handleSelectBook = (book) => {

  if (!fromUsersPage) {
    return; // Prevent selection if not navigated from the Users page
  }
  
  const user = location.state?.user;
  const activeObject = { user, book, lendingDate: new Date().toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })};


  const storedActiveObjects = localStorage.getItem('activeObjects');
  if (storedActiveObjects) {
    const existingActiveObjects = JSON.parse(storedActiveObjects);
    const updatedActiveObjects = [...existingActiveObjects, activeObject];
    localStorage.setItem('activeObjects', JSON.stringify(updatedActiveObjects));
  } else {
    const initialActiveObjects = [activeObject];
    localStorage.setItem('activeObjects', JSON.stringify(initialActiveObjects));
  }

  setSelectedBook(book);

  
  navigate('/active');
  console.log(activeObject)
};




  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  const handleEditBook = (bookId) => {
    const book = books.find((book) => book.id === bookId);
    setEditedBook(book);
  };

  const handleSaveBook = () => {
    const updatedBooks = books.map((book) =>
      book.id === editedBook.id ? editedBook : book
    );
    setBooks(updatedBooks);
    setEditedBook(null);
  };

 

  return (
    <div style={{ margin: '20px' }}>
      <h2>Books</h2>
      {books.length === 0 ? (
        <p>There are no books available in the e-library at the moment.</p>
      ) : (
        <Table responsive="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Author</th>
              <th>Year of Publishing</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>
                  {editedBook && editedBook.id === book.id ? (
                    <input
                      type="text"
                      value={editedBook.bookName}
                      onChange={(e) =>
                        setEditedBook({
                          ...editedBook,
                          bookName: e.target.value,
                        })
                      }
                    />
                  ) : (
                    book.bookName
                  )}
                </td>
                <td>
                  {editedBook && editedBook.id === book.id ? (
                    <input
                      type="text"
                      value={editedBook.bookAuthor}
                      onChange={(e) =>
                        setEditedBook({
                          ...editedBook,
                          bookAuthor: e.target.value,
                        })
                      }
                    />
                  ) : (
                    book.bookAuthor
                  )}
                </td>
                <td>
                  {editedBook && editedBook.id === book.id ? (
                    <input
                      type="text"
                      value={editedBook.bookYear}
                      onChange={(e) =>
                        setEditedBook({
                          ...editedBook,
                          bookYear: e.target.value,
                        })
                      }
                    />
                  ) : (
                    book.bookYear
                  )}
                </td>
                
                <td>
                  {editedBook && editedBook.id === book.id ? (
                    <Button
                      variant="secondary"
                      size="sm"
                      style={{ width: '100px' }}
                      onClick={handleSaveBook}
                    >
                      Save
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="secondary"
                        size="sm"
                        style={{ width: '100px' }}
                        onClick={() => handleEditBook(book.id)}
                      >
                        Edit
                      </Button>{' '}
                      <Button
                        variant="secondary"
                        size="sm"
                        style={{ width: '100px' }}
                        onClick={() => handleDeleteBook(book.id)}
                      >
                        Delete
                      </Button>{' '}
                      <Button
                        variant="secondary"
                        size="sm"
                        style={{ width: '100px' }}
                        onClick={() => handleSelectBook(book)}
                        disabled={!fromUsersPage || book.status === 'unavailable'}
                      >
                        {book.status === 'unavailable' ? 'Unavailable' : 'Select'}
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Button
        variant="success"
        onClick={handleBackToHome}
        style={{ marginTop: '20px' }}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default BooksPage;
