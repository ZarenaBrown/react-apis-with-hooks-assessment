import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const originalTitle = document.title;
  const emptyState = {
    users: [],
    albums: {},
    currentUser: {},
  };
  const [allData, setAllData] = useState({ ...emptyState });
  
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Awesome Album App";
    return () => document.title = originalTitle;
  }, []);

  // Load data from https://jsonplaceholder.typicode.com/albums?userId=${user.id}

  return (
    <div className="App">
      <div className="left column">
        <UserList allData={allData} setAllData={setAllData} originalTitle={originalTitle} />
      </div>
      <div className="right column">
        <AlbumList allData={allData} setAllData={setAllData} />
      </div>
    </div>
  );
}

export default App;























