import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext";
import { TodoCard } from "./TodoCard";

export const TodoList = () => {
   const { todoList } = useContext(TodoContext);

   return todoList.length > 0 ? (
      <ul>
         {todoList.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
         ))}
      </ul>
   ) : <p>Cadastre sua primeira nota!</p>;
};
