import ContactSection from "@/components/ContactSection";
import Container from "../../components/Container";
import Mission from "../../components/Mission";
import PageIntro from "@/components/PageIntro";
import Vision from "../../components/Vision";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="Sobre Nosotros" title="Somos Una Iglesia Comprometida a Ser Una Voz de Esperanza">
        <p>
          La Iglesia Bautista La Voz de La Esperanza como su nombre lo indica, es una Iglesia que lleva esperanza a la ciudad de Charlotte y sus alrededores. Si tu estas buscando un lugar donde congregarte y alabar a Dios, nuestra iglesia esta abierta para todos los visitantes.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          </p>
          <p>
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="→" label="Nuestro Propósito, Visión y Valores" />
          <StatListItem value="→" label="Nuestro Equipo" />
          <StatListItem value="→" label="Nuestro Pastor" />
        </StatList>
      </Container>
      <Mission />
      <Vision />
      <ContactSection />
    </>
  );
};

export default AboutPage;
