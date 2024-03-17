import { TodoCard } from "./TodoCard";
import { useTodoStore } from "../../stores/todo/useTodoStore";

export const TodoList = () => {
   const todoList = useTodoStore(state => state.todoList);

   return todoList.length > 0 ? (
      <ul>
         {todoList.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
         ))}
      </ul>
   ) : <p>Cadastre sua primeira nota!</p>;
};
