import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   error?: FieldError;
}

export const Input = forwardRef(
   ({ label, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
      return (
         <div>
            {label ? <label htmlFor={rest.name}>{label}</label> : null}
            <input ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
         </div>
      );
   }
);
