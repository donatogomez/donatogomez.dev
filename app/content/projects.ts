type Localized<T = string> = { es: T; en: T };

/**
 * "soon": muestra el aviso "Próximamente en App Store" e ignora `links`.
 * Para publicar una app basta con cambiar `status` a "live" y añadir su
 * enlace en `links` (por ejemplo `appStore`).
 */
export type ProjectStatus = "live" | "soon";

export type Project = {
  id: string;
  name: string;
  /** Ruta del icono en `public/`. */
  icon: string;
  status: ProjectStatus;
  platforms: Localized;
  description: Localized;
  /** Decisiones técnicas verificables en el repositorio de cada proyecto. */
  highlights: Localized<string[]>;
  stack: string[];
  links: {
    appStore?: string;
    googlePlay?: string;
    repo?: string;
  };
};

export const apps: Project[] = [
  {
    id: "zona-salsa-radio",
    name: "ZonaSalsa",
    icon: "/zonasalsa-logo.webp",
    status: "live",
    platforms: { es: "iPhone y iPad · Android", en: "iPhone & iPad · Android" },
    description: {
      es: "Radio de salsa en directo 24/7, sin anuncios ni suscripción. La versión iOS está hecha en Swift y SwiftUI, y la de Android es un port nativo en Kotlin y Jetpack Compose.",
      en: "24/7 live salsa radio with no ads and no subscription. The iOS app is built with Swift and SwiftUI, and the Android version is a native port in Kotlin and Jetpack Compose.",
    },
    highlights: {
      es: [
        "CarPlay, pantalla de bloqueo y Centro de control, con la canción que suena en tiempo real.",
        "Siri y Atajos con App Intents: reproducir, parar y preguntar qué suena.",
        "Swift 6 con aislamiento en MainActor por defecto y más de 300 tests con Swift Testing.",
        "Android: Media3 con soporte para Android Auto, MVVM por capas y CI en GitHub Actions.",
      ],
      en: [
        "CarPlay, Lock Screen and Control Center, showing the song that is playing in real time.",
        "Siri and Shortcuts through App Intents: play, stop and ask what's playing.",
        "Swift 6 with MainActor default isolation and 300+ tests written with Swift Testing.",
        "Android: Media3 with Android Auto support, layered MVVM and CI on GitHub Actions.",
      ],
    },
    stack: ["Swift 6", "SwiftUI", "App Intents", "CarPlay", "AVFoundation", "Swift Testing", "Kotlin", "Jetpack Compose"],
    links: {
      appStore: "https://apps.apple.com/app/id6759666915",
      googlePlay: "https://play.google.com/store/apps/details?id=dev.donatogomez.zonasalsaradio",
    },
  },
  {
    id: "bachata-rhythm",
    name: "Bachata Rhythm",
    icon: "/bachatarhythm-icon.webp",
    status: "soon",
    platforms: { es: "iPhone", en: "iPhone" },
    description: {
      es: "App para aprender la musicalidad de la bachata: escucha cómo se construye el ritmo capa a capa, sigue el conteo del 1 al 8 y practica a tu tempo.",
      en: "An app for learning bachata musicality: hear how the rhythm is built layer by layer, follow the 1–8 count and practise at your own tempo.",
    },
    highlights: {
      es: [
        "Tres secciones (derecho, majao y mambo) y cinco instrumentos en capas: güira, bongó, bajo, segunda y requinto, con conteo por voz y metrónomo.",
        "Motor de audio propio sobre AVAudioEngine: todas las capas suenan en fase y los cambios de tempo (60–180 BPM) o de sección entran en la muestra exacta.",
        "Swift 6 con concurrencia estricta completa, sin dependencias externas y más de 190 tests, incluidos tests deterministas del audio renderizado offline.",
        "VoiceOver, Dynamic Type y español e inglés.",
      ],
      en: [
        "Three sections (derecho, majao and mambo) and five layered instruments: güira, bongó, bass, rhythm guitar and lead guitar, plus a spoken count and a metronome.",
        "Custom audio engine on AVAudioEngine: every layer stays in phase, and tempo (60–180 BPM) or section changes land on the exact sample.",
        "Swift 6 with complete strict concurrency, no third-party dependencies and 190+ tests, including deterministic tests of offline-rendered audio.",
        "VoiceOver, Dynamic Type, Spanish and English.",
      ],
    },
    stack: ["Swift 6", "SwiftUI", "AVAudioEngine", "Swift Testing"],
    links: {},
  },
];

export const engineering: Project[] = [
  {
    id: "signal-flow",
    name: "SignalFlow",
    icon: "/signalflow-icon.png",
    status: "live",
    platforms: { es: "iOS 26 · watchOS", en: "iOS 26 · watchOS" },
    description: {
      es: "App offline-first para monitorizar una flota de sensores IoT. Es un proyecto de referencia para enseñar cómo construyo una app de principio a fin, con el código y la documentación en GitHub.",
      en: "An offline-first app for monitoring a fleet of IoT sensors. It is a reference project that shows how I build an app end to end, with the code and documentation on GitHub.",
    },
    highlights: {
      es: [
        "Clean Architecture con módulos de Swift Package Manager; un control en CI impide que las features importen la capa de datos.",
        "Swift 6 con concurrencia estricta: actors, TaskGroup y AsyncSequence para ingerir telemetría con cancelación correcta.",
        "SwiftData en un ModelActor fuera del hilo principal, widgets, App Intents, Live Activity y app para Apple Watch.",
        "Más de 280 tests con Swift Testing, simulación determinista, ADRs y ninguna dependencia externa.",
      ],
      en: [
        "Clean Architecture with Swift Package Manager modules; a CI check stops features from importing the data layer.",
        "Swift 6 strict concurrency: actors, TaskGroup and AsyncSequence for cancellation-correct telemetry ingestion.",
        "SwiftData on a ModelActor off the main thread, widgets, App Intents, a Live Activity and an Apple Watch app.",
        "280+ tests with Swift Testing, deterministic simulation, ADRs and zero third-party dependencies.",
      ],
    },
    stack: ["Swift 6", "SwiftUI", "SwiftData", "Swift Charts", "WidgetKit", "App Intents", "Swift Testing"],
    links: { repo: "https://github.com/donatogomez/signal-flow" },
  },
];
