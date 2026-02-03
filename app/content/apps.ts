export type AppStatus = "live" | "soon";

export type App = {
  id: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  appStoreUrl?: string;
  status: AppStatus;
};

export const apps: App[] = [
  {
    id: "zona-salsa-radio",
    name: {
      es: "Zona Salsa Radio",
      en: "Zona Salsa Radio",
    },
    description: {
      es: "Escucha radio de salsa en directo. Música, programas y la mejor onda latina en tu iPhone.",
      en: "Listen to salsa radio live. Music, shows and the best Latin vibe on your iPhone.",
    },
    appStoreUrl: "https://apps.apple.com/app/zona-salsa-radio/id0000000000",
    status: "live",
  },
  {
    id: "bachata-rhythm",
    name: {
      es: "Bachata Rhythm",
      en: "Bachata Rhythm",
    },
    description: {
      es: "Tu compañero de bachata: ritmo, práctica y playlists para bailar y disfrutar.",
      en: "Your bachata companion: rhythm, practice and playlists to dance and enjoy.",
    },
    status: "soon",
  },
];
