import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const[users, setUsers] = useState([]);
  const[search, setSearch] = useState([]);
  const ref = useRef();

  const handleSearch = () => {
    console.log(ref.current.value);

    setSearch(
    users.filter
    ((user) => user.name.toLowerCase()
    .includes(ref.current.value))
    )
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    return res.json();
  })
  .then((data) => setUsers(data));
  }, []);

  console.log(users);

  return (
    <div className="App">
      <div className='main'>
        <h2></h2>
        <input type="text" ref={ref} onChange={() => handleSearch()}/>

          <div className='content'>
            {search.map((user) => (
            <div className='box' key={user.id}>
              <h3>{user.name}</h3>
              <hr/>
              <p>{user.email}</p>
            </div>


            ))}
          </div>
        </div>
      </div>
  );
}

export default App;
