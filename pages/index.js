import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ContentCards from '../components/ContentCards';
import ServicesCarousel from '../components/ServicesCarousel';
import About from '../components/About';
import Footer from '../components/Footer';
import variability from '../config/variability.json';
import Speakers from "../components/Speakers";

const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Hero />
      <ContentCards />
      <Speakers isRendered={variability.hasSpeakers} />
      <ServicesCarousel isRendered={variability.hasServicesCarousel} />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
