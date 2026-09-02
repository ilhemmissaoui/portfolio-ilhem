import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ilhem Missaoui | Full-Stack Developer",
    short_name: "Ilhem Missaoui",
    description:
      "Ilhem Missaoui - Full-stack developer specialized in web and mobile architecture, multi-tenant SaaS applications, offline-first synchronization and AI integration.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "software engineering",
      "web development",
      "mobile development",
      "developer",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
