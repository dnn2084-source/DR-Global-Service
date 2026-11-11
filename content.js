import {
  Globe,
  Landmark,
  GraduationCap,
  FileText,
  HeartHandshake,
  Briefcase,
  Compass,
} from "lucide-react";

export const WHATSAPP_NUMBER = "34643120195";
export const WHATSAPP_DISPLAY = "+34 643 120 195";

export const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const WA_MESSAGES = {
  asesoramiento: "Hola D&R Global Services, me gustaría solicitar asesoramiento.",
  informacion: "Hola D&R Global Services, me gustaría solicitar información.",
  presupuesto: "Hola D&R Global Services, me gustaría pedir un presupuesto.",
  general:
    "Hola D&R Global Services, me gustaría recibir información sobre sus servicios.",
};

export const NAV = [
  { label: "Inicio", path: "/", testid: "nav-link-inicio" },
  { label: "Servicios", path: "/servicios", testid: "nav-link-servicios" },
  { label: "Sobre nosotros", path: "/sobre-nosotros", testid: "nav-link-sobre-nosotros" },
  { label: "Cómo trabajamos", path: "/como-trabajamos", testid: "nav-link-como-trabajamos" },
  { label: "Preguntas frecuentes", path: "/preguntas-frecuentes", testid: "nav-link-preguntas-frecuentes" },
  { label: "Contacto", path: "/contacto", testid: "nav-link-contacto" },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
  editorial: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
  equipo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1400&q=80",
  documentos: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80",
  firma: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  clientes: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1600&q=80",
  madrid: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=80",
  asesor: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80",
};

export const DESCRIPTOR = "Servicios administrativos, migratorios y documentales.";

export const HOME = {
  eyebrow: "Servicios administrativos, migratorios y documentales",
  welcome: ["Bienvenidos a", "D&R Global Services"],
  lead:
    "En D&R Global Services ofrecemos servicios de gestión, orientación y acompañamiento en trámites administrativos, migratorios y documentales, tanto para particulares como para familias y empresas.",
  promise: "Tu tranquilidad, nuestro compromiso.",
  ctaAdvisory: "Solicita tu asesoramiento.",
  ctaServices: "Conoce nuestros servicios.",
  paragraphs: [
    "Nuestro objetivo es facilitar procesos que muchas veces resultan complejos, proporcionando una atención personalizada, cercana y profesional.",
    "Sabemos que detrás de cada expediente hay una historia, una familia, un proyecto o una nueva oportunidad.",
    "Por eso trabajamos con compromiso, responsabilidad y dedicación, acompañando a nuestros clientes en cada etapa de sus gestiones.",
  ],
};

export const SERVICES_INTRO =
  "Ponemos a tu disposición una amplia variedad de servicios administrativos y documentales.";

export const SERVICES_CTA =
  "¿Necesitas realizar un trámite? Contacta con nuestro equipo y estudiaremos tu caso.";

export const SERVICES = [
  {
    id: "extranjeria",
    icon: Globe,
    title: "Extranjería e inmigración",
    bullets: [
      "Solicitudes y renovaciones de autorizaciones de residencia.",
      "Arraigo y regularización migratoria.",
      "Reagrupación familiar y residencia para familiares de españoles y ciudadanos comunitarios.",
      "Modificaciones de autorizaciones de residencia y trabajo.",
      "Tramitación, seguimiento, subsanaciones y recursos administrativos.",
    ],
  },
  {
    id: "nacionalidad",
    icon: Landmark,
    title: "Nacionalidad española",
    bullets: [
      "Nacionalidad por residencia y por opción.",
      "Preparación, presentación y seguimiento de expedientes.",
      "Subsanación de requerimientos y gestiones posteriores a la resolución.",
    ],
  },
  {
    id: "homologaciones",
    icon: GraduationCap,
    title: "Homologaciones y equivalencias académicas",
    bullets: [
      "Homologación de títulos universitarios extranjeros.",
      "Homologación y convalidación de estudios y equivalencias académicas.",
      "Orientación sobre legalización y apostilla de documentos.",
    ],
  },
  {
    id: "tramites",
    icon: FileText,
    title: "Trámites y gestiones administrativas",
    bullets: [
      "Certificados y documentos oficiales.",
      "Cancelación de antecedentes penales.",
      "Canje de permisos de conducir extranjeros.",
      "Cartas de invitación y gestiones ante organismos públicos.",
    ],
  },
  {
    id: "ayudas",
    icon: HeartHandshake,
    title: "Ayudas y prestaciones",
    bullets: [
      "Orientación sobre ayudas sociales y familiares.",
      "Preparación de solicitudes y seguimiento de expedientes.",
      "Gestión documental y subsanación de requerimientos.",
    ],
  },
  {
    id: "empresas",
    icon: Briefcase,
    title: "Servicios para empresas y autónomos",
    bullets: [
      "Apoyo en trámites administrativos y organización documental.",
      "Gestiones para emprendedores y profesionales.",
      "Coordinación de servicios administrativos especializados.",
    ],
  },
  {
    id: "internacional",
    icon: Compass,
    title: "Servicios internacionales",
    bullets: [
      "Orientación y coordinación de trámites documentales internacionales.",
      "Preparación documental para procedimientos migratorios.",
      "Apoyo administrativo para proyectos de movilidad internacional y coordinación con especialistas.",
    ],
  },
];

