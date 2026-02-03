export type Review = {
  id: string;
  name: string;
  role: string;
  text: { es: string; en: string };
};

export const reviews: Review[] = [
  {
    id: "1",
    name: "Carlos Méndez",
    role: "Product Manager, Fintech startup",
    text: {
      es: "Donato llevó nuestra app iOS de cero a App Store en tres meses. Código mantenible, documentación clara y muy buena comunicación. Repetiríamos sin dudarlo.",
      en: "Donato took our iOS app from zero to App Store in three months. Maintainable code, clear documentation and great communication. We'd work with him again in a heartbeat.",
    },
  },
  {
    id: "2",
    name: "Laura Vidal",
    role: "CTO, HealthTech",
    text: {
      es: "Profesional y metódico. La arquitectura que propuso nos ha permitido escalar la app sin reescribir. SwiftUI y buenas prácticas en todo el proyecto.",
      en: "Professional and methodical. The architecture he proposed let us scale the app without rewrites. SwiftUI and best practices throughout the project.",
    },
  },
  {
    id: "3",
    name: "Miguel Torres",
    role: "Founder, B2B SaaS",
    text: {
      es: "Contratamos a Donato para un proyecto urgente. Entregó a tiempo, el código pasó review a la primera y el equipo aprendió mucho con su forma de trabajar.",
      en: "We hired Donato for an urgent project. He delivered on time, the code passed review first time and the team learned a lot from how he works.",
    },
  },
  {
    id: "4",
    name: "Ana Ruiz",
    role: "Tech Lead, E-commerce",
    text: {
      es: "Trabajamos con él en la migración a SwiftUI. Transición ordenada, sin parar producción. Recomendable para equipos que quieren modernizar sin riesgos.",
      en: "We worked with him on our SwiftUI migration. Smooth transition, no production downtime. Recommended for teams that want to modernise without risk.",
    },
  },
  {
    id: "5",
    name: "Pablo Navarro",
    role: "iOS Developer, Agencia digital",
    text: {
      es: "Donato se integró muy rápido en el equipo. Código limpio, tests donde hacían falta y siempre dispuesto a compartir conocimiento. Un lujo.",
      en: "Donato fitted into the team very quickly. Clean code, tests where they mattered and always happy to share knowledge. A pleasure to work with.",
    },
  },
];
