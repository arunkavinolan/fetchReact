import React, { useEffect, useState } from 'react';

function Fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define the URL for the API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Make a GET request using the fetch API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the user data
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
    <div className="row" style={{marginTop:"100px"}}> 

    <div className="col-sm-4">

    </div>

    <div className="col-sm-4">
        <h1 style={{backgroundColor:"blueviolet"}}>User Data</h1>
        {users.length > 0 ? (
            <ul style={{listStyleType:"none",backgroundColor:"blueviolet"}}>
              {users.map((user) => (
                   <li key={user.id} style={{backgroundColor:"grey"}}>
                       <h2>{user.name}</h2>
                       <p>Email: {user.email}</p>
                       <p>Phone: {user.phone}</p>
                       <p>Website: {user.website}</p>
                   {/* Add more user data fields as needed */}
                  </li>
              ))}
            </ul>
        ) : (
        <p>No user data available.</p>
      )}
    </div>

    <div className="col-sm-4">

    </div>
    </div> 
    </div>

  );
}

export default Fetch;