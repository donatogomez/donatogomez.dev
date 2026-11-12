import Image from "next/image";
import type { HomeCopy, Lang } from "../content/copy";
import type { Project } from "../content/projects";

const actionClass =
  "inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2";

// Insignias oficiales de Apple y Google, sin modificar (solo se recortó el
// margen transparente de las de Google Play). Se muestran a 40 px de alto,
// el mínimo que pide Apple.
const storeBadges = {
  appStore: { es: "/badges/app-store-es.svg", en: "/badges/app-store-en.svg", width: 120 },
  googlePlay: { es: "/badges/google-play-es.png", en: "/badges/google-play-en.png", width: 135 },
} as const;

const badgeLinkClass =
  "rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2";

export function ProjectCard({ project, lang, t }: { project: Project; lang: Lang; t: HomeCopy }) {
  const { links } = project;
  const badges = (["appStore", "googlePlay"] as const).flatMap((store) => {
    const href = links[store];
    return href ? [{ store, href, label: t[store] }] : [];
  });

  return (
    <article className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 text-left shadow-sm sm:p-8">
      <div className="flex items-center gap-4">
        <Image
          src={project.icon}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-[22%] object-contain ring-1 ring-zinc-200"
        />
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-zinc-900">{project.name}</h3>
          <p className="text-sm text-zinc-600">{project.platforms[lang]}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
        {project.description[lang]}
      </p>

      {project.screenshots && (
        // En móvil no caben las tres: la tira se desliza en horizontal y llega
        // hasta el borde de la tarjeta. tabIndex permite desplazarla con teclado.
        <ul
          className="-mx-6 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 sm:mx-0 sm:justify-center sm:px-0"
          aria-label={`${t.screenshotsLabel} · ${project.name}`}
          tabIndex={0}
        >
          {project.screenshots.map((shot) => (
            <li key={shot.src} className="w-36 shrink-0 snap-start sm:w-40">
              <Image
                src={shot.src}
                alt={shot.alt[lang]}
                width={600}
                height={1304}
                sizes="(min-width: 640px) 160px, 144px"
                className="h-auto w-full rounded-2xl ring-1 ring-zinc-200"
              />
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700">
        {project.highlights[lang].map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F05138]" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.stackLabel}>
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-xs font-medium text-zinc-600"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {project.status === "soon" ? (
          <span className="inline-flex h-10 items-center rounded-lg bg-zinc-200 px-4 text-sm font-medium text-zinc-700">
            {t.comingSoon}
          </span>
        ) : (
          <>
            {badges.map(({ store, href, label }) => (
              <a key={store} href={href} target="_blank" rel="noopener noreferrer" className={badgeLinkClass}>
                <Image
                  src={storeBadges[store][lang]}
                  alt={`${label} · ${project.name}`}
                  width={storeBadges[store].width}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
            ))}
            {links.repo && (
              <a href={links.repo} target="_blank" rel="noopener noreferrer" className={actionClass}>
                {t.viewCode}
                <span className="sr-only"> · {project.name}</span>
              </a>
            )}
          </>
        )}
      </div>
    </article>
  );
}
