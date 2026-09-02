import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "almindhar",
    position: "Software Developer",
    company: "Almindhar",
    location: "Sousse, Tunisia",
    startDate: new Date("2026-02-01"),
    endDate: "Present",
    description: [
      "Designing Voice2Work, a multi-tenant SaaS for field intervention management (web app + technician mobile app).",
      "Building the frontend architecture with Next.js 16 and Server Actions, and the mobile app with React Native and Expo, including offline-first synchronization.",
      "Building the backend on Supabase and PostgreSQL, with Row-Level Security permissions and real-time subscriptions.",
    ],
    achievements: [
      "Designed Voice2Work, a multi-tenant SaaS for field intervention management covering both a web app and a technician mobile app.",
      "Implemented an offline-first synchronization layer so technicians can keep working without network coverage and sync once back online.",
      "Modelled multi-tenant data isolation with PostgreSQL Row-Level Security and real-time subscriptions on Supabase.",
      "Integrated AI (OpenAI, Anthropic) for automated diagnostics, plus Stripe Connect payments and Twilio notifications.",
    ],
    skills: [
      "Next.js",
      "React",
      "Typescript",
      "React Native",
      "Expo",
      "Supabase",
      "PostgreSQL",
      "Stripe Connect",
      "Twilio",
      "OpenAI",
      "Anthropic",
    ],
    companyUrl: "https://www.al-mindhar.com",
    logo: "/experience/almindhar.jpg",
  },
  {
    id: "nehos-group",
    position: "Software Developer",
    company: "Nehos Group",
    location: "Sousse, Tunisia",
    startDate: new Date("2023-02-01"),
    endDate: new Date("2025-09-30"),
    description: [
      "Built JFS, an intelligent matching platform connecting candidates and recruiters, with Next.js, TypeScript and Tailwind CSS.",
      "Built ViviTools, a project planning tool inspired by the Business Model Canvas, with React.js and Tailwind CSS.",
      "Built GRON, a platform for managing and tracking energy renovation projects, with a Next.js/Redux Toolkit frontend and a Laravel/Eloquent ORM backend.",
    ],
    achievements: [
      "Integrated Figma designs as modular, reusable components documented in Storybook.",
      "Delivered GRON end to end, from the Next.js/Redux Toolkit frontend to the Laravel/Eloquent ORM backend.",
      "Implemented CI/CD pipelines, technical documentation and secure REST APIs (Sequelize, Swagger, SonarQube).",
    ],
    skills: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Storybook",
      "Laravel",
      "Eloquent ORM",
      "Sequelize",
      "Swagger",
      "SonarQube",
      "CI/CD",
    ],
    companyUrl: "https://nehos-groupe.com",
    logo: "/experience/nehosgroup.jpeg",
  },
  {
    id: "pixelium",
    position: "Software Developer",
    company: "Pixelium",
    location: "Sousse, Tunisia",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2022-11-30"),
    description: [
      "Developed PayDay Takaful, a salary advance payment platform built with React.js and Node.js/Express.",
      "Developed UNETP, a school and private institution management platform built with Next.js, Node.js/Express and MongoDB.",
      "Developed a school management system with Laravel, PHP and MySQL, and Localira, a fleet management platform with real-time GPS geolocation.",
    ],
    achievements: [
      "Shipped PayDay Takaful to 3,000+ employees, with secure payment integration and CI/CD pipelines.",
      "Deployed UNETP for 1,000+ institutions serving 200,000+ users.",
      "Delivered real-time GPS tracking for 150+ vehicles on the Localira fleet management platform.",
      "Automated deployment of the school management system via Git/GitHub.",
    ],
    skills: [
      "React",
      "Next.js",
      "Javascript",
      "Node.js",
      "Express",
      "MongoDB",
      "Laravel",
      "PHP",
      "MySQL",
      "Git",
      "CI/CD",
    ],
    companyUrl: "https://pixelium.tech",
    logo: "/experience/pixelium.png",
  },
];
