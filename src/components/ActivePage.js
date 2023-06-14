
//AcitvePage.js
/*

//ActivePage.js
import React, { useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const ActivePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeObject, setActiveObject] = useState(null);

  useEffect(() => {
    // Check if activeObject is stored in localStorage
    const storedActiveObject = localStorage.getItem('activeObject');
    if (storedActiveObject) {
      setActiveObject(JSON.parse(storedActiveObject));
    } else {
      setActiveObject(location.state?.activeObject);
    }
  }, [location.state]);
  
  console.log(location.state);
  

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleReturnBook = () => {
    localStorage.removeItem('activeObject');
    setActiveObject(null);
    navigate('/');
  };
   
  useEffect(() => {
    // Store activeObject in localStorage
    if (activeObject) {
      localStorage.setItem('activeObject', JSON.stringify(activeObject));
    }
  }, [activeObject]);


  return (
    <div style={{ margin: 20 + 'px' }}>
      <h2>Active Users</h2>
      {activeObject ? (
         <Table responsive="sm">
         <thead>
           <tr>
             <th>User ID</th>
             <th>User First Name</th>
             <th>User Last Name</th>
             <th>User Email</th>
             <th>Book Name</th>
             <th>Book Author</th>
             <th>Year of Publishing</th>
             <th>Lending Date</th>
           </tr>
         </thead>
         <tbody>
              <tr>
              <td>{activeObject.id}</td>
              <td>{activeObject.userFirstName}</td>
              <td>{activeObject.userLastName}</td>
              <td>{activeObject.userEmail}</td>
              <td>{activeObject.book.bookName}</td>
              <td>{activeObject.book.bookAuthor}</td>
              <td>{activeObject.book.bookYear}</td>
              <td>{activeObject.lendingDate}</td>
              <td>
                <Button variant="danger" onClick={handleReturnBook}>
                  Return Book
                </Button>
              </td>
             </tr>
           
         </tbody>
       </Table>

        
      ) : (
        <p>No user selected.</p>
      )}
       <Button
        variant="success"
        onClick={handleBackToHome}
        style={{ marginTop: 20 + 'px' }}
      >
        Back to Home
      </Button>
      
    </div>
  );
};

export default ActivePage;*/


//ActivePage.js
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const ActivePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  

  useEffect(() => {
    const storedActiveObjects = localStorage.getItem('activeObjects');
    if (!storedActiveObjects) {
      const activeObject = location.state?.activeObject;
      if (activeObject && activeObject.user && activeObject.book) {
        localStorage.setItem('activeObjects', JSON.stringify([activeObject]));
      }
    }
  }, [location.state]);
  

  //console.log(location.state.activeObject)
  //console.log(location.state.activeObject.length)
 


  const handleBackToHome = () => {
    navigate('/');
  };


 /*
  const handleReturnBook = () => {
    localStorage.removeItem('activeObjects');
    navigate('/');
  };
  */

  const handleReturnBook = (index) => {
    const storedActiveObjects = JSON.parse(localStorage.getItem('activeObjects') || '[]');
    const updatedObjects = [...storedActiveObjects];
    updatedObjects.splice(index, 1);
    localStorage.setItem('activeObjects', JSON.stringify(updatedObjects));
    navigate('/active');
  };
  
  

  const storedActiveObjects = JSON.parse(localStorage.getItem('activeObjects') || '[]');
  const activeObjects = storedActiveObjects.filter(
    activeObject => activeObject.user && activeObject.book
  );
  //console.log(activeObject.user.id)
 
  return (
    <div style={{ margin: '20px' }}>
      <h2>Active Users</h2>
      {activeObjects.length > 0 ? (
        <Table responsive="sm">
          <thead>
            <tr>
              <th>User ID</th>
              <th>User First Name</th>
              <th>User Last Name</th>
              <th>User Email</th>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Year of Publishing</th>
              <th>Lending Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {activeObjects.map((activeObject, index) => (
              <tr key={index}>
                <td>{activeObject.user.id}</td>
                <td>{activeObject.user.userFirstName}</td>
                <td>{activeObject.user.userLastName}</td>
                <td>{activeObject.user.userEmail}</td>
                <td>{activeObject.book.bookName}</td>
                <td>{activeObject.book.bookAuthor}</td>
                <td>{activeObject.book.bookYear}</td>
                <td>{activeObject.lendingDate}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleReturnBook(index)}
                  >
                    Return Book
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No users selected.</p>
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

  export default ActivePage;
    
    