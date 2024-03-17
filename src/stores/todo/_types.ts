import { ITodo } from "../../interfaces/todo.interface";

export interface IUseTodoStore {
    todoList: ITodo[];
    addTodo: (title: string, content: string) => void;
    removeTodo: (removingId: string) => void;
 }