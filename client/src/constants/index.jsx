import { SocialMediaProfiles } from "../components/SocialMedia";

export const navigation = [
  {
    title: "Quiénes Somos",
    links: [
      { title: "Sobre nosotros", href: "/about" },
      { title: "Purpose, Strategy & Values", href: "/growth" },
      { title: "Our Pastor", href: "/blog" },
      { title: "Our Team", href: "/contact" },
      { title: "Contáctanos", href: "/contact" },
    ],
  },

  {
    title: "Experiencias",
    links: [
      { title: "Último Mensaje", href: "/experiences/amazonclone" },
      { title: "Tiempos de Servicios", href: "/experiences/bazar" },
      { title: "Archivo de Mensajes", href: "/experiences/blog101" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/experiences",
      },
    ],
  },
  {
    title: "Conectate",
    links: [
      { title: "Da tu paso", href: "/growth" },
      { title: "Grupos", href: "/blog" },
      { title: "Servir", href: "/blog" },
      { title: "Eventos", href: "/blog" }
    ],
  },
  {
    title: "Recursos",
    links: [
      { title: "Recursos", href: "/about" },
      { title: "Recursos comunidad", href: "/growth" },
    ],
  },
  {
    title: "Haz tu Donación",
    links: [
      { title: "Haz tu Donación en Linea", href: "/about" },
      { title: "Preguntas Frecuentes", href: "/growth" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
