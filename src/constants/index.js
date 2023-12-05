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
    source_code_link: "https://github.com/VenusWhisperer/react-bnb.git",
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
    source_code_link: "https://github.com/VenusWhisperer/tellman.git",
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
    source_code_link: "https://github.com/VenusWhisperer/Weirdos-NFT.git",
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
    source_code_link: "https://github.com/VenusWhisperer/ETHCinemaNation.git",
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
    source_code_link: "https://github.com/VenusWhisperer/nft-markgetplace-doingud.git",
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
    source_code_link: "https://github.com/VenusWhisperer/view-web-app-client.git",
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
    source_code_link: "https://github.com/VenusWhisperer/appstore-react.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
