import React from "react";
import  { useState, useEffect } from "react";


function Gitapi() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  }

  const filteredUsers = users.filter(user =>
    user.login.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white rounded-lg p-4 shadow-lg">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="rounded-xl w-24 h-24 mx-auto"
            />
            <h2 className="text-xl text-center mt-4">{user.login}</h2>
            <a
              href={user.html_url}
              
              rel="noopener noreferrer"
              className="block text-center text-fuchsia-800 mt-2"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
      <div className="p-12">
      <h1 className="text-4xl font-bold text-center text-fuchsia-800 mb-6">GitHub User Details</h1>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-fuchsia-400"
          placeholder="Search for users..."
          value={query}
          onChange={handleSearch}
        />
      </div>
      </div>
    </div>
  );
}



export default Gitapi;
