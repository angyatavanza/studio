// About.js
import React from 'react';
import imageLaptop from "@/images/laptop.jpg";
import exterior from '../../assets/Exterior_IMG_1119.jpg';
import AboutPastor from '@/components/AboutPastor';
import PageIntro from '@/components/PageIntro';

const OurPastorPage = () => {
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
    <AboutPastor/>
    </>
  );
};

export default OurPastorPage;