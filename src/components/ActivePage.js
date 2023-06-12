import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActivePage = () => {
const activeUsers = []; // Your list of active users goes here
const navigate = useNavigate();

const handleBackToHome = () => {
navigate('/');
};
return (
<div>
<h2>Active Users</h2>
{activeUsers.length === 0 ? (
<p>No active users.</p>
) : (
<table>
<thead>
<tr>
<th>User</th>
<th>Books Borrowed</th>
<th>Date of Return</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{activeUsers.map((user) => (
<tr key={user.id}>
<td>{user.name}</td>
<td>
{user.books.map((book) => (
<div key={book.id}>
{book.name} by {book.author}
</div>
))}
</td>
<td>{user.returnDate}</td>
<td>
<button>Returned</button>
<button>Prolonged</button>
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

export default ActivePage;