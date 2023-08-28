#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import cdev from "$calbum/dev.ts";

await cdev();
await dev(import.meta.url, "./main.ts");
