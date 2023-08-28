import { Head } from "$fresh/runtime.ts";
import { RouteContext } from "$fresh/src/server/types.ts";
import menu from "$calbum/menu.json" assert { type: "json" };
import { JsonMenu } from "$calbum/types.ts";
import DisplayAlbum from "../islands/DisplayAlbum.tsx";
import { AlbumLayout } from "$calbum/components/AlbumLayout.tsx";

export default async function AlbumRoute(_req: Request, ctx: RouteContext) {
  const jsonmenu = menu as unknown as JsonMenu;
  const route = ctx.route.substring(1);
  const data = jsonmenu[route];

  const album = await import(`../albums/${data.name}`);

  return (
    <>
      <Head>
        <title>fecoci</title>
      </Head>
      <AlbumLayout>
        <DisplayAlbum album={album.default}/>
      </AlbumLayout>
    </>
  );
}
