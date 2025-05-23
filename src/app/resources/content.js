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
  displayLocation: "Fremont, CA",
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
  headline: <>Senior Software Engineer & Full-Stack Developer</>,
  subline: (
    <>
      I'm Guanggeng, a Senior Software Engineer at{" "}
      <InlineCode>Vibrant Wellness</InlineCode>, leading end-to-end rearchitecture of medical e-commerce platforms.
      <br /> I specialize in migrating legacy systems to modern architectures,
      <br /> optimizing performance, and leading frontend teams to deliver scalable solutions.
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
        expertise includes end-to-end rearchitecture of medical e-commerce platforms,
        migrating from legacy Vue 2 stacks to Next.js/React.js, and achieving significant
        performance improvements. With a strong background in both frontend and mobile
        development, he has successfully improved GTmetrix Performance Grade from D to A,
        reduced LCP by 3.1s to 1.2s, and boosted mobile conversion rates by 22%.
        His approach combines technical excellence with leadership skills, having led
        3-person teams in agile environments while implementing robust testing strategies
        and establishing SEO-optimized architectures.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Vibrant Wellness",
        timeframe: "Jul 2021 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Led the end-to-end rearchitecture of a medical e-commerce platform, migrating from a legacy Vue 2 stack to Next.js/React.js, addressing critical issues in build performance, SEO limitations, and UI scalability and atomic design.
          </>,
          <>
            Improved performance through Next.js SSR/SSG implementation, boosting GTmetrix Performance Grade from D to A, reducing LCP from 3.1s to 1.2s, Fully Loaded Time from 8.4s to 1.3s, page size by 85%, and HTTP requests by 60%, resulting in faster page interaction and seamless browsing.
          </>,
          <>
            Established SEO-optimized architecture using SSR, semantic HTML, and metadata. Elevated Lighthouse SEO scores from 67 to 100 by resolving missing meta descriptions, alt attributes, and crawlability issues, significantly enhancing discoverability with projected organic visibility uplift of 30-40%.
          </>,
          <>
            Developed and executed a robust frontend testing strategy tailored for a high-traffic e-commerce platform. Used Jest for unit testing key business logic, with Vitest, and Playwright for automated end-to-end flows (login, checkout, search). Achieved 85%+ test coverage and cut production issues by 40%.
          </>,
          <>
            Utilized web and data analytics tools including Google Analytics, Mixpanel, and Sentry to systematically track user behavior, feature adoption, and overall stabilization metrics. Improved user experience and guided performance adjustments, resulting in a 25% increase in conversion rate and a 15% reduction in bounce rate. Used Sentry to proactively resolve runtime issues, reducing frontend error rates by 35%.
          </>,
          <>
            Designed and built a modular, reusable UI component library using Tailwind CSS and shadcn/ui, ensuring consistency, scalability, and fast iteration. Worked closely with designers to deliver pixel-perfect interfaces and cohesive user experience.
          </>,
          <>
            Supported responsive design by implementing adaptive layouts and touch-friendly components to fit all screen sizes, resulting in a 22% increase in mobile conversion. Added accessibility enhancements such as semantic HTML, ARIA roles, and keyboard navigation to improve usability and meet WCAG 2.1 guidelines.
          </>,
          <>
            Collaborated with product managers and backend engineers to define clear, actionable development goals and streamline communication. Utilized Jira and Confluence to track progress and align API implementation with business priorities and frontend needs, ensuring well-timed scope and deliverables and strict deadlines.
          </>,
          <>
            Acted as frontend tech lead, leading a 3-person team in an agile environment, overseeing end-to-end frontend design, sprint-based feature delivery, and ongoing performance optimization. Drove key architectural decisions aligned with agile principles, implemented scalable engineering solutions (hydration optimization, lazy loading, route-based code splitting), and enforced code quality via ESLint and Prettier. Documented architecture decisions and coding standards; promoted team alignment and code quality through pair programming and shared learning.
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
            Independently designed and developed a cross-platform mobile app (CFREE Real Estate Exam Prep) for real estate professionals using React Native and Expo. Released to Google Play and the App Store, achieving 100+ users and positive feedback for usability and practical value.
          </>,
          <>
            Developed high-performance UI components using UI Kitten 5, applying custom theming and responsive layout techniques to support consistent UX across devices.
          </>,
          <>
            Implemented key mobile features including In-App Purchases, Push Notifications, and Firebase Authentication, enabling secure user engagement and subscription-based access using React Navigation and local state management with AsyncStorage.
          </>,
        ],
        logo: {
          src: "/images/companies/alexander-anderson-logo.png",
          alt: "Alexander-Anderson Logo",
        },
      },
      {
        company: "KALO Inc.",
        timeframe: "Feb 2020 - Oct 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Built a responsive, single-page marketing dashboard using React.js, Redux, and Material UI. Enhanced mobile usability and reduced page load time to optimize component rendering.
          </>,
          <>
            Deployed the application and Node.js-based API server on Heroku with automated deployment pipelines. Configured environment variables and logging strategies to support staging and production workflows and facilitate easier debugging and release cycles.
          </>,
        ],
        logo: {
          src: "/images/companies/kalo.jpeg",
          alt: "KALO Inc Logo",
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
        timeframe: "May 2020",
        location: "New York, NY",
      },
      {
        name: "Human University of Chinese Medicine",
        description: <>Bachelor of Engineering in Biology - GPA 3.5</>,
        timeframe: "Jun 2018",
        location: "Hunan, China",
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
            JavaScript, TypeScript, Node.js, HTML5, CSS3, Java, Python, SQL, PHP
          </>
        ),
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: (
          <>
            React.js, Vue.js, Angular, React Native, Redux, Next.js
          </>
        ),
        images: [],
      },
      {
        title: "Tools & Others",
        description: (
          <>
            Express, RESTful APIs, Jest, Tailwind CSS, Mixpanel, Google Analytics 4, Sentry, Playwright
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
        "A comprehensive guide to designing a scalable star rating widget system. Learn about component architecture, state management, API design, and how to handle edge cases in a distributed environment.",
      date: "April 29, 2024",
      image: "/images/articles/img2.jpg",
      link: "/articles/1",
      tags: ["System Design", "Architecture"],
    },
    {
      id: 2,
      title: "Behavioral Interview Questions for Frontend Engineers",
      description:
        "A comprehensive collection of behavioral interview questions that are commonly asked in technical interviews. Learn how to prepare for these questions and answer them confidently with the STAR method.",
      date: "May 1, 2024",
      image: "/images/articles/img3.jpg",
      link: "/articles/2",
      tags: ["Behavioral Interview", "Frontend Interview"],
    },
    {
      id: 3,
      title: "Frontend Learning Roadmap 2024",
      description:
        "A complete guide to becoming a frontend developer in 2024. This roadmap covers HTML/CSS fundamentals, JavaScript ES6+, React ecosystem, build tools, testing, and modern deployment strategies. Perfect for beginners and developers looking to update their skills.",
      date: "March 20, 2024",
      image: "/images/articles/img4.jpg",
      link: "/articles/3",
      tags: ["Frontend", "Learning Path", "Career"],
    },
    {
      id: 4,
      title: "React Hooks Deep Dive: useState, useEffect, and Custom Hooks",
      description:
        "Master React Hooks with this comprehensive guide covering useState, useEffect, useContext, and how to create powerful custom hooks. Learn common patterns, best practices, and performance optimization techniques.",
      date: "March 15, 2024",
      image: "/images/articles/img-01.jpg",
      link: "/articles/4",
      tags: ["React", "Hooks", "JavaScript"],
    },
    {
      id: 5,
      title: "Technical Interview Preparation: Frontend Focus",
      description:
        "Complete guide to acing frontend technical interviews. Covers JavaScript fundamentals, React concepts, algorithm questions, system design basics, and hands-on coding challenges with real examples and solutions.",
      date: "February 28, 2024",
      image: "/images/articles/img-02.jpg",
      link: "/articles/5",
      tags: ["Technical Interview", "Frontend", "JavaScript"],
    },
    {
      id: 6,
      title: "System Design for Frontend Engineers",
      description:
        "Learn system design concepts specifically for frontend engineers. Covers CDN strategy, caching mechanisms, micro-frontend architecture, performance monitoring, and scalable component design patterns.",
      date: "February 20, 2024",
      image: "/images/articles/img-03.jpg",
      link: "/articles/6",
      tags: ["System Design", "Frontend Architecture", "Performance"],
    },
    {
      id: 7,
      title: "Vue 2 to React Migration: Lessons Learned",
      description:
        "Real-world experience migrating a large-scale application from Vue 2 to React. Learn about component mapping, state management migration, routing differences, and strategies to minimize downtime during the transition.",
      date: "February 10, 2024",
      image: "/images/articles/img-08.jpg",
      link: "/articles/7",
      tags: ["React", "Vue", "Migration", "Architecture"],
    },
    {
      id: 8,
      title: "Modern CSS: Grid, Flexbox, and Component-First Design",
      description:
        "Master modern CSS with Grid and Flexbox layouts. Learn how to build responsive designs, implement component-first methodologies, and optimize CSS for performance in large applications.",
      date: "January 25, 2024",
      image: "/images/articles/img-09.jpg",
      link: "/articles/8",
      tags: ["CSS", "Frontend", "Responsive Design"],
    },
    {
      id: 9,
      title: "JavaScript Performance Optimization Techniques",
      description:
        "Deep dive into JavaScript performance optimization. Covers memory management, event loop understanding, code splitting, lazy loading, and profiling techniques to build faster web applications.",
      date: "January 15, 2024",
      image: "/images/articles/img-14.jpg",
      link: "/articles/9",
      tags: ["JavaScript", "Performance", "Optimization"],
    },
    {
      id: 10,
      title: "Building a Component Library with React and Storybook",
      description:
        "Step-by-step guide to creating a scalable component library. Learn about design systems, component API design, documentation with Storybook, testing strategies, and publishing to npm.",
      date: "December 20, 2023",
      image: "/images/articles/img1.jpg",
      link: "/articles/10",
      tags: ["React", "Component Library", "Storybook"],
    },
    {
      id: 11,
      title: "Next.js Performance Optimization: SSR, SSG, and Beyond",
      description:
        "Comprehensive guide to Next.js performance optimization. Covers Server-Side Rendering, Static Site Generation, Image optimization, Core Web Vitals improvement, and deployment best practices.",
      date: "December 10, 2023",
      image: "/images/articles/img2.jpg",
      link: "/articles/11",
      tags: ["Next.js", "Performance", "SSR", "SSG"],
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

