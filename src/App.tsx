import React, { useState } from "react";
import "./App.scss";
import InputFeild from "./components/InputFeild";
import { Todo } from "./modal";
import TodosLists from "./components/TodosLists";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, SetTodos] = useState<Todo[]>([]);
  const notify = () => toast.success("Todo Added Successfully");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      SetTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
      notify();
    }
  };
  return (
    <div className="App ">
      <ToastContainer />
      <div className="navbar">
        <p>TASKS</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

            {todos.length > 0 ? (
              <div className="TodosLists">
                <TodosLists todos={todos} SetTodos={SetTodos} todo={todo} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
