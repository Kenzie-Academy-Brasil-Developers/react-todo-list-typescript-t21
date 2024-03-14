import { CreateTodoForm } from "../../components/CreateTodoForm"
import { TodoList } from "../../components/TodoList"

export const HomePage = () => {
    return(
        <main>
            <CreateTodoForm />
            <TodoList />
        </main>
    )
}