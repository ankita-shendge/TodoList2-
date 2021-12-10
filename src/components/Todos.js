import React from "react";
import Todoitem from "./Todoitem";

export const Todos = (props) => {
  let myStyle = {
    minHeight :"70vh",
    margin : "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className = "my-3"> Todos's List</h3>
      {props.todos.length === 0
        ? "No Todo's to display"
        : props.todos.map((todo) => {
            return (
              <>
              <Todoitem todo={todo} key={todo.srno} onDelete={props.onDelete} /> <hr/>
              </>
            );
          })}
    </div>
  );
};

export default Todos;
