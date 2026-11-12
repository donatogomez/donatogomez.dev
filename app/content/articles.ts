type Localized = { es: string; en: string };

export type Article = {
  /** Título tal como está en Medium (los artículos están en inglés). */
  title: string;
  url: string;
  summary: Localized;
  /** Fecha de publicación que muestra Medium, en formato ISO. */
  published: string;
  readingMinutes: number;
};

// Ordenados del más reciente al más antiguo.
export const articles: Article[] = [
  {
    title: "Swift Is Not Just iOS — And Never Was",
    url: "https://medium.com/@donatogomez/swift-beyond-the-apple-ecosystem-an-underused-language-b5f712ca0c90",
    summary: {
      es: "Swift más allá de iOS: qué es realmente el lenguaje.",
      en: "Beyond iOS: what Swift really is.",
    },
    published: "2026-03-18",
    readingMinutes: 5,
  },
  {
    title: "Understanding @MainActor in SwiftUI: A Practical Guide for Swift 6",
    url: "https://medium.com/@donatogomez/understanding-mainactor-in-swiftui-a-practical-guide-for-swift-6-69e657872ec5",
    summary: {
      es: "Guía práctica de @MainActor en SwiftUI con Swift 6.",
      en: "A practical guide to @MainActor in SwiftUI with Swift 6.",
    },
    published: "2025-05-20",
    readingMinutes: 3,
  },
  {
    title: "Reactive Swift Without Combine or Rx",
    url: "https://medium.com/@donatogomez/reactive-swift-without-combine-or-rx-a35a5ba31e08",
    summary: {
      es: "Una arquitectura reactiva moderna con async/await y Swift 6.",
      en: "A modern reactive architecture powered by async/await and Swift 6.",
    },
    published: "2025-05-13",
    readingMinutes: 4,
  },
];
