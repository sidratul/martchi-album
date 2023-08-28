import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { MainContainer } from "@islands/containers/MainContainer/index.ts";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>fecoci</title>
      </Head>
      <div class="p-8 mx-auto">
        <MainContainer/>
      </div>
    </>
  );
}
