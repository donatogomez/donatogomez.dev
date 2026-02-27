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
      es: "Zona Salsa Radio",
      en: "Zona Salsa Radio",
    },
    description: {
      es: "App iOS para escuchar Zona Salsa Radio en vivo: información en tiempo real de la canción, historial, Lock Screen, Siri, Shortcuts y CarPlay. Streaming 24/7, bilingüe (ES/EN).",
      en: "iOS app to listen to Zona Salsa Radio live: real-time track info, history, Lock Screen controls, Siri, Shortcuts and CarPlay. 24/7 streaming, bilingual (ES/EN).",
    },
    appStoreUrl: "https://apps.apple.com/us/app/zona-salsa-radio/id6759666915",
    status: "live",
    icon: "/zona-salsa-radio.png",
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
