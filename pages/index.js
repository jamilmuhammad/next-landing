import Feature from "../components/Feature";
import Profile from "../components/Profile";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='WIGO Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <Profile />
      </Layout>
    </>
  );
}
