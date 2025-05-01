import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Guanggeng",
  lastName: "Yang",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Software Engineer",
  avatar: "/images/avatar.png",
  location: "America/Los_Angeles",
  displayLocation: "Bay Area, CA",
  languages: ["English", "Mandarin"],
};

const newsletter = {
  display: true,
  title: <>Send me a message, I'll get back to you as soon as possible.</>,
  description: (
    <>
      I'm always looking for new opportunities and challenges. If you have any
      questions or would like to discuss a project, please don't hesitate to
      contact me.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/younggg96",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/guanggengyang/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:yangguanggeng960123@gmail.com",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/young_gggy",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Senior Software Engineer & Full-Stack Architect</>,
  subline: (
    <>
      I'm Guanggeng, a Senior Software Engineer at{" "}
      <InlineCode>Vibrant Wellness</InlineCode>, specializing in
      <br /> scalable architecture design and enterprise-level application
      development. I lead technical transformations
      <br /> and mentor teams while building innovative solutions.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.displayLocation}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Guanggeng is a Fremont-based Senior Software Engineer with a passion for
        building scalable web applications and leading technical migrations. His
        work spans frontend development, system architecture, and the
        intersection of performance optimization and user experience. With
        expertise in modern JavaScript frameworks and cloud technologies, he
        specializes in transforming legacy systems into robust, maintainable
        solutions. His approach combines technical excellence with a strong
        focus on team collaboration and knowledge sharing, ensuring sustainable
        growth and innovation in every project.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Vibrant Wellness",
        timeframe: "May 2024 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Spearheaded the migration from a legacy Vue 2 codebase to Next.js,
            React, and Tailwind CSS, resolving issues like slow build
            performance, SEO limitations, and UI inconsistency, while
            significantly improving code maintainability and team efficiency
            through a modern, component-driven architecture.
          </>,
          <>
            Leveraged Next.js SSK/SSG to enhance SEO and product visibility,
            enabling faster indexing of product page; combined with performance
            optimizations such as above-the-fold content prioritization, dynamic
            rendering, and code splitting.
          </>,
          <>
            Acted as frontend tech lead throughout the migration process,
            overseeing architecture planning and implementation, mentoring
            junior developers, and establishing code quality standards through
            code reviews and pair programming.
          </>,
          <>
            Established frontend development standards and a centralized
            knowledge base by defining reusable patterns, automating code
            quality enforcement, and consolidating documentation for improved
            efficiency and cross-team collaboration.
          </>,
        ],
        logo: {
          src: "/images/companies/vibrant-wellness-logo.png",
          alt: "Vibrant Wellness Logo",
        },
      },
      {
        company: "Vibrant Wellness",
        timeframe: "Jul 2021 - May 2024",
        role: "Frontend Engineer",
        achievements: [
          <>
            Developed a scalable e-commerce platform (vibrant-wellness.com) for
            the medical industry, with a strong focus on responsive design,
            cross-browser compatibility, and performance optimization—delivering
            a seamless user experience across devices
          </>,
          <>
            Engineered web and mobile-compatible interfaces using Vue 2, and
            implemented Vuex for centralized state management, resulting in
            improved code maintainability and streamlined feature development.
          </>,
          <>
            Designed and implemented a Micro-Frontend architecture using
            JavaScript and Webpack, enabling modular development across teams
            and reducing code duplication by approximately 10%.
          </>,
          <>
            Built a flexible SCSS theming system to support white-label
            storefronts, aligning with diverse brand requirements; collaborated
            closely with UX designers to maintain visual consistency and meet
            performance standards.
          </>,
          <>
            Operated within a fast-paced Agile environment, contributing to
            sprint planning, daily standups, and backlog refinement using JIRA,
            ensuring timely delivery and continuous product iteration。
          </>,
        ],
        logo: {
          src: "/images/companies/vibrant-wellness-logo.png",
          alt: "Vibrant Wellness Logo",
        },
      },
      {
        company: "Alexander-Anderson Real Estate Group",
        timeframe: "Oct 2020 - Sep 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Designed and developed a cross-platform mobile application (CFREE
            Real Estate Exam Prep) from scratch using React Native and Expo,
            successfully deployed to Google Play and Apple App Store, leading to
            a measurable increase in user engagement.
          </>,
          <>
            Built custom UI components with UI Kitten 5, improving rendering
            performance and delivering a smoother, more responsive user
            experience.
          </>,
          <>
            Implemented core app functionalities including In-app Purchases,
            Push Notifications, Firebase Authentication, and subscription
            management, integrating both frontend and backend technologies to
            support business logic and user flows.
          </>,
          <>
            Developed and maintained an e-commerce website (recareercenter.com)
            for real estate education using WordPress and PHP, enabling course
            purchases, content updates, and student access management.
          </>,
        ],
        logo: {
          src: "/images/companies/alexander-anderson-logo.png",
          alt: "Alexander-Anderson Logo",
        },
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Pace University, Seidenberg School of Computer Science and Information Systems",
        description: <>Master of Science in Computer Science - GPA 3.8</>,
      },
      {
        name: "Human University of Chinese Medicine",
        description: <>Bachelor of Engineering in Biology - GPA 3.5</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <>
            JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL, Python, Java, PHP,
            Node.js
          </>
        ),
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: (
          <>
            React, Vue.js, Angular, React Native, Redux, Next.js, Prisma,
            Nuxt.js
          </>
        ),
        images: [],
      },
      {
        title: "Tools & Others",
        description: (
          <>
            Git, Firebase, MySQL, Express, RESTful APIs, Axios, Postman,
            Webpack, Vite, Babel, Jest, Tailwind CSS, Less/Sass, Agile, OOP,
            Figma, Adobe Photoshop, Google Analytics
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about software engineering and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Software engineering projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "Gallery",
  description: `A collection of images from ${person.name}`,
  images: [
    {
      src: "/images/gallery/img1.jpg",
      alt: "Architecture design showcase",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img2.jpg",
      alt: "Modern UI components",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img3.jpg",
      alt: "Web development project",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img4.jpg",
      alt: "Mobile responsive design",
      orientation: "vertical"
    }
  ]
};

const articles = {
  label: "Articles",
  title: "Tech Articles",
  description:
    "A collection of technical articles, tutorials and insights about web development, architecture design and software engineering",
  data: [
    {
      id: 0,
      title: "Building Scalable React Applications",
      description:
        "Learn how to architect large-scale React applications with best practices for state management, component organization, and performance optimization. This article covers advanced patterns and techniques for building maintainable React codebases.",
      date: "May 15, 2024",
      image: "/images/articles/img1.jpg",
      link: "/articles/0",
      tags: ["React", "Architecture", "Performance"],
    },
    {
      id: 1,
      title: "System Design: Designing the StarWidget",
      description:
        "A comprehensive guide to migrating your Vue 2 application to Next.js, including strategies for handling state, routing, and server-side rendering. Learn how to plan and execute a phased migration while maintaining application functionality.",
      date: "April 29, 2025",
      image: "/images/articles/img2.jpg",
      link: "/articles/1",
      tags: ["System Design"],
    },
    {
      id: 2,
      title: "Behavioral Interview Questions",
      description:
        "A collection of behavioral interview questions that are commonly asked in technical interviews. Learn how to prepare for these questions and answer them confidently.",
      date: "May 1, 2025",
      image: "/images/articles/img3.jpg",
      link: "/articles/2",
      tags: ["Behavioral Interview", "Frontend Interview"],
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  articles,
};
