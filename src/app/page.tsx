import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Products from "@/components/Products";
import Pricing from "@/components/Pricing";
import Accreditations from "@/components/Accreditations";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import ClientMarquee from "@/components/ClientMarquee";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer, { PreFooter } from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Products />
        <Pricing />
        <Accreditations />
        <Testimonials />
        <Projects />
        <ClientMarquee />
        <Contact />
        <FAQ />
        <PreFooter />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
