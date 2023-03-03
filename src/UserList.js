import React, { useState, useEffect } from "react";

function UserList({ allData, setAllData, originalTitle }) {
  useEffect(() => {
    const abortController = new AbortController();
    
    async function loadUsers() {
      try {
        const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
         { signal: abortController.signal }
        );
        const foundUsers = await response.json();
        setAllData({ ...allData, users: foundUsers });
      } catch (error) {
        if(error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    };
    
    loadUsers();
    
    return () => abortController.abort();
  }, []);
  
  
  const {users, currentUser} = allData;
  
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <button type="button" onClick={() => setAllData({ ...allData, currentUser: user })}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
