import { create } from "zustand";
import { ITodo } from "../../interfaces/todo.interface";
import { IUseTodoStore } from "./_types";

export const useTodoStore = create<IUseTodoStore>((set) => {
   return {
      todoList: [],
      addTodo(title, content) {
         const newTodo: ITodo = {
            id: crypto.randomUUID(),
            title,
            content,
         };
         set(({ todoList }) => ({ todoList: [...todoList, newTodo] }));
      },
      removeTodo(removingId) {
         set(({ todoList }) => {
            return { todoList: todoList.filter((todo) => todo.id !== removingId) };
         });
      },
   };
});