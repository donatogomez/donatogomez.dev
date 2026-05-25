export type AppStatus = "live" | "soon";

export type App = {
  id: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  appStoreUrl?: string;
  status: AppStatus;
  /** Ruta del icono/logo en public (ej. /zona-salsa-radio.png). Opcional. */
  icon?: string;
};

export const apps: App[] = [
  {
    id: "zona-salsa-radio",
    name: {
      es: "ZonaSalsa",
      en: "ZonaSalsa",
    },
    description: {
      es: "Streaming de salsa en vivo, 24/7 y sin publicidad. Información en tiempo real, historial de canciones, Lock Screen, Control Center, CarPlay y tema oscuro. Sin suscripción, sin anuncios.",
      en: "Live salsa streaming, 24/7 and ad-free. Real-time now playing, song history, Lock Screen, Control Center, CarPlay and dark mode. No subscription, no ads.",
    },
    appStoreUrl: "https://apps.apple.com/us/app/zona-salsa-radio/id6759666915",
    status: "live",
    icon: "/zonasalsa-logo.webp",
  },
  {
    id: "bachata-rhythm",
    name: {
      es: "Bachata Rhythm",
      en: "Bachata Rhythm",
    },
    description: {
      es: "App educativa para explorar y practicar los patrones rítmicos de la bachata. Siete instrumentos, cinco secciones, control de BPM y motor de audio con AVFoundation. SwiftUI, VoiceOver y bilingüe.",
      en: "Educational app to explore and practice authentic bachata rhythmic patterns. Seven instruments, five sections, BPM control and AVFoundation audio engine. SwiftUI, VoiceOver and bilingual.",
    },
    status: "soon",
  },
];
