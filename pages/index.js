import Services from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Trust Medical Service Landing Page' />
      <Layout>
        <Hero />
        <Services />
        <Pricing />
      </Layout>
    </>
  );
}
