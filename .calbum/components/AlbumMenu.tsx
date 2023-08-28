import { h, ComponentChildren, FunctionComponent } from "preact";
import menus from "../menu.json" assert { type: "json" };
import { Menu } from "../types.ts";

export function AlbumMenu() {
  return (
    <>
      <div class="p-6">
        <a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
      </div>
      <nav class="text-white text-base font-semibold pt-3">
        {
          Object.values(menus).map(menu => (
            <div key={menu.name} class="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
              <a href={`/${menu.route}`}>{menu.route}</a>
            </div>
          ))
        }
      </nav>
    </>
  );
}
