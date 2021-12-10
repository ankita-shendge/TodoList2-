import React from "react";

export default function Todoitem({ todo, onDelete }) {
  return (
    <div>
       <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger y-3"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
}
