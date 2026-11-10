export type Lang = "es" | "en";

export type HomeCopy = {
  roleTitle: string;
  heroTagline: string;
  linkedin: string;
  appsHeading: string;
  highlightsHeading: string;
  highlight1: string;
  highlight2: string;
  highlight3: string;
  highlight6: string;
  appStore: string;
  comingSoon: string;
  aboutHeading: string;
  aboutParagraph: string;
  aboutParagraph2: string;
  footerContactLabel: string;
  contactHeading: string;
  contactNameLabel: string;
  contactEmailLabel: string;
  contactMessageLabel: string;
  contactSend: string;
  contactSuccess: string;
  contactErrorPrefix: string;
  contactErrorSuffix: string;
  contactRequired: string;
  cvSubtitle: string;
  cvDownload: string;
  github: string;
  medium: string;
};

export const copy: Record<Lang, HomeCopy> = {
  es: {
    roleTitle: "Desarrollador iOS",
    heroTagline:
      "Apps nativas para el ecosistema Apple · Arquitectura modular · Swift 6 · SwiftUI · Concurrencia estricta · Apps en producción",
    linkedin: "LinkedIn",
    appsHeading: "Apps",
    highlightsHeading: "Destacados",
    highlight1:
      "Swift 6 y SwiftUI en producción: iOS, iPadOS y ecosistema Apple con una sola base de código.",
    highlight2:
      "Clean Architecture, MVVM y flujo unidireccional. Código testeable, modular y listo para crecer.",
    highlight3:
      "Concurrencia con async/await y actors. Desarrollo aumentado con IA sin bajar la calidad.",
    highlight6:
      "Xcode Cloud, Git y entrega continua. Apps publicadas y mantenidas en producción.",
    appStore: "App Store",
    comingSoon: "Próximamente",
    aboutHeading: "Sobre mí",
    aboutParagraph:
      "Desarrollo apps nativas para el ecosistema Apple con un enfoque claro en diseño del software y mantenibilidad. Para mí, escribir código no es solo hacer que algo funcione hoy, sino dejar un sistema que otros puedan entender, extender y evolucionar.",
    aboutParagraph2:
      "Trabajo con Swift 6 y SwiftUI aplicando arquitectura modular y concurrencia estricta, buscando sistemas claros, predecibles y fáciles de mantener en el tiempo. Aplico herramientas de automatización e inteligencia artificial para agilizar tareas repetitivas, mientras conservo el control absoluto del criterio técnico, las revisiones manuales y las decisiones estratégicas de diseño y arquitectura.",
    footerContactLabel: "Contacto",
    contactHeading: "Contacto",
    contactNameLabel: "Nombre",
    contactEmailLabel: "Email",
    contactMessageLabel: "Mensaje",
    contactSend: "Enviar",
    contactSuccess: "Mensaje enviado. Te responderé pronto.",
    contactErrorPrefix: "No se pudo enviar. Intenta de nuevo",
    contactErrorSuffix: "o escribe a",
    contactRequired: "Todos los campos son obligatorios.",
    cvSubtitle: "PDF en español o inglés según el idioma seleccionado.",
    cvDownload: "Descargar CV",
    github: "GitHub",
    medium: "Medium",
  },
  en: {
    roleTitle: "iOS Developer",
    heroTagline:
      "Native apps for the Apple ecosystem · Modular architecture · Swift 6 · SwiftUI · Strict concurrency · Apps in production",
    linkedin: "LinkedIn",
    appsHeading: "Apps",
    highlightsHeading: "Highlights",
    highlight1:
      "Swift 6 and SwiftUI in production: iOS, iPadOS and the full Apple ecosystem from a single codebase.",
    highlight2:
      "Clean Architecture, MVVM and unidirectional data flow. Testable, modular code built to scale.",
    highlight3:
      "Structured concurrency with async/await and actors. AI-augmented development without compromising quality.",
    highlight6:
      "Xcode Cloud, Git and continuous delivery. Apps shipped and maintained in production.",
    appStore: "App Store",
    comingSoon: "Coming soon",
    aboutHeading: "About me",
    aboutParagraph:
      "I develop native apps for the Apple ecosystem with a clear focus on software design and maintainability. For me, writing code isn't just about making something work today—it's about leaving a system that others can understand, extend, and evolve.",
    aboutParagraph2:
      "I work with Swift 6 and SwiftUI applying modular architecture and strict concurrency, aiming for clear, predictable systems that are easy to maintain over time. I apply automation and artificial intelligence tools to streamline repetitive tasks, while retaining full control over technical judgment, manual reviews, and strategic design and architecture decisions.",
    footerContactLabel: "Contact",
    contactHeading: "Contact",
    contactNameLabel: "Name",
    contactEmailLabel: "Email",
    contactMessageLabel: "Message",
    contactSend: "Send",
    contactSuccess: "Message sent. I'll get back to you soon.",
    contactErrorPrefix: "Could not send. Try again",
    contactErrorSuffix: "or email",
    contactRequired: "All fields are required.",
    cvSubtitle: "PDF in Spanish or English depending on the selected language.",
    cvDownload: "Download CV",
    github: "GitHub",
    medium: "Medium",
  },
};
