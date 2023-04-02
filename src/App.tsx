import React from "react";
import "./App.css";
import AddUser from "./component/Form/AddUser/AddUser";
import AddUserTwo from "./component/Form/AddUser/AddUserTwo";
import { mockData } from "./component/Form/AddUser/inputTagData";

function App() {
  return (
    <div className="App">
      <AddUserTwo></AddUserTwo>
    </div>
  );
}

export default App;
