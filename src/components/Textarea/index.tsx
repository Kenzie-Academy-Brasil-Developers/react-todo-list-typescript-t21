import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   label?: string;
   error?: FieldError;
}

export const TextArea = forwardRef(
   ({ label, error, ...rest }: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
      return (
         <div>
            {label ? <label htmlFor={rest.name}>{label}</label> : null}
            <textarea ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
         </div>
      );
   }
);
