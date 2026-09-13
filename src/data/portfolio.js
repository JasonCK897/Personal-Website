/**
 * Portfolio Data - Jason Christov Kesuma
 * Multi-disciplinary Informatics Engineering Portfolio:
 * Full-Stack Web, Embedded Systems, Machine Learning & HMI, and Web3.
 */

export const personalData = {
  name: "Jason Christov Kesuma",
  role: "Informatics Engineering Student & Developer",
  tagline: "Full-Stack Web • Embedded Systems • Intelligent Computing & HMI",
  bio: "Undergraduate Informatics Engineering student at Universitas Ma Chung (Malang, Indonesia). Passionate about crafting modern web applications, low-level microcontroller systems, and assistive machine learning research at the Human-Machine Interaction (HMI) lab.",
  location: "Malang, Indonesia",
  avatar: "/avatar.svg",
  cvUrl: "/cv-jason-christov-kesuma.pdf",
  
  domains: [
    { name: "Web Engineering", count: "Full-Stack & Frontend", icon: "Globe" },
    { name: "Embedded Systems", count: "STM32 & ESP32 IoT", icon: "Cpu" },
    { name: "Machine Learning & HMI", count: "Assistive Tech & Research", icon: "Brain" },
    { name: "Web3 & Smart Contracts", count: "Sui Move Ecosystem", icon: "Layers" },
  ],

  social: {
    email: "mailto:jasonchristov@gmail.com",
    linkedin: "https://www.linkedin.com/in/jason-christov-kesuma-a2a19a36b/",
    github: "https://github.com/JasonCK897",
    instagram: "https://www.instagram.com/j._chrisk/",
  }
};

export const educationData = {
  institution: "Universitas Ma Chung",
  location: "Malang, Indonesia",
  degree: "Bachelor of Informatics Engineering",
  period: "2023 - 2027 (Expected)",
  gpa: "3.49 / 4.00",
  highlights: [
    "Core Coursework: Web Programming, Data Structures, Computer Architecture, Low-Level Systems, and Machine Learning.",
    "Academic Research: Active member of the Human-Machine Interaction (HMI) Study Center.",
    "Leadership: Student association event coordinator and inter-campus academic exchange lead."
  ]
};

export const skillsData = {
  categories: [
    {
      title: "Web & Software Engineering",
      skills: ["HTML5", "CSS3 / Tailwind", "JavaScript (ES6+)", "React.js", "PHP", "MySQL", "REST APIs"]
    },
    {
      title: "Systems & Embedded Programming",
      skills: ["C/C++", "STM32 Microcontrollers", "ESP32", "IoT Telemetry", "C# / .NET", "FreeRTOS basics"]
    },
    {
      title: "Machine Learning & Research Tools",
      skills: ["Python", "Data Analysis", "Sensor Processing", "HMI Interfaces", "Git / GitHub", "PHPMyAdmin"]
    },
    {
      title: "Core Methodologies",
      skills: ["Problem Solving", "System Debugging", "Project Management", "Technical Documentation", "Team Leadership"]
    }
  ]
};

export const experienceData = [
  {
    id: "exp-1",
    role: "Research Assistant",
    organization: "Human-Machine Interaction (HMI) Study Center",
    location: "Malang, Indonesia",
    period: "Feb 2026 - Jul 2026",
    tag: "Research & AI/HMI",
    description: "Conducted inclusive technology research creating assistive devices for disabled users: Disability Mouse, Sign Language Glove, and voice/gesture signal acquisition.",
    points: [
      "Assisted in hardware sensor testing and signal acquisition algorithms for assistive interfaces.",
      "Collaborated with faculty researchers on paper preparation and hardware-software integration."
    ]
  },
  {
    id: "exp-2",
    role: "Head of Student Exchange Program (IF-JOURNEY)",
    organization: "Informatics Student Association",
    location: "Surabaya, Indonesia",
    period: "Jun 2026",
    tag: "Leadership & Management",
    description: "Led a 12-member committee coordinating a major academic exchange with Universitas Surabaya, attended by 50 participants.",
    points: [
      "Directed end-to-end logistics, schedule synchronization, and bilateral technical workshops.",
      "Facilitated tech discussions on university curricula and undergraduate research projects."
    ]
  },
  {
    id: "exp-3",
    role: "Organizing Committee Member",
    organization: "Ma Chung Festival 2025",
    location: "Malang, Indonesia",
    period: "Aug 2025 - Feb 2026",
    tag: "Event Operations",
    description: "Managed technical field operations and coordination between faculties during the annual university convocation festival.",
    points: [
      "Coordinated with university administrators to ensure seamless operational execution."
    ]
  }
];

