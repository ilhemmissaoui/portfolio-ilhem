import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Ilhem Missaoui's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "The technologies I use to build web and mobile applications end to end.",
    metadata: {
      title: "Skills",
      description:
        "Ilhem Missaoui's technical skills across frontend, mobile, backend, databases and DevOps.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "SaaS platforms, mobile apps and business tools I have designed and shipped.",
    metadata: {
      title: "Projects",
      description:
        "Ilhem Missaoui's projects in web, mobile and full-stack development.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Ilhem Missaoui.",
    },
  },
  education: {
    title: "Education & Certifications",
    description: "My academic background and professional certifications.",
    metadata: {
      title: "Education & Certifications",
      description:
        "Ilhem Missaoui's education in software engineering and professional certifications.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ilhem Missaoui's resume.",
    metadata: {
      title: "Resume",
      description: "Ilhem Missaoui's resume.",
    },
  },
  experience: {
    title: "Experience",
    description:
      "Five years building web and mobile products for SaaS, HR and education teams.",
    metadata: {
      title: "Experience",
      description:
        "Ilhem Missaoui's professional journey and experience timeline.",
    },
  },
};
