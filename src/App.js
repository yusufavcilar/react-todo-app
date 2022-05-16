import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import NewTodo from "./components/NewTodo";

function App() {

   const [todos,setTodos] = useState([]);

   const addTodo = (todo)=> {
     setTodos((prevState) => {
       return [...prevState,todo]
     })
   }
  return (
    <div className="App vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-5" style={{ width: "400px" }}>
      <div className="card-body">
          <h5 className="card-title text-center text-primary">Todo Ekle</h5>
         <NewTodo onClick={addTodo}/>
        </div>
        <ListGroup data={todos}/>
      </div>
    </div>
  );
}

export default App;
