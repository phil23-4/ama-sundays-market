import Registration from "../components/Forms/registrationForm";
import Layout from "../components/layout";
import Pricing from "../components/Pricing/pricing";
import Hero from "../components/ui/hero";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Pricing />
      <Registration />
    </Layout>
  );
}
