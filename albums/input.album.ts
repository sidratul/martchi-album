import { Album } from "$calbum/types.ts";
import TextField from "@components/inputs/TextField.tsx";

const data: Album<typeof TextField> = {
  component: TextField,
  args: {
    "name": {
      type: "string",
      defaultValue: "name",
    },
  }
}

export default data;