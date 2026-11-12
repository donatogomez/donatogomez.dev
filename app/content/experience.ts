type Localized = { es: string; en: string };

export type Position = {
  id: string;
  role: string;
  organization: Localized;
  location: Localized;
  /** "AAAA-MM". Sin `end`, es el puesto actual. */
  start: string;
  end?: string;
  summary?: Localized;
  /** Un punto por cliente o proyecto. */
  items?: { label: Localized; text: Localized }[];
};

// Hechos y textos de ~/Documents/ios-career: puestos y fechas de
// profile/timeline.toml (solo fechas con confianza DOC o V) y textos de las
// claims aprobadas de positioning/claims.toml (id en cada comentario). No se
// redactan aquí: si cambian, se cambian allí primero. Los meses de cada
// cliente de NTT DATA son aproximados, así que no se publican.
export const experience: Position[] = [
  {
    id: "independent",
    role: "iOS Developer",
    organization: { es: "ZonaSalsa y proyectos propios", en: "ZonaSalsa & independent projects" },
    location: { es: "En remoto", en: "Remote" },
    start: "2025-09",
    // LI-INDEPENDENT
    summary: {
      es: "Apps propias y colaboraciones desde septiembre de 2025, con desarrollo asistido por IA y dirigido por especificaciones (OpenSpec, ADR): defino la arquitectura y reviso cada cambio.",
      en: "My own apps and collaborations since September 2025, built with spec-driven, AI-assisted development (OpenSpec, ADRs): I own the architecture and review every change.",
    },
  },
  {
    id: "ntt",
    role: "iOS Developer",
    organization: { es: "NTT DATA", en: "NTT DATA" },
    location: { es: "En remoto", en: "Remote" },
    start: "2022-07",
    end: "2025-09",
    items: [
      {
        // E-NTT-LOS40-B
        label: { es: "PRISA (Los40)", en: "PRISA (Los40)" },
        text: {
          es: "Rehíce junto con otro desarrollador la pantalla principal de la app en SwiftUI, con arquitectura Clean + MVVM, async/await y consumo de servicios REST.",
          en: "Rebuilt the app's main screen in SwiftUI together with another developer, using Clean Architecture + MVVM, async/await and REST APIs.",
        },
      },
      {
        // E-NTT-CARPETA
        label: { es: "Junta de Andalucía (Carpeta Ciudadana)", en: "Government of Andalusia (Carpeta Ciudadana)" },
        text: {
          es: "Analicé la app heredada (~90 % Objective-C; no compilaba) y documenté en un informe técnico las alternativas de refactorización profunda o reconstrucción; después se decidió reconstruirla desde cero. Participé en su reconstrucción en SwiftUI con Clean Architecture y MVVM (versión 2.0, junio de 2024), una app ciudadana con 4,7★ en el App Store, y en sus evolutivos.",
          en: "I analysed the legacy app (~90% Objective-C; it did not build) and documented the deep-refactoring and rebuild alternatives in a technical report; the app was subsequently rebuilt from scratch. I took part in the rebuild in SwiftUI with Clean Architecture and MVVM (v2.0, June 2024), a citizen app rated 4.7★ on the App Store, and in its subsequent releases.",
        },
      },
      {
        // E-NTT-FERROVIAL
        label: { es: "Ferrovial", en: "Ferrovial" },
        text: {
          es: "Responsable único del desarrollo iOS de una app interna de gestión de incidencias, de cero a entrega en ~3 meses. Definí la arquitectura y el stack (SwiftUI, async/await) y el diseño UX/UI, que después adoptó también la versión Android, e integré la autenticación con el SDK de Salesforce y el sistema de mapas propio del cliente.",
          en: "Sole owner of the iOS development of an internal incident-management app, from scratch to delivery in ~3 months. I defined the architecture and stack (SwiftUI, async/await) and the UX/UI design, later adopted by the Android version, and integrated authentication through the Salesforce SDK and the client's proprietary mapping system.",
        },
      },
      {
        // E-NTT-MAINT
        label: { es: "Renfe (dōcō) y Vodafone", en: "Renfe (dōcō) and Vodafone" },
        text: {
          es: "Corrección de errores en producción en dōcō (SwiftUI), con algunos evolutivos, y en la app de Vodafone (UIKit, CocoaPods), donde también escribí tests.",
          en: "Production bug fixing on dōcō (SwiftUI), plus some enhancements, and on Vodafone's app (UIKit, CocoaPods), where I also wrote tests.",
        },
      },
    ],
  },
  {
    id: "gig",
    role: "Android Developer",
    organization: { es: "Green IT Globe / GIG Technology", en: "Green IT Globe / GIG Technology" },
    location: { es: "Bélgica", en: "Belgium" },
    start: "2016-11",
    end: "2017-07",
    // E-EARLY
    summary: {
      es: "Desarrollo Android nativo (Java) en un equipo internacional, en inglés. Antes: soporte en banca en VIEWNEXT (Almería, 2016) y prácticas Erasmus+ de Android en Mobicage (Bélgica, 2016).",
      en: "Native Android development (Java) in an international, English-speaking team. Earlier: banking support at VIEWNEXT (Almería, 2016) and an Erasmus+ Android internship at Mobicage (Belgium, 2016).",
    },
  },
];
