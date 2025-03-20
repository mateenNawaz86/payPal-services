import { MyComponentProp } from "@/types/types";
import Head from "next/head";

export const Layout = ({ children }: MyComponentProp) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div>{children}</div>
      </main>
    </>
  );
};
