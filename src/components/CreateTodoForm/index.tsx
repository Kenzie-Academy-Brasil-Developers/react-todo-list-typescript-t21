import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input";
import { TextArea } from "../Textarea";
import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext";

interface ICreateTodoFormValues {
   title: string;
   content: string;
}

export const CreateTodoForm = () => {
   const { addTodo } = useContext(TodoContext);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ICreateTodoFormValues>();

   const submit: SubmitHandler<ICreateTodoFormValues> = (formData) => {
      addTodo(formData.title, formData.content);
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            type="text"
            label="Título"
            placeholder="Crie um título"
            {...register("title")}
            error={errors.title}
         />
         <TextArea
            label="Conteúdo"
            placeholder="Insira o conteúdo"
            {...register("content")}
            error={errors.content}
         />
         <button type="submit">Criar nota</button>
      </form>
   );
};
