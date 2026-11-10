export type Lang = "es" | "en";

export type HomeCopy = {
  roleTitle: string;
  heroTagline: string;
  availability: string;
  viewProjects: string;
  cvDownload: string;
  linkedin: string;
  github: string;
  medium: string;
  navProjects: string;
  appsHeading: string;
  engineeringHeading: string;
  engineeringIntro: string;
  stackLabel: string;
  comingSoon: string;
  appStore: string;
  googlePlay: string;
  viewCode: string;
  aboutHeading: string;
  aboutParagraph: string;
  aboutParagraph2: string;
  footerContactLabel: string;
  privacyPolicy: string;
  contactHeading: string;
  contactNameLabel: string;
  contactEmailLabel: string;
  contactMessageLabel: string;
  contactSend: string;
  contactSuccess: string;
  contactErrorPrefix: string;
  contactErrorSuffix: string;
  contactRequired: string;
};

export const copy: Record<Lang, HomeCopy> = {
  es: {
    roleTitle: "Desarrollador iOS",
    heroTagline:
      "4 años creando apps nativas con Swift y SwiftUI. Autor de ZonaSalsa, publicada en App Store y Google Play, con CarPlay y Siri.",
    availability: "Disponible · Murcia, España · Preferencia por remoto",
    viewProjects: "Ver proyectos",
    cvDownload: "Descargar CV",
    linkedin: "LinkedIn",
    github: "GitHub",
    medium: "Medium",
    navProjects: "Proyectos",
    appsHeading: "Apps",
    engineeringHeading: "Ingeniería",
    engineeringIntro: "Proyecto de código disponible para ver cómo trabajo: arquitectura, concurrencia y tests.",
    stackLabel: "Tecnologías",
    comingSoon: "Próximamente en App Store",
    appStore: "App Store",
    googlePlay: "Google Play",
    viewCode: "Ver código en GitHub",
    aboutHeading: "Sobre mí",
    aboutParagraph:
      "Desarrollo apps nativas para el ecosistema Apple con un enfoque claro en diseño del software y mantenibilidad. Para mí, escribir código no es solo hacer que algo funcione hoy, sino dejar un sistema que otros puedan entender, extender y evolucionar.",
    aboutParagraph2:
      "Trabajo con Swift 6 y SwiftUI aplicando arquitectura modular y concurrencia estricta, buscando sistemas claros, predecibles y fáciles de mantener en el tiempo. Aplico herramientas de automatización e inteligencia artificial para agilizar tareas repetitivas, mientras conservo el control absoluto del criterio técnico, las revisiones manuales y las decisiones estratégicas de diseño y arquitectura.",
    footerContactLabel: "Contacto",
    privacyPolicy: "Política de privacidad",
    contactHeading: "Contacto",
    contactNameLabel: "Nombre",
    contactEmailLabel: "Email",
    contactMessageLabel: "Mensaje",
    contactSend: "Enviar",
    contactSuccess: "Mensaje enviado. Te responderé pronto.",
    contactErrorPrefix: "No se pudo enviar. Intenta de nuevo",
    contactErrorSuffix: "o escribe a",
    contactRequired: "Todos los campos son obligatorios.",
  },
  en: {
    roleTitle: "iOS Developer",
    heroTagline:
      "4 years building native apps with Swift and SwiftUI. Creator of ZonaSalsa, live on the App Store and Google Play, with CarPlay and Siri support.",
    availability: "Available · Murcia, Spain · Remote preferred",
    viewProjects: "View projects",
    cvDownload: "Download CV",
    linkedin: "LinkedIn",
    github: "GitHub",
    medium: "Medium",
    navProjects: "Projects",
    appsHeading: "Apps",
    engineeringHeading: "Engineering",
    engineeringIntro: "A source-available project that shows how I work: architecture, concurrency and tests.",
    stackLabel: "Technologies",
    comingSoon: "Coming soon to the App Store",
    appStore: "App Store",
    googlePlay: "Google Play",
    viewCode: "View code on GitHub",
    aboutHeading: "About me",
    aboutParagraph:
      "I develop native apps for the Apple ecosystem with a clear focus on software design and maintainability. For me, writing code isn't just about making something work today—it's about leaving a system that others can understand, extend, and evolve.",
    aboutParagraph2:
      "I work with Swift 6 and SwiftUI applying modular architecture and strict concurrency, aiming for clear, predictable systems that are easy to maintain over time. I apply automation and artificial intelligence tools to streamline repetitive tasks, while retaining full control over technical judgment, manual reviews, and strategic design and architecture decisions.",
    footerContactLabel: "Contact",
    privacyPolicy: "Privacy Policy",
    contactHeading: "Contact",
    contactNameLabel: "Name",
    contactEmailLabel: "Email",
    contactMessageLabel: "Message",
    contactSend: "Send",
    contactSuccess: "Message sent. I'll get back to you soon.",
    contactErrorPrefix: "Could not send. Try again",
    contactErrorSuffix: "or email",
    contactRequired: "All fields are required.",
  },
};
