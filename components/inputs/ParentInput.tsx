import { h, ComponentChildren } from "preact";

export interface ParentInputProps {
  label: true | false;
  error?: string;
  children: ComponentChildren;
}

export function ParentInput(props: ParentInputProps) {
  return (
    <div>
      {props.label && (
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          {props.label}
        </label>
      )}
      {props.children}
      <p class="text-red-500 text-xs italic">{props.error}</p>
    </div>
  );
}
