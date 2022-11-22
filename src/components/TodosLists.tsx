import { Todo } from "../modal";

import SingleTodo from "./SingleTodo";

interface Props {
  todo: string;
  todos: Todo[];
  SetTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodosLists({ todos, SetTodos, todo }: Props) {
  return (
    <>
      {todos ? (
        todos.map((todo: any) => (
          <SingleTodo
            todos={todos}
            key={todo.id}
            SetTodos={SetTodos}
            todo={todo}
          />
        ))
      ) : (
        <p>No todo available</p>
      )}
    </>
  );
}
