import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          {/*<p className="mt-6 text-xl text-neutral-600">
            Bienvenidos a La Voz De La Esperanza
          </p>*/} 
          
          <h1 className="font-display text-1xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-3xl">
            Bienvenidos a La Voz De La Esperanza
          </h1>
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Llevamos esperanza a la ciudad de Charlotte y sus alrededores. 
          </h1>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{  }}
           
      >
        ¡Bienvenidos a la Iglesia La Voz! Nuestros servicios dominicales ofrecen adoración y enseñanza bíblica para todas las edades. Desde niños hasta adultos, somos una comunidad apasionada por conectar la gente con su fe.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
