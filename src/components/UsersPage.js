
//UsersPage.js
/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import{Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


const UsersPage = (props) => {
    
const navigate = useNavigate();

const handleBackToHome = () => {
navigate('/');
};


return (
<div style={{ margin: 20 + 'px' }}>
<h2>Users</h2>
{props.users.length === 0 ? (
<p>No users registered.</p>
) : (
<Table responsive="sm" >
<thead>
<tr>
<th>ID</th>
<th>Date of Registration</th>
<th>First Name</th>
<th>Last Name</th>
<th>Email</th>
</tr>
</thead>
<tbody>
{props.users.map((user) => (
<tr key={user.id}>
<td>{user.id}</td>
<td>{user.registrationDate}</td>
<td>{user.userFirstName}</td>
<td>{user.userLastName}</td>
<td>{user.userEmail}</td>

</tr>
))}
</tbody>
</Table>
)}

<Button variant="success" onClick={handleBackToHome} style={{ marginTop: 20 + 'px' }}>Back to Home</Button>    
</div>
);
};

export default UsersPage;*/

//UsersPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const UsersPage = (props) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleUserSelection = (user) => {
    navigate('/books', { state: { fromUsersPage: true,user: user } });
   // console.log(user)
  };

  return (
    <div style={{ margin: 20 + 'px' }}>
      <h2>Users</h2>
      {props.users.length === 0 ? (
        <p>No users registered.</p>
      ) : (
        <Table responsive="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date of Registration</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.registrationDate}</td>
                <td>{user.userFirstName}</td>
                <td>{user.userLastName}</td>
                <td>{user.userEmail}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleUserSelection(user)}
                  >
                    Select
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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

export default UsersPage;
