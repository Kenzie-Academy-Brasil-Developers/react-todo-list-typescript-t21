import { useContext } from "react";
import { ITodo } from "../../../interfaces/todo.interface";
import { TodoContext } from "../../../providers/TodoContext";

interface ITodoCardProps {
   todo: ITodo;
}

export const TodoCard = ({ todo }: ITodoCardProps) => {
   const { removeTodo } = useContext(TodoContext);

   const handleRemove = () => {
      if (confirm("Quer mesmo remover está nota?")) removeTodo(todo.id);
   };

   return (
      <li>
         <h3>{todo.title}</h3>
         <p>{todo.content}</p>
         <button onClick={handleRemove}>Remover a nota</button>
      </li>
   );
};
