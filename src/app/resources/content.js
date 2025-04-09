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
      I'm always looking for new opportunities and challenges. If you have any questions or would like to discuss a project, please don't hesitate to contact me.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/younggeng",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/guanggeng-yang",
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
  headline: <>Senior Software Engineer and System Architect</>,
  subline: (
    <>
      I'm Guanggeng, a Senior Software Engineer at <InlineCode>Vibrant Wellness</InlineCode>, where I craft scalable
      <br /> web applications and lead technical migrations. After hours, I build my own projects.
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
        Guanggeng is a Fremont-based Senior Software Engineer with a passion for building scalable web applications 
        and leading technical migrations. His work spans frontend development, system architecture, and the intersection 
        of performance optimization and user experience.
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
            Spearheaded the migration from a legacy Vue 2 codebase to Next.js, React, and Tailwind CSS, resolving issues 
            like slow build performance, SEO limitations, and UI inconsistency, while significantly improving code maintainability and
            team efficiency through a modern, component-driven architecture.
          </>,
          <>
            Leveraged Next.js SSK/SSG to enhance SEO and product visibility, enabling faster indexing of product page; combined 
            with performance optimizations such as above-the-fold content prioritization, dynamic rendering, and code splitting.
          </>,
          <>
            Acted as frontend tech lead throughout the migration process, overseeing architecture planning and implementation,
            mentoring junior developers, and establishing code quality standards through code reviews and pair programming.
          </>,
          <>
            Established frontend development standards and a centralized knowledge base by defining reusable patterns,
            automating code quality enforcement, and consolidating documentation for improved efficiency and cross-team collaboration.
          </>,
        ],
        images: [],
      },
      {
        company: "Alexander-Anderson Real Estate Group",
        timeframe: "Oct 2020 - Sep 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Designed and developed a cross-platform mobile application (CFREE Real Estate Exam Prep) from scratch using
            React Native and Expo, successfully deployed to Google Play and Apple App Store, leading to a measurable
            increase in user engagement.
          </>,
          <>
            Built custom UI components with UI Kitten 5, improving rendering performance and delivering a smoother, more responsive
            user experience.
          </>,
          <>
            Implemented core app functionalities including In-app Purchases, Push Notifications, Firebase Authentication, and
            subscription management, integrating both frontend and backend technologies to support business logic and user flows.
          </>,
          <>
            Developed and maintained an e-commerce website (recareercenter.com) for real estate education using WordPress and PHP,
            enabling course purchases, content updates, and student access management.
          </>,
        ],
        images: [],
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
        description: <>JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL, Python, Java, PHP, Node.js</>,
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: <>React, Vue.js, Angular, React Native, Redux, Next.js, Prisma, Nuxt.js</>,
        images: [],
      },
      {
        title: "Tools & Others",
        description: <>Git, Firebase, MySQL, Express, RESTful APIs, Axios, Postman, Webpack, Vite, Babel, Jest, Tailwind CSS, Less/Sass, Agile, OOP, Figma, Adobe Photoshop, Google Analytics</>,
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
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [], // 每个图片对象应该包含 { src: string; alt: string; orientation: "horizontal" | "vertical" }
};

export { person, social, newsletter, home, about, blog, work, gallery };
