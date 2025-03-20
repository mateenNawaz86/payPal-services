import { Navbar } from "@/base-components/nav-bar";
import { Services } from "@/components/services/index";
import { Layout } from "@/layout";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Services />
    </Layout>
  );
}
