import Registration from "../components/Forms/registrationForm";
import Layout from "../components/layout";
import Pricing from "../components/Pricing/pricing";

export default function Home() {
  return (
    <Layout>
      <Pricing />
      <Registration />
    </Layout>
  );
}
