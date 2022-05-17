import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ContentCards from '../components/ContentCards';
import ServicesCarousel from '../components/ServicesCarousel';
import Footer from '../components/Footer';
import Speakers from "../components/Speakers";
import CompaniesList from "../components/CompaniesList";
import FAQ from "../components/FAQ";

/* Configuration */
import variability from '../config/variability.json';
import landingPage from '../config/landingpage.json'
import SignUpForm from "../components/SignUpForm";
import Pricing from "../components/Pricing";
import ContactForm from "../components/ContactForm";

const Index = () => {
  return (
    <Layout pageTitle={`${landingPage.title} Landing Page`}>
      <Header/>
      <Hero/>
      <ContentCards/>
      <ContactForm isRendered={variability.hasContactForm}/>
      <Speakers isRendered={variability.hasSpeakers} />
      <ServicesCarousel isRendered={variability.hasServicesCarousel} />
      <CompaniesList isRendered={variability.hasCompaniesList} />
      <SignUpForm isRendered={variability.hasSignUpForm}/>
      <Pricing isRendered={variability.hasPricing}/>
      <FAQ isRendered={variability.hasFAQ}/>
      <Footer hasSocial={variability.hasSocial}/>
    </Layout>
  )
}

export default Index;
