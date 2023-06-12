
//UsersPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';




const UsersPage = (props) => {
    
const navigate = useNavigate();

const handleBackToHome = () => {
navigate('/');
};


return (
<div>
<h2>Users</h2>
{props.users.length === 0 ? (
<p>No users registered.</p>
) : (
<table>
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
</table>
)}
<button onClick={handleBackToHome}>Back to Home</button>
     
</div>
);
};

export default UsersPage;
