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
  arc_company,
  upwork_company
} from "../assets";



import {
  nft0, nft1, nft2, tellman, gallery, bnb, appstore
} from "../assets/works";

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
    title: "Full Stack developer, Freelancer",
    company_name: "Remote",
    icon: upwork_company,
    iconBg: "#383E56",
    date: "April 2014 - Dec 2014",
    points: [
      "Developed several mobile and web applications, including expertise in progamming languages like Javascript, Python and Java.",
      "Daily maintenance of code, debugging issues, and solving client's problems.",
      "Launched 6 websites including large business websites."
    ],
  },
  {
    title: "Frontend developer",
    company_name: "ARC Document Solutions (Pasadena, CA)",
    icon: arc_company,
    iconBg: "#E6DEDD",
    date: "Jan 2015 - May 2016",
    points: [
      "Developed and implemented UI designs and optimized them for various devices using HTML, CSS, and JavaScript.",
      "Developed and maintained internal web applications and tools that improve the efficiency and productivity of business operations .",
      "Managed version control using Git and implemented continuous integration and delivery practices to streamline the development process .",
      "Worked with third-party APIs, such as payment gateways, social media platforms, and email marketing services, to integrate external services into web applications .",
      "Conducted performance optimization, including reducing load times and enhancing website speed .",
      "Developed and implemented accessibility strategies to ensure web applications are accessible to all users, including those with disabilities ."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "XWP (Remote)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2016 - Jan 2018",
    points: [
      "Implemented enhanced security measures on WordPress websites, including firewalls, two-factor authentication, and SSL certificates. These measures helped protect websites from security vulnerabilities and hacking attempts.",
      "Optimized the performance of WordPress websites, including implementing caching mechanisms, optimizing database queries, and minimizing page load times. This helped improve the overall user experience of websites and contributed to higher search engine rankings.",
      "Collaborated with cross-functional teams, including designers, project managers, and other developers, to ensure successful project delivery and exceed client expectations. This involved communication and coordination throughout the project life cycle, including planning, development, testing, and deployment.",
      "Developed 40+ applications following Agile product development methodologies.",
    ],
  },
  {
    title: "Full stack developer",
    company_name: "InvoZone (Toronto, Canada)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2018 - July 2021",
    points: [
      "Designed and developed RESTful APIs using Python, Flask, and Django to enable seamless communication between front-end and backend applications.",
      "Created high-performance Python scripts for data manipulation and analytics tasks, and optimized data storage and retrieval strategies.",
      "Built and optimized dynamic and visually appealing user interfaces (UI) using MERN, MEAN, or MEVN technologies (MongoDB, Express.js, React/Angular/Vue.js, and Node.js).",
      "Developed well-structured and optimized databases on MySQL, PostgreSQL, and MongoDB while designing optimized data models and database schemas.",
      "Utilized containerization and microservices such as Kubernetes, Docker, and AWS Elastic Beanstalk to deploy production-level applications."
    ],
  },
  {
    title: "Full stack developer",
    company_name: "TEKHQS (Remote)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2018 - July 2021",
    points: [
      "Designed and developed blockchain-based solutions using platforms such as Ethereum, Hyperledger Fabric, and Corda.",
      "Developed smart contracts in Solidity and implemented their deployment and testing on blockchain networks.",
      "Built decentralized applications (DApps) using blockchain technology.Integrated blockchain solutions into existing web and mobile applications, creating interfaces that displayed the data efficiently for stakeholders.",
      "Developed proof-of-concept and developed minimum viable products (MVPs) to analyze the feasibility of blockchain solutions.",
      "Designed and developed decentralized exchanges (DEX) using technologies such as 0x project, Kyber Network, and Airswap."
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
    name: "BNB Online platform",
    description:
      "Online BNB platform for room offering",
    tags: [
      {
        name: "NEXT",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },
      {
        name: "Tainlwind",
        color: "pink-text-gradient",
      },
    ],
    image: bnb,
    to: 'https://wind-bnb-sepia.vercel.app/',
    source_code_link: "https://github.com/jacksonmoridev0507/bnb-onlinePlatform",
  },
  {
    name: "Platform for a small team",
    description:
      "The website for small team and collorboration.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image: tellman,
    to: 'https://tellmann.co.za/',
    source_code_link: "https://github.com/jacksonmoridev0507/next.js-chat-love",
  },
  {
    name: "NFT Marketplace and Gallery",
    description:
      "NFTs—Unique Digital Collectibles and Minting, and gallery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ERC721",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nft0,
    to: 'https://weirdos-nft.netlify.app/',
    source_code_link: "https://github.com/jacksonmoridev0507/nft_end_user",
  },
  {
    name: "National Cinema Voting System",
    description:
      "A decentralized voting platform for movies.",
    tags: [
      {
        name: "ERC721",
        color: "blue-text-gradient",
      },
      {
        name: "NEXT",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nft1,
    to: 'https://ethcinemanation.vercel.app/',
    source_code_link: "https://github.com/jacksonmoridev0507/voting_system",
  },
  {
    name: "NFT Marketplace for end users",
    description:
      "NFT marketplace using ERC721 and starter project.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "ERC721",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nft2,
    to: 'https://nft-marketplace-doingud.vercel.app/',
    source_code_link: "https://github.com/jacksonmoridev0507/nft_end_user",
  },
  {
    name: "Gallery site for several topics",
    description:
      "A proof of concept for a video streaming app.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "NUI",
        color: "pink-text-gradient",
      },
    ],
    image: gallery,
    to: 'https://view-web-app-client.vercel.app/',
    source_code_link: "https://github.com/jacksonmoridev0507/view-web-app-client",
  },
  {
    name: "App store",
    description:
      "App store for your favorite products.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NEST",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: appstore,
    to: 'https://apps.apple.com/us/app/favorite-photos-widget/id1589994536',
    source_code_link: "https://github.com/jacksonmoridev0507/app_store",
  },
];

export { services, technologies, experiences, testimonials, projects };
