import { JSX } from "preact";
import { useState } from "preact/hooks";
import { ParentInput, ParentInputProps } from "./ParentInput.tsx";
import IconEye from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/eye.tsx";
import IconEyeOff from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/eye-off.tsx"

type PasswordFieldProps = JSX.HTMLAttributes<HTMLInputElement> & Pick<ParentInputProps, 'label' | 'error'>
 
export default function PasswordField(props: PasswordFieldProps) {
  const [view, setView] = useState(false);
  return (
    <ParentInput
      {...props}
    > 
      <div class="relative"> 
        <input
          class={`
            shadow appearance-none border rounded 
            w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline
            ${props.class}
          `} 
          {...props}
          type={view? "text" : "password"}
        />
        <div 
          class="absolute top-1/2 right-0 transform -translate-y-1/2 mr-2 cursor-pointer"
          onClick={()=> {
            setView(!view);
          }}
        >
          {!view ? (
            <IconEye/>
          ): (
            <IconEyeOff/>
          )}
        </div>
      </div>
    </ParentInput>
  );
}
