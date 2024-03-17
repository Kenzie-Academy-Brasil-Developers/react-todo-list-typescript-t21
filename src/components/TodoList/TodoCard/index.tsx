import { ITodo } from "../../../interfaces/todo.interface";
import { useTodoStore } from "../../../stores/todo/useTodoStore";

interface ITodoCardProps {
   todo: ITodo;
}

export const TodoCard = ({ todo }: ITodoCardProps) => {
   const removeTodo = useTodoStore(state => state.removeTodo)

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
