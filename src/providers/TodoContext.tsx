import React, { createContext, useState } from "react";
import { ITodo } from "../interfaces/todo.interface";

interface ITodoContext{
    todoList: ITodo[];
    addTodo: (title: string, content: string) => void;
    removeTodo: (removingId: string) => void;
}

// "confia"
export const TodoContext = createContext({} as ITodoContext);

interface ITodoProviderProps{
    children: React.ReactNode;
}

//Parâmetros de função
export const TodoProvider = ({ children }: ITodoProviderProps) => {
    // o estado é uma variável reativa
    const [todoList, setTodoList] = useState<ITodo[]>([]); 

    const addTodo = (title: string, content: string) => {
        const newTodo: ITodo = {
            id: crypto.randomUUID(),
            title,
            content,
        };
        setTodoList([...todoList, newTodo]);
    }

    const removeTodo = (removingId: string) => {
        const newTodoList = todoList.filter(todo => todo.id !== removingId);
        setTodoList(newTodoList);
    }

    return(
        <TodoContext.Provider value={{ todoList, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    )
}