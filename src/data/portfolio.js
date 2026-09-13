/**
 * Portfolio Data - Jason Christov Kesuma
 * Professional English version focusing on Embedded Systems, Firmware, and Web3.
 */

export const personalData = {
  name: "Jason Christov Kesuma",
  role: "Informatics Engineering Student",
  tagline: "Embedded Systems • Firmware Engineering • Web3",
  bio: "Undergraduate Informatics Engineering student at Universitas Ma Chung (Malang, Indonesia). Focused on STM32 & ESP32 firmware engineering, signal noise immunity analysis, and decentralized smart contracts on the Sui ecosystem.",
  location: "Malang, Indonesia",
  avatar: "/avatar.svg",
  cvUrl: "/cv-jason-christov-kesuma.pdf",
  
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
    "Core Focus: Computer Architecture, Low-level Systems Programming, and Algorithm Analysis.",
    "Independent Research: Microcontroller noise immunity testing & wireless IoT telemetry.",
    "Active contributor at the Human-Machine Interaction (HMI) Research Laboratory."
  ]
};

export const skillsData = {
  programming: [
    { name: "C/C++", level: "Advanced", icon: "SiCplusplus", category: "Embedded" },
    { name: "Python", level: "Intermediate", icon: "SiPython", category: "Data / Tools" },
    { name: "Java", level: "Intermediate", icon: "FaJava", category: "OOP" },
    { name: "C#", level: "Intermediate", icon: "TbBrandCSharp", category: "Systems" },
    { name: "HTML", level: "Advanced", icon: "FaHtml5", category: "Web Interface" },
    { name: "CSS", level: "Intermediate", icon: "FaCss3Alt", category: "Styling" },
    { name: "JavaScript", level: "Intermediate", icon: "SiJavascript", category: "Web / dApp" },
  ],
  softSkills: [
    "Project Management",
    "Problem Solving",
    "Analytical Precision",
    "Cross-functional Teamwork",
    "Autonomous Learning",
    "Adaptive Engineering"
  ]
};

export const experienceData = [
  {
    id: "exp-1",
    role: "Research Assistant",
    organization: "Human-Machine Interaction (HMI) Study Center",
    location: "Malang, Indonesia",
    period: "Feb 2026 - Jul 2026",
    description: "Conducted research on inclusive accessibility technology: Disability Mouse, Sign Language Glove, and sensor signal acquisition.",
  },
  {
    id: "exp-2",
    role: "Head of Student Exchange Program (IF-JOURNEY)",
    organization: "Informatics Student Association",
    location: "Surabaya, Indonesia",
    period: "Jun 2026",
    description: "Led a 12-member delegation coordinating academic benchmark exchange with Universitas Surabaya, attended by 50 combined participants.",
  },
  {
    id: "exp-3",
    role: "Organizing Committee - Ma Chung Festival 2025",
    organization: "Universitas Ma Chung",
    location: "Malang, Indonesia",
    period: "Aug 2025 - Feb 2026",
    description: "Managed technical field operations and inter-divisional logistics for the annual new student convocation festival.",
  }
];

// 3 Featured Projects (Concise, Visual-First)
export const projectsData = [
  {
    id: "proj-firmware",
    title: "Project Shasta: Touch Controller Firmware",
    role: "Firmware Developer",
    period: "Sep 2026",
    category: "firmware",
    description: "Noise immunity testing suite for capacitive touch sensors powered by an STM32 DAC arbitrary waveform synthesizer and ESP32 wireless telemetry relay.",
    tags: ["STM32", "ESP32", "Embedded C++", "DSP"],
    metrics: "12-bit DAC • Noise Immunity • Wireless Telemetry",
    demoUrl: "",
    repoUrl: "https://github.com/JasonCK897/ProjectShasta-Firmware",
    isPrivate: true,
    image: "/projects/firmware-shasta.svg"
  },
  {
    id: "proj-sui",
    title: "Sui Blockchain: Library dApp",
    role: "Move & Web3 Developer",
    period: "Nov 2025",
    category: "web3",
    description: "On-chain decentralized library management system leveraging Sui's object-centric Move smart contracts with React and Sui Wallet integration.",
    tags: ["Sui Move", "Blockchain", "React", "TypeScript"],
    metrics: "Sui Testnet • Sub-second Finality • Web3 Wallet",
    demoUrl: "https://github.com/JasonCK897/SuiProjekD3-Kel4",
    repoUrl: "https://github.com/JasonCK897/SuiProjekD3-Kel4",
    isPrivate: false,
    image: "/projects/sui-library.svg"
  },
  {
    id: "proj-aiditech",
    title: "AiDiTech: Research Portal & CMS",
    role: "Web Developer",
    period: "Apr 2026 - Jun 2026",
    category: "web",
    description: "Official research center web platform for Universitas Ma Chung featuring an indexed scientific publication repository and admin editorial dashboard.",
    tags: ["PHP", "MySQL", "PHPMyAdmin", "CMS"],
    metrics: "Ma Chung Research • Relational Database • Admin Dashboard",
    demoUrl: "",
    repoUrl: "https://github.com/JasonCK897",
    isPrivate: false,
    image: "/projects/aiditech.svg"
  }
];

// Direct Contact Channels (Clean direct links without displaying raw URLs)
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
