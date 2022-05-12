import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUser] = useState([
    {
      id: uuidv4(),
      title: "react",
    },
    {
      id: uuidv4(),
      title: "redux",
    },
  ]);

  const deleteUser = (e, id) => {
    e.preventDefault();
    setUser([...users.filter((user) => user.id !== id)]);
  };

  const addUser = (title) => {
    const newUser = {
      id: uuidv4(),
      title: title,
    };

    setUser([...users, newUser]);
  };

  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home users={users} deleteUserProp={deleteUser} />}
          />
          <Route path="/add" element={<AddUser addUserProps={addUser} />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
