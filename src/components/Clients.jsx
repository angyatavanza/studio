import Image from "next/image";
import logoBrightPath from "../images/clients/bright-path/logo-light.svg";
import logoFamilyFund from "../images/clients/family-fund/logo-light.svg";
import logoGreenLife from "../images/clients/green-life/logo-light.svg";
import logoHomeWork from "../images/clients/home-work/logo-light.svg";
import logoMailSmirk from "../images/clients/mail-smirk/logo-light.svg";
import logoNorthAdventures from "../images/clients/north-adventures/logo-light.svg";
import logoPhobiaLight from "../images/clients/phobia/logo-light.svg";
import logoUnseal from "../images/clients/unseal/logo-light.svg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Pastor Hugo", logoPhobiaLight],
  ["Family Fund", logoFamilyFund],
  ["Unseal", logoUnseal],
  ["Mail Smirk", logoMailSmirk],
  ["Home Work", logoHomeWork],
  ["Green Life", logoGreenLife],
  ["Bright Path", logoBrightPath],
  ["North Adventures", logoNorthAdventures],
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-purple-800 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
          ¡Bienvenidos a la Iglesia La Voz! Nuestros servicios dominicales ofrecen adoración y enseñanza bíblica para todas las edades. Desde niños hasta adultos, somos una comunidad apasionada por conectar la gente con su fe.
          </h2>
          <div className="h-px flex-auto bg-purple-600" />
        </FadeIn>
        {/*
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
        */} 
      </Container>
    </div>
  );
};

export default Clients;
