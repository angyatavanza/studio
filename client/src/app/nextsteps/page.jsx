import Step2 from "../../components/Step2";
import ContactSection from "@/components/ContactSection";
import Step3 from "@/components/Step3";
import Step1 from "@/components/Step1";
import Step4 from "../../components/Step4";
import PageIntro from "@/components/PageIntro";
import Vision from "../../components/Vision";
import React from "react";

const GrowthPage = () => {
  return (
    <>
      <PageIntro eyebrow="Nuestro proceso" title="Cómo trabajamos">
        <p>
        Creemos en la eficiencia y en maximizar nuestros recursos para ofrecer el 
        mejor valor a nuestros clientes. La principal forma en que lo hacemos es 
        reutilizando los mismos cinco proyectos que hemos estado desarrollando 
        durante la última década.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Step1 Discover */}
        <Step1 />
        {/* Step2  */}
        <Step2 />
        {/* Step2  */}
        <Step3 />
         {/* Step2 */}
         <Step4 />
      </div>
      <ContactSection />
    </>
  );
};

export default GrowthPage;
