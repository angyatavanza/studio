import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Quiénes Somos",
    links: [
      { title: "Sobre nosotros", href: "/about" },
      { title: "Purpose, Strategy & Values", href: "/process" },
      { title: "Our Pastor", href: "/blog" },
      { title: "Our Team", href: "/contact" },
      { title: "Contáctanos", href: "/contact" },
    ],
  },

  {
    title: "Experiencias",
    links: [
      { title: "Último Mensaje", href: "/work/amazonclone" },
      { title: "Horario de Servicios", href: "/work/bazar" },
      { title: "Archivo de Mensajes", href: "/work/blog101" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Conectate",
    links: [
      { title: "Da un paso", href: "/process" },
      { title: "Grupos", href: "/blog" },
      { title: "Servir", href: "/blog" },
      { title: "Eventos", href: "/blog" }
    ],
  },
  {
    title: "Recursos",
    links: [
      { title: "Recursos", href: "/about" },
      { title: "Recursos comunidad", href: "/process" },
    ],
  },
  {
    title: "Haz tu Donación",
    links: [
      { title: "Haz tu Donación en Linea", href: "/about" },
      { title: "Preguntas Frecuentes", href: "/process" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
