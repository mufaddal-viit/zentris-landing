import { sections } from "@/config/sections";
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
import { company } from "@/lib/content";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: company.tagline,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zentristraining.com",
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 11, 8th Floor, Al Masraf Building",
    addressLocality: "Al Rigga, Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {sections.header && <Header />}
      <main id="main-content">
        {sections.hero && <Hero />}
        {sections.whyChoose && <WhyChoose />}
        {sections.products && <Products />}
        {sections.pricing && <Pricing />}
        {sections.accreditations && <Accreditations />}
        {sections.testimonials && <Testimonials />}
        {sections.projects && <Projects />}
        {sections.clientMarquee && <ClientMarquee />}
        {sections.contact && <Contact />}
        {sections.faq && <FAQ />}
        {sections.preFooter && <PreFooter />}
      </main>
      {sections.footer && <Footer />}
      {sections.floatingActions && <FloatingActions />}
    </>
  );
}
