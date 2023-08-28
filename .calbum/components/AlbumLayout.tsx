import { h, ComponentChildren, FunctionComponent } from "preact";
import { Album } from "../types.ts";
import { AlbumMenu } from "./AlbumMenu.tsx";

export interface AlbumLayoutProps {
  children: ComponentChildren;
}

export function AlbumLayout(props: AlbumLayoutProps) {
  return (
    <div class="bg-gray-100 font-family-karla flex">
      <aside class="relative bg-[#3d68ff] h-screen w-64 hidden sm:block shadow-xl">
        <AlbumMenu/>
      </aside>
      <div>{props.children}</div>
    </div>
  );
}
