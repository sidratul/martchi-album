
import { dirname, fromFileUrl, join, relative } from "https://deno.land/std@0.197.0/path/mod.ts";
import { walk }  from "https://deno.land/std@0.197.0/fs/walk.ts";
import { JsonMenu, Menu } from "./types.ts";

interface Manifest {
  routes: string[];
}

export default async function cdev() {
  // const manifestPath = join(dir, "./calbum.gen.ts");
  await createMenu();

}

async function generateMenu(menus: JsonMenu) {
  const dir = dirname(fromFileUrl(import.meta.url));
  
  const menuPath = join(dir, "./menu.json");
  await Deno.writeTextFile(menuPath, JSON.stringify(menus));
}

async function generateManifest(menus: JsonMenu) {
  const dir = dirname(fromFileUrl(import.meta.url));
  
  const menuPath = join(dir, "./calbum.gen.ts");
  const output = `
    import * as $0 from "../routes/base.tsx";
    import * as $$1 from "../islands/DisplayAlbum.tsx";
    
    const manifest = {
      routes: {
        
        ${
          Object.values(menus).map((menu) =>
            `${JSON.stringify(`./routes/${menu.route}`)}: $0,`
          ).join("\n    ")
        }
      },
      islands: {
        "./islands/DisplayAlbum.tsx": $$1,
      },
    };
    export default manifest;
  `
  await Deno.writeTextFile(menuPath, output);
}

export async function createMenu(): Promise<void> {
  const dir = dirname(fromFileUrl(import.meta.url));

  const files = walk(join(dir, relative(dir, 'albums')), {
    includeDirs: false,
    includeFiles: true,
    includeSymlinks: false,
    exts: ["tsx", "ts"],
  });

  const menu = {} as Record<string, Menu>;
  for await (const entry of files) {
    // `only find with .album`
    const match = /.+\.album.(ts|tsx)/.test(entry.path);
    if (!match) {
      continue;
    }
    
    const [route] = entry.name.split('.');
    menu[route] = {
      route, 
      name: entry.name,
      path: join(dir,relative(dir, entry.path))
    };
  }

  await generateMenu(menu);
  await generateManifest(menu)
}