import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ayush Rawal",
  initials: "AR",
  url: "https://github.com/genius-ayush",
  location: "Indore, India",
  locationLink: "https://maps.app.goo.gl/GnZrDRnD127GEGJF7",
  description:
    "Tech Enthusiast turned Software Engineer . I love building things and helping people. Very active on Twitter.",
  summary:
    "I’m a passionate [pre-final year undergrad](#education) with a deep love for coding and technology. My journey has led me to develop a strong foundation in [Web development, DevOps, and the emerging world of Web3](#education). I thrive on building innovative [products](#projects) and sharing my insights through blogging. Always eager to expand my skills and tackle new challenges, I’m actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it’s through creating seamless web experiences or exploring the future of decentralized applications, I’m excited to contribute to the tech landscape and grow alongside it.",
  avatarUrl: "/ayush.jpeg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Git",
    "MongoDB",
    "Postgres",
    "Docker",
    // "Kubernetes",
    "Linux",
    // "GitHub Actions",
    "Prisma",
    // "Drizzle",
    "MonoRepo",
    // "WebSocket",
    // "WebRTC",
    // "Kafka",
    // "Redis",
    // "GraphQL",
    "Nginx",
    "AWS",
    // "CI/CD",
    // "Grafana",
    // "Prometheus",
    // "OpenAPI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://hashnode.com/@ayushrawal01",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "ayushsanjayrawal@gmail.com",
    tel: "+91 7999784071",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/genius-ayush",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ayushrawal123/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ayushh_rawal_",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://x.com/ayushh_rawal_",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ayushsanjayrawal@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance Web Developer",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/akrati.png",
      start: "January 2024",
      end: "July 2024",
      description:
        "As a freelancer from January 2024 to July 2024, I designed and developed a fashion designer’s website using Next.js and Tailwind CSS. The site featured a responsive, visually appealing design, showcased the designer's portfolio through interactive layouts, ensured optimal performance and SEO-friendly structure, and provided a user-friendly interface for seamless navigation and client interaction.",
    },
    {
      company: "SquaredLabs",
      badges: [],
      href: "https://squaredlabs.io/",
      location: "Remote",
      title: "Full Stack developer",
      logoUrl: "/Intern.png",
      start: "July 2024",
      end: "Present",
      description:"Designed and developed a responsive, visually consistent landing page using Next.js, React.js, TypeScript, and Tailwind CSS, optimizing components for performance and reusability. Expanded the project into a full-stack application by integrating a Node.js/Express backend, implementing Zod for schema validation, and utilizing ShadCN UI for a modern, accessible UI. Ensured a smooth, error-free launch through thorough debugging, API optimizations, and collaboration with the design team.",
    },
  ],
  education: [
    {
      school: "100xDevs",
      href: "https://app.100xdevs.com",
      degree: "Full Stack Web Development, DevOps & Web3 Bootcamp",
      logoUrl: "/100xDevs.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Medicaps University",
      href: "https://www.medicaps.ac.in/",
      degree: "Bachelor's Degree of Engineering",
      logoUrl: "/collage.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "CareerPitch",
      href: "https://career-pitch.vercel.app/",
      dates: "march 2025",
      active: true,
      description:
        "Built Mizrebel, a full-stack e-commerce platform for a fashion brand using React.js, Next.js, and Tailwind CSS for a sleek UI. Powered by a Node.js/Express backend with PostgreSQL & Prisma for efficient data handling. Integrated AWS (S3, EC2, CloudFront) for scalable hosting and storage. Enhanced UX with ShadCN UI & Framer Motion and ensured type safety with TypeScript & Zod.",
      technologies: [
        "Next.js",
        "Typescript",
        "Postgress",
        "Prisma",
        "Zod" , 
        "NextAuth"  ,
        "TailwindCSS",
        "SchadCn",
        "FramerMotion",
      ],
      links: [
        {
          type: "Website",
          href: "https://career-pitch.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/genius-ayush/careerPitch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/careerPitch.png",
      video: "",
    },
    {
      title: "mizrebel.com",
      href: "http://www.mizrebel.com",
      dates: "Feb 2025",
      active: true,
      description:
        "Built Mizrebel, a full-stack e-commerce platform for a fashion brand using React.js, Next.js, and Tailwind CSS for a sleek UI. Powered by a Node.js/Express backend with PostgreSQL & Prisma for efficient data handling. Integrated AWS (S3, EC2, CloudFront) for scalable hosting and storage. Enhanced UX with ShadCN UI & Framer Motion and ensured type safety with TypeScript & Zod.",
      technologies: [
        "React.js",
        "Express.js",
        "Typescript",
        "Postgress",
        "Prisma",
        "Zod" , 
        "AWS"  ,
        "S3" , 
        "EC2" , 
        "CloudeFront" ,
        "TailwindCSS",
        "SchadCn",
        "FramerMotion",
      ],
      links: [
        {
          type: "Website",
          href: "Mizrebel.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/genius-ayush/mizrebel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mizrebel.png",
      video: "",
    },
    {
      title: "Dev Diaries",
      href: "https://dev-diaries-one.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "A comprehensive blog platform with a robust backend and an interactive frontend, designed to handle secure user authentication, dynamic blog management, and responsive user interactions.",
      technologies: [
        "React.js",
        "Typescript",
        "MongoDb",
        // "Prisma",
        "TailwindCSS",
        "FramerMotion",
      ],
      links: [
        {
          type: "Website",
          href: "https://dev-diaries-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/genius-ayush/DevDiaries",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project2.png",
      video: "",
    },
    {
      title: "Quantstruct Landing Page",
      href: "https://quantstructt.vercel.app/",
      dates: "December 2024",
      active: true,
      description:
        "Developed a stunning landing page, built with Next.js, React.js, Tailwind CSS,SchadCn and Framer Motion, offers a highly responsive and visually engaging experience. Designed with a strong focus on aesthetics and fluid animations, it provides a seamless user interface across all devices, ensuring a captivating first impression for visitors.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://quantstructt.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/genius-ayush/Quantstruct",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quantstruct.png",
      video: "",
    },
    {
      title: "AI Landing Page",
      href: "https://alex-gilt-one.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Developed a stunning landing page, built with Next.js, React.js, Tailwind CSS, and Framer Motion, offers a highly responsive and visually engaging experience. Designed with a strong focus on aesthetics and fluid animations, it provides a seamless user interface across all devices, ensuring a captivating first impression for visitors.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://alex-gilt-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/genius-ayush/Alex",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project1.png",
      video: "",
    },
    
    {
      title: "CodeForge",
      href: "https://codeforge-delta.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Developed a stunning landing page, built with Next.js, React.js, Tailwind CSS, and Framer Motion, offers a highly responsive and visually engaging experience. Designed with a strong focus on aesthetics and fluid animations, it provides a seamless user interface across all devices, ensuring a captivating first impression for visitors.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://codeforge-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/genius-ayush/codeforge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project3.png",
      video: "",
    },
    {
      title: "Portfolio",
      href: "",
      dates: "September 2024",
      active: true,
      description:
        "Developed an amazing Portfolio to showase my work to potentiol recruiters. I used latest web desiging techniques like [TailwindCSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/) to make it look good and [Next.js](https://nextjs.org/) to make it fast.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "SIH Hackathon",
      dates: "September 2024 - Present",
      location: "Indore, India",
      description:
        "Developed a web application that helps in conducting small task and have transaction of that workdone in crypto",
      image: "Smart-India-Hackathon-2023.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/genius-ayush/taskBounty",
        },
      ],
    },
  ],
} as const;
