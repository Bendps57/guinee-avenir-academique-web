
import Hero from "@/components/Hero";
import { Container } from "@/components/ui/container";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";
import DepartmentContacts from "@/components/contact/DepartmentContacts";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Hero 
        title="Contactez-nous"
        subtitle="Nous sommes à votre écoute"
        description="N'hésitez pas à nous contacter pour toute question concernant nos programmes, l'admission ou la vie étudiante."
      />

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Info */}
            <ContactInfo />
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* Department Contacts */}
      <DepartmentContacts />
    </div>
  );
};

export default Contact;
