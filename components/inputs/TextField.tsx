import { JSX } from "preact";
import { ParentInput, ParentInputProps } from "./ParentInput.tsx";

type TextFieldProps = JSX.HTMLAttributes<HTMLInputElement> & Pick<ParentInputProps, 'label' | 'error'>

export default function TextField(props: TextFieldProps) {
  return (
    <ParentInput
      {...props}
    >
      <input
        class={`
          shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline
          ${props.class}
        `} 
        {...props}
      />
    </ParentInput>
  );
}
