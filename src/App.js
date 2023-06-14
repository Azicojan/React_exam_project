
//App.js

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import RegistrationPage from './components/RegistrationPage';
import BooksPage from './components/BooksPage';
import UsersPage from './components/UsersPage';
import ActivePage from './components/ActivePage';



const App = () => {
    
    //the logic of users
    const [users, setUsers] = useState([]);
    const [userIdCounter, setUserIdCounter] = useState(1);

    //console.log(users)

    const addUser = (user) => {
        user.id = userIdCounter;
        setUsers([...users, user]);
        setUserIdCounter((prevCounter) => prevCounter + 1);
      };

      //the logic of books
      const [books, setBooks] = useState([]);
      const [bookIdCounter, setBookIdCounter] = useState(1);

      //console.log(books)

      const addBook = (book) => {
        book.id = bookIdCounter;
        setBooks([...books, book]);
        setBookIdCounter((prevCounter) => prevCounter + 1);
      };
     

return (
<BrowserRouter>


<Routes>

<Route path='/' element={<MainPage />} />
<Route
          path="/registration"
          element={<RegistrationPage addUser={addUser} addBook={addBook}/>}
        />
<Route path="/users" element={<UsersPage users={users} />} />       
<Route path="/books" element={<BooksPage books={books} setBooks={setBooks}/>} />
<Route path="/active" element={<ActivePage />} />

</Routes>


</BrowserRouter>
);
};





export default App;
 