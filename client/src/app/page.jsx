"use client";

import Staff from "@/components/Staff";
import ContactSection from "@/components/ContactSection";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import Groups from "../components/Groups";
import FeaturedEvent from "../components/FeaturedEvent";
import Connect from "@/components/ShortConnect";
import Experience from "../components/Experience"
import ShortAboutUs from "@/components/ShortAbout";
import ShortMission from "@/components/ShortMission";
import logoPhobiaDark from "@/images/staff/phobia/logo-dark.svg";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <Hero />
        {/*<FadeIn className="max-w-3xl">
          <p className="mt-6 text-xl text-neutral-600">
            Bienvenidos a La Voz De La Esperanza
          </p>
          
          <h1 className="font-display text-1xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-3xl">
            Bienvenidos a La Voz De La Esperanza
          </h1>
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Llevamos esperanza a la ciudad de Charlotte y sus alrededores. 
          </h1>
        </FadeIn>*/} 
      </Container>
      <FeaturedEvent/>
      <ShortAboutUs
        className="mt-24 sm:mt-32 lg:mt-40"
        staff={{  }}
           
      >
        ¡Bienvenidos a la Iglesia La Voz! Nuestros servicios dominicales ofrecen adoración y enseñanza bíblica para todas las edades. Desde niños hasta adultos, somos una comunidad apasionada por conectar la gente con su fe.
      </ShortAboutUs>
      <ShortMission

      className="mt-24 sm:mt-32 lg:mt-40"
        staff={{  }}
           
      >
        ¡Bienvenidos a la Iglesia La Voz! Nuestros servicios dominicales ofrecen adoración y enseñanza bíblica para todas las edades. Desde niños hasta adultos, somos una comunidad apasionada por conectar la gente con su fe.
      </ShortMission>
      <Connect />
      <Experience />
      <Groups /> 
      <ContactSection />
    </main>
  );
}
