import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userage, collegeName) => {
    setUsersList((prevusersList) => {
      return [
        ...prevusersList,
        {
          id: Math.random().toString(),
          name: username,
          age: userage,
          collegeName: collegeName,
        },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