export const ABOUT = {
  eyebrow: "Sobre nosotros",
  title: "Quiénes somos",
  paragraphs: [
    "D&R Global Services nace de la unión de dos mujeres emprendedoras que comparten una misma visión: crear una empresa de servicios administrativos basada en la confianza, el compromiso y la atención personalizada.",
    "Nuestro proyecto surge para ofrecer soluciones prácticas a personas, familias y empresas que necesitan orientación y acompañamiento en sus gestiones.",
    "Aportamos experiencia en la tramitación y seguimiento de expedientes administrativos, especialmente en extranjería, nacionalidad española y documentación. Creemos que cada cliente merece una atención individualizada, información clara y un trato humano.",
  ],
  mision: {
    title: "Nuestra misión",
    text: "Facilitar los trámites administrativos y documentales mediante una gestión organizada, responsable y accesible.",
  },
  vision: {
    title: "Nuestra visión",
    text: "Consolidar D&R Global Services como una marca reconocida por su profesionalidad, cercanía y calidad de servicio, con presencia en España y proyección hacia Estados Unidos y otros mercados internacionales.",
  },
  valores: {
    title: "Nuestros valores",
    text: "Confianza, transparencia, compromiso, responsabilidad y atención personalizada.",
  },
  closing:
    "En D&R Global Services no solo gestionamos documentación: acompañamos proyectos de vida.",
};

export const PROCESS = [
  {
    step: 1,
    title: "Contacto inicial",
    text: "Nos explicas qué trámite necesitas y conocemos tu situación.",
  },
  {
    step: 2,
    title: "Evaluación del caso",
    text: "Revisamos la información y te orientamos sobre requisitos y opciones disponibles.",
  },
  {
    step: 3,
    title: "Presupuesto y documentación",
    text: "Te informamos del coste de nuestros servicios y de los documentos necesarios.",
  },
  {
    step: 4,
    title: "Preparación y presentación",
    text: "Organizamos la documentación y realizamos las gestiones administrativas contratadas.",
  },
  {
    step: 5,
    title: "Seguimiento del expediente",
    text: "Te acompañamos durante el procedimiento y gestionamos los requerimientos incluidos en el servicio.",
  },
  {
    step: 6,
    title: "Finalización del trámite",
    text: "Te comunicamos el resultado y te orientamos sobre los siguientes pasos.",
  },
];

export const FAQS = [
  {
    q: "¿Puedo contratar sus servicios si vivo fuera de España?",
    a: "Sí. Muchos trámites pueden prepararse y gestionarse a distancia, según el procedimiento y sus requisitos de identificación y representación.",
  },
  {
    q: "¿Necesito NIE para solicitar sus servicios?",
    a: "No necesariamente. Algunos trámites pueden iniciarse con pasaporte, según el procedimiento.",
  },
  {
    q: "¿Pueden presentar mi expediente por internet?",
    a: "Sí, cuando el procedimiento permite la presentación electrónica y se dispone de los medios de identificación o representación necesarios.",
  },
  {
    q: "¿Cuánto cuesta realizar un trámite?",
    a: "El presupuesto depende de la gestión y complejidad. Informamos de los honorarios antes de comenzar.",
  },
  {
    q: "¿Cuánto tarda en resolverse mi solicitud?",
    a: "Los plazos dependen del organismo y del procedimiento. No podemos garantizar fechas de resolución.",
  },
  {
    q: "¿Qué sucede si recibo un requerimiento o una denegación?",
    a: "Podemos revisar la notificación y valorar las opciones administrativas disponibles, incluidas subsanaciones y recursos cuando proceda.",
  },
  {
    q: "¿Puedo consultar el estado de mi expediente?",
    a: "Sí. Ofrecemos seguimiento de los expedientes gestionados, dentro del alcance del servicio contratado.",
  },
];

export const CONTACT = {
  eyebrow: "Estamos para ayudarte",
  title: "Contacto",
  intro:
    "¿Necesitas iniciar un trámite, resolver una duda o recibir orientación personalizada? Nuestro equipo está preparado para escuchar tu caso y ayudarte a encontrar la mejor vía de gestión disponible.",
  identity: "D&R Global Services — Servicios administrativos, migratorios y documentales.",
  attention: "Atención presencial según disponibilidad y atención online.",
  whatsappLabel: "WhatsApp:",
  ctaInfo: "Solicita información.",
  ctaPresupuesto: "Pide tu presupuesto.",
  closing: "D&R Global Services: conectamos personas, soluciones y oportunidades.",
};

export const FOOTER = {
  copyright: "© D&R Global Services. Todos los derechos reservados.",
};
