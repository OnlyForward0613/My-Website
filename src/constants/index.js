import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import {
  cars,
  hotel,
  nft_marketplace,
  nft1,
  nft_minting,
  shop,
  translate,
  online,
  car,
  canvan, 
  mockup
} from "../assets/projects";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "CMS Developer",
    icon: creator,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer, Kiandra",
    company_name: "Remote",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March July - Feb 2017",
    points: [
      "Built frontend web application with React.js",
      "Analyzed client needs and design software solution",
      "Analyzed client needs and design software solution",
      "Built REST API with Node.js, Express.js",
      "Worked with other teams for debugging",
      "Conducted A/B Testing to identify bugs and UI improvements",
      "Prototyped an average of 10 new product features in one year",
      "Launched 6 websites including 2 large business websites"
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Remote",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2017 - Aug 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer, Appello Software",
    company_name: "Remote",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2018 - Jan 2021",
    points: [
      "Worked with an agile team of 12 members and provided end-toend solutions for clients• Designed and implement new features using React.js",
      "Train 4 people the front-end basics and helped them developfurther",
      "Developed 20 responsive modern websites for clients in a variety of industries mostly in e-commerce",
      "Presented and conveyed ideas and designs with 4+ technical teams and 12+ business partners.",
      "Developed 40+ applications following Agile product development methodologies.",
      "Designed, built and automated data flows to save 10+ hours of tedious work per week.",
      "Wrote front-end code, back-end code, integrated 4+ with frameworks andAPIs, and utilized multiple CLI tools and configuration GUI's.Led architecture, design, and development of 30+ new features."
    ],
  },
  {
    title: "Full stack developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Designed and implemented user-friendly web applications using Next, React, Angular, Vue and Node.js",
      "Developed back-end systems using Python and Node.js,integrating with MongoDB and MySQL databases",
      "Optimized the ERP platform for scalability and performance,using techniques such as server-side rendering and caching toimprove load times.",
      "Developed a robust testing framework, using Jest and Enzyme, toensure the platform was functioning as expected and to catchany potential bugs before they reached the end-user.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Shop",
    description:
      "React based platfrom for company to sell cars.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cars,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hotel booking platform",
    description:
      "This is online hetel booking platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphQL",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Clothes Shop",
    description:
      "Supermarket for selling clothes for people.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/",
  },
  {
    name: "Translation Platform",
    description:
      "Language translate for a lot of contries",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: translate,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online learning",
    description:
      "Online learning including English, Developing, Game",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: online,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mockup Design",
    description:
      "Smart phone mockup design using Figma, and responsive UI design",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: mockup,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cars Platform",
    description:
      "Online car shops",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "graphQL",
        color: "green-text-gradient",
      },
      {
        name: "NestJS",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project Management",
    description:
      "Platform for dev management",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: canvan,
    source_code_link: "https://github.com/",
  },
  {
    name: "NFT Minting",
    description:
      "NFT minting for NFT marketplace",
    tags: [
      {
        name: "NFT",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "reactJS",
        color: "pink-text-gradient",
      },
    ],
    image: nft_minting,
    source_code_link: "https://github.com/",
  },
  {
    name: "NFT Marketplace",
    description:
      "NFT marketplace for people.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "NFT",
        color: "green-text-gradient",
      },
      {
        name: "nextJS",
        color: "pink-text-gradient",
      },
    ],
    image: nft_marketplace,
    source_code_link: "https://github.com/",
  },
  {
    name: "NFT Marketplace",
    description:
      "NFT marketplace website for users",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nft1,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
