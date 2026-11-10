export type Lang = "es" | "en";

export type HomeCopy = {
  roleTitle: string;
  heroTagline: string;
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
  contactSending: string;
  contactSuccess: string;
  contactErrorPrefix: string;
  contactErrorSuffix: string;
  contactRequired: string;
  skipToContent: string;
  mainNavLabel: string;
  languageLabel: string;
  menuOpen: string;
  menuClose: string;
  contactInvalid: string;
  contactDirect: string;
  contactPrivacyNotice: string;
};

export const copy: Record<Lang, HomeCopy> = {
  es: {
    roleTitle: "Desarrollador iOS",
    heroTagline:
      "4 años creando apps nativas con Swift y SwiftUI. Autor de ZonaSalsa, publicada en App Store y Google Play, con CarPlay y Siri.",
    viewProjects: "Ver proyectos",
    cvDownload: "Descargar CV",
    linkedin: "LinkedIn",
    github: "GitHub",
    medium: "Medium",
    navProjects: "Proyectos",
    appsHeading: "Apps",
    engineeringHeading: "Cómo trabajo",
    engineeringIntro: "Un proyecto con el código a la vista: arquitectura, concurrencia y tests.",
    stackLabel: "Tecnologías",
    comingSoon: "Próximamente en App Store",
    appStore: "Descárgalo en el App Store",
    googlePlay: "Disponible en Google Play",
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
    contactSending: "Enviando…",
    contactSuccess: "Mensaje enviado. Te responderé pronto.",
    contactErrorPrefix: "No se pudo enviar. Intenta de nuevo",
    contactErrorSuffix: "o escribe a",
    contactRequired: "Todos los campos son obligatorios.",
    skipToContent: "Saltar al contenido",
    mainNavLabel: "Principal",
    languageLabel: "Idioma",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    contactInvalid: "Revisa el email y que el mensaje no supere los 5000 caracteres.",
    contactDirect: "También puedes escribirme a",
    contactPrivacyNotice: "Solo usaré tus datos para responderte.",
  },
  en: {
    roleTitle: "iOS Developer",
    heroTagline:
      "4 years building native apps with Swift and SwiftUI. Creator of ZonaSalsa, live on the App Store and Google Play, with CarPlay and Siri support.",
    viewProjects: "View projects",
    cvDownload: "Download CV",
    linkedin: "LinkedIn",
    github: "GitHub",
    medium: "Medium",
    navProjects: "Projects",
    appsHeading: "Apps",
    engineeringHeading: "How I work",
    engineeringIntro: "A project with publicly available source code: architecture, concurrency and tests.",
    stackLabel: "Technologies",
    comingSoon: "Coming soon to the App Store",
    appStore: "Download on the App Store",
    googlePlay: "Get it on Google Play",
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
    contactSending: "Sending…",
    contactSuccess: "Message sent. I'll get back to you soon.",
    contactErrorPrefix: "Could not send. Try again",
    contactErrorSuffix: "or email",
    contactRequired: "All fields are required.",
    skipToContent: "Skip to content",
    mainNavLabel: "Main",
    languageLabel: "Language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    contactInvalid: "Check the email address and keep the message under 5,000 characters.",
    contactDirect: "You can also email me at",
    contactPrivacyNotice: "I'll only use your details to reply to you.",
  },
};
