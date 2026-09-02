import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "voice2work",
    companyName: "Voice2Work",
    type: "Professional",
    category: ["Full Stack", "Mobile Dev", "Web Dev"],
    shortDescription:
      "Multi-tenant SaaS for field intervention management, combining a web back office with an offline-first mobile app for technicians.",
    websiteLink: "https://voice2work.com",
    techStack: [
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
    startDate: new Date("2026-02-01"),
    endDate: new Date("2026-09-01"),
    companyLogoImg: "/projects/voice2work/logo.png",
    pagesInfoArr: [
      {
        title: "Web back office & technician mobile app",
        description:
          "A Next.js back office for dispatchers and planners, paired with a React Native app technicians use in the field, online or offline.",
        imgArr: ["/projects/voice2work/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Voice2Work is a multi-tenant SaaS platform for managing field interventions, from scheduling and dispatch to on-site reporting and invoicing.",
        "I designed the architecture across both surfaces: a Next.js 16 web application built on Server Actions, and a React Native/Expo mobile app that technicians use in the field with full offline support.",
        "The backend runs on Supabase and PostgreSQL, where Row-Level Security enforces tenant isolation and real-time subscriptions keep the back office in sync with what happens on the ground.",
      ],
      bullets: [
        "Designed a multi-tenant SaaS covering both a web back office and a technician mobile app.",
        "Built the frontend architecture with Next.js 16 and Server Actions.",
        "Implemented offline-first synchronization in React Native/Expo so work continues without network coverage.",
        "Enforced tenant permissions with PostgreSQL Row-Level Security and kept clients live with real-time subscriptions.",
        "Integrated OpenAI and Anthropic for automated diagnostics, Stripe Connect for payments and Twilio for notifications.",
      ],
    },
  },
  {
    id: "jfs",
    companyName: "JFS",
    type: "Professional",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription:
      "Intelligent matching platform connecting candidates and recruiters, built as a modular component system documented in Storybook.",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Storybook",
      "Figma",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-09-30"),
    companyLogoImg: "/projects/jfs/logo.png",
    pagesInfoArr: [
      {
        title: "Matching platform",
        description:
          "Candidate and recruiter journeys built from a shared component library.",
        imgArr: ["/projects/jfs/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "JFS is an intelligent matching platform that connects candidates with recruiters based on their profiles and requirements.",
        "I built the frontend with Next.js, TypeScript and Tailwind CSS, translating Figma designs into modular components documented in Storybook so the design system stayed consistent as the product grew.",
      ],
      bullets: [
        "Built the candidate and recruiter interfaces with Next.js, TypeScript and Tailwind CSS.",
        "Integrated Figma designs as modular, reusable components.",
        "Documented the component library in Storybook to keep the UI consistent across teams.",
      ],
    },
  },
  {
    id: "gron",
    companyName: "GRON",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Platform for managing and tracking energy renovation projects, with a Next.js/Redux Toolkit frontend and a Laravel backend.",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Redux Toolkit",
      "Laravel",
      "PHP",
      "Eloquent ORM",
      "MySQL",
      "Swagger",
    ],
    startDate: new Date("2023-02-01"),
    endDate: new Date("2024-06-30"),
    companyLogoImg: "/projects/gron/logo.png",
    pagesInfoArr: [
      {
        title: "Project management & tracking",
        description:
          "Dashboards for following energy renovation projects through each stage of their lifecycle.",
        imgArr: ["/projects/gron/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "GRON is a platform for managing and tracking energy renovation projects, from the initial assessment through to completion.",
        "I worked across the stack: the frontend in Next.js with Redux Toolkit for state management, and the backend in Laravel using Eloquent ORM, exposed through documented REST APIs.",
      ],
      bullets: [
        "Built the frontend with Next.js and Redux Toolkit.",
        "Developed the backend with Laravel and Eloquent ORM.",
        "Delivered secure REST APIs documented with Swagger.",
      ],
    },
  },
  {
    id: "vivitools",
    companyName: "ViviTools",
    type: "Professional",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription:
      "Project planning tool inspired by the Business Model Canvas, built with React.js and Tailwind CSS.",
    techStack: ["React", "Javascript", "Tailwind CSS"],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-12-31"),
    companyLogoImg: "/projects/vivitools/logo.png",
    pagesInfoArr: [
      {
        title: "Canvas planner",
        description:
          "An interactive canvas where teams lay out and iterate on a project plan.",
        imgArr: ["/projects/vivitools/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ViviTools is a project planning tool inspired by the Business Model Canvas, giving teams a structured canvas to shape and refine a project.",
        "I built the interface with React.js and Tailwind CSS, focusing on a fluid editing experience across the different canvas blocks.",
      ],
      bullets: [
        "Built an interactive planning canvas with React.js.",
        "Styled the application with Tailwind CSS for a responsive, consistent layout.",
      ],
    },
  },
  {
    id: "payday-takaful",
    companyName: "PayDay Takaful",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Salary advance payment platform used by 3,000+ employees, with secure payment integration and CI/CD pipelines.",
    techStack: ["React", "Javascript", "Node.js", "Express", "MySQL", "CI/CD"],
    startDate: new Date("2021-09-01"),
    endDate: new Date("2022-03-31"),
    companyLogoImg: "/projects/payday-takaful/logo.png",
    pagesInfoArr: [
      {
        title: "Salary advance platform",
        description:
          "Employees request advances and follow their status; administrators review and settle them.",
        imgArr: ["/projects/payday-takaful/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "PayDay Takaful lets employees request an advance on their salary and follow the request through to payment.",
        "I developed the platform with React.js on the frontend and Node.js/Express on the backend, including the secure payment integration and the CI/CD pipelines used to ship it.",
      ],
      bullets: [
        "Developed a salary advance payment platform used by 3,000+ employees.",
        "Integrated secure payment handling into the request workflow.",
        "Set up CI/CD pipelines for automated delivery.",
      ],
    },
  },
  {
    id: "unetp",
    companyName: "UNETP",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "School and private institution management platform deployed for 1,000+ institutions and 200,000+ users.",
    techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2022-09-30"),
    companyLogoImg: "/projects/unetp/logo.png",
    pagesInfoArr: [
      {
        title: "Institution management",
        description:
          "Administration, staff and student management across a large network of institutions.",
        imgArr: ["/projects/unetp/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "UNETP is a management platform for schools and private institutions, covering administration, staff and student records.",
        "I built it with Next.js on the frontend and Node.js/Express with MongoDB on the backend, at a scale of 1,000+ institutions and 200,000+ users.",
      ],
      bullets: [
        "Built a management platform deployed for 1,000+ institutions and 200,000+ users.",
        "Developed the frontend with Next.js and the backend with Node.js/Express.",
        "Modelled institution, staff and student data in MongoDB.",
      ],
    },
  },
  {
    id: "localira",
    companyName: "Localira",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Fleet management platform with real-time GPS geolocation for 150+ vehicles.",
    techStack: ["React", "Javascript", "Node.js", "Express", "MySQL"],
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-11-30"),
    companyLogoImg: "/projects/localira/logo.png",
    pagesInfoArr: [
      {
        title: "Live fleet tracking",
        description:
          "A map view of the fleet with live vehicle positions and trip history.",
        imgArr: ["/projects/localira/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Localira is a fleet management platform that tracks vehicles in real time and keeps a history of their trips.",
        "I worked on the platform that follows 150+ vehicles, handling live geolocation updates and presenting them on an operational dashboard.",
      ],
      bullets: [
        "Delivered real-time GPS geolocation for a fleet of 150+ vehicles.",
        "Built the tracking dashboard used to monitor vehicle activity.",
      ],
    },
  },
  {
    id: "school-management",
    companyName: "School Management System",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Student and teacher management system built with Laravel, PHP and MySQL, with automated deployment via Git/GitHub.",
    techStack: ["Laravel", "PHP", "MySQL", "Eloquent ORM", "Git", "GitHub"],
    startDate: new Date("2021-10-01"),
    endDate: new Date("2022-02-28"),
    companyLogoImg: "/projects/school-management/logo.png",
    pagesInfoArr: [
      {
        title: "Student & teacher management",
        description:
          "Enrolment, class assignment and teacher records in a single back office.",
        imgArr: ["/projects/school-management/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A management system for students and teachers, covering enrolment, class assignment and staff records.",
        "I built it with Laravel, PHP and MySQL, and set up automated deployment through Git/GitHub.",
      ],
      bullets: [
        "Built a student and teacher management system with Laravel and MySQL.",
        "Automated deployment via Git/GitHub.",
      ],
    },
  },
  {
    id: "chess-multiplayer",
    companyName: "Real-time Multiplayer Chess",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Real-time multiplayer chess game with an Angular frontend, a Spring Boot backend and WebSocket move synchronization.",
    techStack: [
      "Angular",
      "Typescript",
      "Spring Boot",
      "Java",
      "WebSockets",
      "PostgreSQL",
      "Maven",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-05-31"),
    companyLogoImg: "/projects/chess-multiplayer/logo.png",
    pagesInfoArr: [
      {
        title: "Live game board",
        description:
          "Two players share a board that stays in sync move by move over WebSockets.",
        imgArr: ["/projects/chess-multiplayer/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A real-time multiplayer chess game where two players share a board that stays in sync move by move.",
        "The frontend is built with Angular and the backend with Spring Boot, which holds the game logic. Moves travel over WebSockets, and games and move history are persisted in PostgreSQL.",
      ],
      bullets: [
        "Built the frontend with Angular and the backend with Spring Boot.",
        "Synchronized moves in real time over WebSockets.",
        "Persisted games and move history in PostgreSQL.",
        "Managed dependencies and builds with Maven.",
      ],
    },
  },
  {
    id: "foodfrenzy",
    companyName: "FoodFrenzy",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Restaurant management application covering customers, orders and inventory, built with Spring Boot and Thymeleaf.",
    techStack: [
      "Spring Boot",
      "Java",
      "Thymeleaf",
      "Hibernate",
      "MySQL",
      "Maven",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    startDate: new Date("2022-09-01"),
    endDate: new Date("2023-01-31"),
    companyLogoImg: "/projects/foodfrenzy/logo.png",
    pagesInfoArr: [
      {
        title: "Orders & inventory",
        description:
          "Customer records, order taking and stock levels managed from one back office.",
        imgArr: ["/projects/foodfrenzy/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "FoodFrenzy is a full management application for a restaurant, covering customers, orders and inventory.",
        "The frontend is rendered with Thymeleaf, HTML, CSS and JavaScript, while the backend uses Spring Boot with Spring MVC and Spring Data JPA (Hibernate), persisting to MySQL.",
      ],
      bullets: [
        "Built customer, order and inventory management in a single application.",
        "Developed the backend with Spring Boot, Spring MVC and Spring Data JPA (Hibernate).",
        "Rendered server-side views with Thymeleaf and persisted data in MySQL.",
        "Managed builds and dependencies with Maven.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
