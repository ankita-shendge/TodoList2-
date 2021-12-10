import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { AddTodo } from "./components/AddTodo";



function App() {
  const addTodo = (title, desc) => {

    console.log("I am adding todo", title, desc);

    let srno;
    if (todos.length === 0) {
      srno = 0;
    } else {
      srno = todos[todos.length - 1].srno + 1;
    }

    const myTodo = {
      srno: srno,
      title: title,
      desc: desc,
    };

    console.log(myTodo);
    
    setTodos([...todos, myTodo]);
  };

  const onDelete = (todo) => {
    // setTodos(todos.filter((e) => {

    //   return e!== todo;
    // }))

    setTodos(
      todos.filter((e) => {
        console.log(e);
        console.log("printing new line");
        let comparison = e.srno !== todo.srno;
        console.log("what is comparison ->" + comparison);
        return comparison;
      })
    );
  };

  const [todos, setTodos] = useState([
   
  ]);

      return (
    <>
      <Header title="todoApp" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
