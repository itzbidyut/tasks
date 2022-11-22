import { useRef, useEffect } from "react";

import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { Todo } from "../modal";
import { ToastContainer, toast } from "react-toastify";

interface Props {
  todo: Todo;
  todos: Todo[];
  SetTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function SingleTodo({ todos, SetTodos, todo }: Props) {
  const notifyUpdated = () => toast.success("Todo Updated");
  const notifyDeleted = () => toast.error("Todo Deleted");

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    // setEditMode(false);
    // setEditMode(true);
  }, [editMode]);

  const handleDelete = (id: number) => {
    SetTodos(todos.filter((item) => item.id !== id));
    notifyDeleted();
  };
  const handleUpdate = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    SetTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEditMode(false);
    notifyUpdated();
  };

  const handleEdit = (e: any, id: number, todo: string) => {
    handleUpdate(e, id);
    setEditTodo(todo);
    setEditMode(true);
    inputRef.current!.focus();
  };
  return (
    <div className="SingleTodo">
      <ToastContainer />
      <div className="todoItem">
        <form onSubmit={(e) => handleUpdate(e, todo.id)}>
          {editMode ? (
            <div className="editForm">
              <div className="input-group mb-3 w-100">
                <input
                  ref={inputRef as any}
                  type="text"
                  className="form-control w-100"
                  placeholder="Entar task"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
              </div>

              <button className="btn btn-primary" type="submit">
                update
              </button>
            </div>
          ) : (
            <>
              <p>{todo.todo}</p>
              <div className="icons">
                <BiEditAlt onClick={(e) => handleEdit(e, todo.id, todo.todo)} />
                <MdDelete onClick={(e) => handleDelete(todo.id)} />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
