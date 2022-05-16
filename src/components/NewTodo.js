import React, { useState } from "react";

const NewTodo = (props) => {
    const [todo,setTodo] = useState("");

const onChangeHandler = (event)=> {
    setTodo(event.target.value)
}
const onSubmitHandler = (event)=> {
event.preventDefault();
if( todo !== ""){
    props.onClick(todo);
    setTodo("")
}
}
    return (
        <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="form-control mt-4"
          id="todo-name"
          placeholder="Yeni bir todo giriniz..."
          onChange = {onChangeHandler}
          value={todo}
        />
        <button type="submit" href="/" className="btn btn-primary d-block mt-4 w-100">
          Ekle
        </button>
      </form>
    )

}

export default NewTodo;