import { Album } from "$calbum/types.ts";
import { createElement } from "preact";

interface DisplayAlbumProps {
  album: Album;
}

export default function DisplayAlbum(props: DisplayAlbumProps) {
  return (
    <div class="flex gap-8 py-6">
      {createElement(props.album.component, {})}
    </div>
  );
}