// Diverse Projects: Web Programming, Embedded Systems, Machine Learning/HMI, and Web3
export const projectsData = [
  {
    id: "proj-aiditech",
    title: "AiDiTech Research Portal & CMS",
    category: "web",
    badge: "Web Development",
    role: "Web Developer",
    period: "Apr 2026 - Jun 2026",
    description: "Official web platform for Universitas Ma Chung's AI research lab. Features an indexed scientific journal repository, relational database architecture, and an admin content management system.",
    tags: ["PHP", "MySQL", "JavaScript", "Responsive UI", "CMS"],
    metrics: "Indexed Journal DB • Admin CMS • Responsive Design",
    repoUrl: "https://github.com/JasonCK897",
    demoUrl: "",
    image: "/projects/aiditech.svg"
  },
  {
    id: "proj-firmware",
    title: "Project Shasta: Noise Immunity Suite",
    category: "embedded",
    badge: "Embedded & Hardware",
    role: "Firmware Developer",
    period: "Sep 2026",
    description: "Precision touch sensor noise immunity testing system combining an STM32 DAC arbitrary waveform synthesizer and ESP32 wireless telemetry relay.",
    tags: ["STM32", "ESP32", "Embedded C++", "DSP Filtering"],
    metrics: "12-bit DAC • Signal Filtering • Wireless Telemetry",
    repoUrl: "https://github.com/JasonCK897/ProjectShasta-Firmware",
    demoUrl: "",
    image: "/projects/firmware-shasta.svg",
    isPrivate: true
  },
  {
    id: "proj-hmi",
    title: "HMI Assistive Interface & Sensor Suite",
    category: "ml",
    badge: "ML & Assistive Tech",
    role: "Research Assistant",
    period: "Feb 2026 - Jul 2026",
    description: "Inclusive computing interface prototypes (Disability Mouse & Sign Language Glove) applying sensor processing and gesture recognition algorithms for motor-impaired individuals.",
    tags: ["Python", "Machine Learning", "HMI", "Sensor Calibration"],
    metrics: "Accessibility Tech • Realtime Recognition • HMI Research",
    repoUrl: "https://github.com/JasonCK897",
    demoUrl: "",
    image: "/projects/aroguard.svg"
  },
  {
    id: "proj-sui",
    title: "Sui Blockchain: Decentralized Library",
    category: "web3",
    badge: "Web3 & Blockchain",
    role: "Smart Contract Developer",
    period: "Nov 2025",
    description: "On-chain decentralized library management system built with Sui Move's object-centric smart contract paradigm, paired with a reactive Web3 wallet frontend.",
    tags: ["Sui Move", "Blockchain", "React", "TypeScript"],
    metrics: "Move Object Model • Sub-Second Finality • Web3 Wallet",
    repoUrl: "https://github.com/JasonCK897/SuiProjekD3-Kel4",
    demoUrl: "https://github.com/JasonCK897/SuiProjekD3-Kel4",
    image: "/projects/sui-library.svg"
  }
];

// Academic Research & Publications (Documentation in progress)
export const publicationsData = [
  {
    id: "pub-1",
    title: "Human-Machine Interaction in Inclusive Assistive Computing",
    venue: "Universitas Ma Chung HMI Research Study",
    status: "Manuscript in Preparation",
    year: "2026",
    description: "Investigation into ergonomic sensor placement and gesture recognition filtering for motor-impaired interactive peripherals."
  },
  {
    id: "pub-2",
    title: "Noise Immunity Calibration in Capacitive Touch Sensing Interfaces",
    venue: "Technical Research & Benchmark",
    status: "Experimental Verification Completed",
    year: "2026",
    description: "Empirical study on moving-median vs. exponential filtering under variable high-frequency switching power noise."
  }
];

export const contactData = {
  email: "jasonchristov@gmail.com",
  channels: [
    {
      id: "email",
      label: "Email",
      subtitle: "Send a direct message",
      url: "mailto:jasonchristov@gmail.com",
      icon: "Mail",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      subtitle: "Connect professionally",
      url: "https://www.linkedin.com/in/jason-christov-kesuma-a2a19a36b/",
      icon: "Linkedin",
    },
    {
      id: "github",
      label: "GitHub",
      subtitle: "Explore repositories & source code",
      url: "https://github.com/JasonCK897",
      icon: "Github",
    },
    {
      id: "instagram",
      label: "Instagram",
      subtitle: "Social & personal updates",
      url: "https://www.instagram.com/j._chrisk/",
      icon: "Instagram",
    }
  ],
  formspreeEndpoint: "https://formspree.io/f/xpwzgkvo"
};
