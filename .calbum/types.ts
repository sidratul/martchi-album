import { FunctionComponent} from "preact";

export type ComponentArgs<T extends FunctionComponent> = Parameters<T>[0]; 

export type Arguments<T extends FunctionComponent > = {
  [Property in keyof ComponentArgs<T>]: Argument<ComponentArgs<T>[Property]>
};

type ArgType = 'number' | 'string' | 'boolean' | 'date' | 'array' | 'object';

interface Argument<T> {
  type: ArgType;
  defaultValue?: T;
  required?: boolean;
  values?: Array<T>;
}

// deno-lint-ignore no-explicit-any
export interface Album<T extends FunctionComponent<any> = any> {
  component: T;
  args: Partial<Arguments<T>>;
}

export interface Menu {
  path: string;
  name: string;
  route: string;
}

export type JsonMenu = Record<string, Menu>;