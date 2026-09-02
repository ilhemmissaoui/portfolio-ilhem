import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React",
    description:
      "Build interactive user interfaces from composable, well-typed components.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Ship full-stack applications with the App Router, Server Actions and server-side rendering.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "Typescript",
    description:
      "Keep large codebases safe and readable with static types across frontend and backend.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "The language behind every project I ship, on the browser and on the server.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design responsive, consistent interfaces quickly with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Node.js",
    description:
      "Build APIs and services on the server with the JavaScript runtime.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "React Native",
    description:
      "Deliver cross-platform mobile apps that share logic with the web codebase.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Expo",
    description:
      "Build, preview and release React Native apps with a managed toolchain.",
    rating: 4,
    icon: Icons.expo,
  },
  {
    name: "Supabase",
    description:
      "Postgres as a backend, with Row-Level Security, auth and real-time subscriptions.",
    rating: 4,
    icon: Icons.supabase,
  },
  {
    name: "PostgreSQL",
    description:
      "Model relational data with strong constraints, and enforce access with RLS policies.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "Express",
    description:
      "Build REST APIs on Node.js with a fast, unopinionated web framework.",
    rating: 4,
    icon: Icons.express,
  },
  {
    name: "Laravel",
    description:
      "Develop PHP backends with expressive routing, Eloquent ORM and a mature ecosystem.",
    rating: 4,
    icon: Icons.laravel,
  },
  {
    name: "Redux Toolkit",
    description:
      "Manage predictable application state with slices, thunks and a single store.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "TanStack Query",
    description:
      "Handle server state, caching and background refetching without boilerplate.",
    rating: 4,
    icon: Icons.tanstackQuery,
  },
  {
    name: "Zustand",
    description:
      "Keep client state small and explicit with a minimal, hook-based store.",
    rating: 4,
    icon: Icons.zustand,
  },
  {
    name: "MongoDB",
    description:
      "Store and query flexible document data for fast-moving product requirements.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "MySQL",
    description:
      "Design and query relational schemas for transactional applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Git",
    description:
      "Track work, review changes and collaborate across GitHub and GitLab.",
    rating: 4,
    icon: Icons.git,
  },
  {
    name: "CI/CD",
    description:
      "Automate builds, tests and deployments so releases stay boring and repeatable.",
    rating: 4,
    icon: Icons.gitlab,
  },
  {
    name: "Figma",
    description:
      "Translate designs into faithful, reusable interface components.",
    rating: 4,
    icon: Icons.figma,
  },
  {
    name: "Storybook",
    description:
      "Document and test UI components in isolation as a shared design system.",
    rating: 4,
    icon: Icons.storybook,
  },
  {
    name: "Angular",
    description:
      "Build structured web applications with a TypeScript-first framework, NgRx and RxJS.",
    rating: 3,
    icon: Icons.angular,
  },
  {
    name: "Spring Boot",
    description:
      "Develop Java backends with Spring MVC, Spring Data JPA and Hibernate.",
    rating: 3,
    icon: Icons.springboot,
  },
  {
    name: "Java",
    description:
      "Write backend services and business logic for JVM applications.",
    rating: 3,
    icon: Icons.java,
  },
  {
    name: "PHP",
    description:
      "Build server-side applications with Laravel and Symfony.",
    rating: 3,
    icon: Icons.php,
  },
  {
    name: "Symfony",
    description:
      "Structure PHP applications with reusable components and Doctrine ORM.",
    rating: 3,
    icon: Icons.symfony,
  },
  {
    name: "Docker",
    description:
      "Package services into reproducible containers for local work and deployment.",
    rating: 3,
    icon: Icons.docker,
  },
  {
    name: "Deno",
    description:
      "Run secure TypeScript on the server, including Supabase edge functions.",
    rating: 3,
    icon: Icons.deno,
  },
  {
    name: "Stripe Connect",
    description:
      "Integrate marketplace payments, payouts and onboarding flows.",
    rating: 3,
    icon: Icons.stripe,
  },
  {
    name: "Twilio",
    description: "Send SMS and voice notifications from application workflows.",
    rating: 3,
    icon: Icons.twilio,
  },
  {
    name: "OpenAI & Anthropic",
    description:
      "Integrate large language models into products for diagnostics and assistance.",
    rating: 3,
    icon: Icons.openai,
  },
  {
    name: "Swagger",
    description: "Document REST APIs so integrations stay clear and testable.",
    rating: 3,
    icon: Icons.swagger,
  },
  {
    name: "SonarQube",
    description:
      "Keep code quality and security issues visible through static analysis.",
    rating: 3,
    icon: Icons.sonarqube,
  },
  {
    name: "Sentry",
    description:
      "Catch production errors early with monitoring and release tracking.",
    rating: 3,
    icon: Icons.sentry,
  },
  {
    name: "Sequelize",
    description:
      "Map relational models in Node.js services with migrations and associations.",
    rating: 3,
    icon: Icons.sequelize,
  },
  {
    name: "Radix UI / shadcn",
    description:
      "Compose accessible, unstyled primitives into a consistent component library.",
    rating: 3,
    icon: Icons.radixui,
  },
  {
    name: "Maven",
    description: "Manage dependencies and builds for Java and Spring projects.",
    rating: 3,
    icon: Icons.maven,
  },
  {
    name: "Jira & Trello",
    description:
      "Run delivery in Agile/Scrum teams with clear boards and sprint tracking.",
    rating: 3,
    icon: Icons.jira,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
