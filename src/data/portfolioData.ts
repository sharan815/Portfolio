import type { Project, SkillCategory, ExpertiseCard, StatItem, ExperienceItem, Certification } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "SHARAN B",
  alias: "SHARAN",
  title: "AI Engineer • Full Stack Developer • Cloud & DevOps Engineer",
  badge: "EXCLUSIVE PORTFOLIO",
  tagline: "Architecting Intelligent Applications. Powering the Cloud. Building the Future.",
  intro: "I'm Sharan B, an AI & Data Science undergraduate passionate about Cloud Computing, DevOps, Full Stack Development, and Artificial Intelligence. I engineer scalable, cloud-native solutions that bridge innovation with real-world impact.",
  aboutWhoAmI: "A technology enthusiast driven by curiosity and innovation, I specialize in designing intelligent software solutions that combine AI, cloud infrastructure, and modern web technologies. I enjoy building applications from the ground up, automating workflows, deploying scalable services, and continuously improving user experiences through clean architecture and efficient engineering.",
  mission: "To engineer intelligent, scalable, and cloud-powered solutions that bridge innovation with real-world impact while continuously evolving as a Cloud & AI Engineer.",
  email: "sharanbaranidharan@gmail.com",
  phone: "+91 98765 43210",
  location: "Coimbatore, Tamil Nadu, India",
  github: "https://github.com/sharan815",
  linkedin: "https://linkedin.com/in/sharan-baranidharan-200937314/",
  resumeUrl: "#",
  copyrightYear: 2026
};

export const EXPERTISE_CARDS: ExpertiseCard[] = [
  {
    id: "cloud",
    title: "Cloud Engineering",
    subtitle: "Google Cloud Platform (GCP)",
    description: "Architecting resilient, scalable cloud-native applications using Google Cloud Platform, Firebase Realtime Database, and cloud data pipelines.",
    iconName: "Cloud",
    badge: "CORE STRENGTH"
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    subtitle: "CI/CD & Automation",
    description: "Automating deployment pipelines through Docker, Kubernetes basics, GitHub Actions, Nginx web servers, Linux administration, and Infrastructure as Code.",
    iconName: "Cpu",
    badge: "AUTOMATION"
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    subtitle: "Modern Web Systems",
    description: "Developing responsive frontend UIs using React & Tailwind CSS backed by high-performance REST APIs in Django, Flask, and Node.js.",
    iconName: "Layout",
    badge: "END-TO-END"
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    subtitle: "ML & Intelligent Automation",
    description: "Building intelligent applications powered by machine learning algorithms, LLM integrations, computer vision, and data-driven decision engines.",
    iconName: "Bot",
    badge: "INTELLIGENCE"
  }
];

export const PERFORMANCE_STATS: StatItem[] = [
  {
    id: "tech",
    label: "Technologies Learned",
    value: 10,
    suffix: "+",
    description: "Languages, web frameworks, database engines & IoT tools mastered.",
    subtext: "Python, React, Node.js, MySQL, ESP32..."
  },
  {
    id: "projects",
    label: "Projects Completed",
    value: 5,
    suffix: "+",
    description: "End-to-end full stack web applications, AI chatbots, and smart IoT systems built.",
    subtext: "Zynk Bites, Agrox AI, Chatbot..."
  },
  {
    id: "leetcode",
    label: "LeetCode Sums Solved",
    value: 25,
    suffix: "+",
    description: "Algorithmic problems and data structure challenges solved on LeetCode.",
    subtext: "Data Structures & Algorithms"
  },
  {
    id: "problemsolving",
    label: "Problem Solving",
    value: 15,
    suffix: "+",
    description: "Complex technical bottlenecks & logical challenges resolved.",
    subtext: "Logic & Engineering"
  },
  {
    id: "deployments",
    label: "Cloud Deployments",
    value: 10,
    suffix: "+",
    description: "Applications and real-time services deployed across cloud & Firebase platforms.",
    subtext: "Firebase & Cloud Hosting"
  },
  {
    id: "cleancode",
    label: "Commitment to Clean Code",
    value: 100,
    suffix: "%",
    description: "Strict adherence to modularity, DRY principles, and structured code.",
    subtext: "Clean Architecture"
  }
];

export const TECH_STACK_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code",
    skills: [
      { name: "Python", level: 92, hot: true },
      { name: "C", level: 80 },
      { name: "Java", level: 84 },
      { name: "SQL", level: 88, hot: true }
    ]
  },
  {
    title: "Web Development",
    iconName: "Layout",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 90, hot: true },
      { name: "React.js", level: 88, hot: true },
      { name: "Node.js", level: 85 }
    ]
  },
  {
    title: "Databases",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: 88, hot: true },
      { name: "Firebase Realtime Database", level: 90, hot: true }
    ]
  },
  {
    title: "AI & Data Science",
    iconName: "Bot",
    skills: [
      { name: "Machine Learning", level: 88, hot: true },
      { name: "Deep Learning", level: 84 },
      { name: "Artificial Intelligence", level: 90, hot: true },
      { name: "Data Analysis", level: 86 },
      { name: "Data Visualization", level: 86 }
    ]
  },
  {
    title: "Tools & Technologies",
    iconName: "Cpu",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Git", level: 92 },
      { name: "GitHub", level: 94, hot: true },
      { name: "Google Colab", level: 88 },
      { name: "Figma", level: 80 },
      { name: "Arduino IDE", level: 85 },
      { name: "ESP32", level: 88, hot: true },
      { name: "Firebase", level: 90 }
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "zynk-bites",
    title: "ZYNK BITES – Food Subscription Web Application",
    subtitle: "Full Stack Food Subscription & Management Platform",
    category: "fullstack",
    description: "A web-based food subscription platform designed to provide users with an easy way to explore, order, and manage food subscription plans with secure user authentication and API-driven workflows.",
    fullDetails: "Developed responsive frontend components using React and TypeScript backed by Node.js and Express.js REST APIs. Implemented PostgreSQL database integration for structured plan management, input validation, and secure backend business logic handling.",
    stack: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    image: "/assets/images/project_agrobot.png",
    githubUrl: "https://github.com/sharan815",
    demoUrl: "#",
    featured: true,
    metrics: "Secure Subscription & API Architecture"
  },
  {
    id: "agrox-ai",
    title: "AGROX AI DASHBOARD – Smart Farming System",
    subtitle: "Real-Time Agriculture & Aquaculture IoT Telemetry",
    category: "iot",
    description: "A smart farming and aquaculture monitoring system designed to collect and visualize real-time agricultural sensor data across soil and water environmental metrics.",
    fullDetails: "Interfaced ESP32 microcontrollers with sensor array measuring Soil Moisture, Soil pH, Soil Temp, Water pH, Turbidity, and EC/Salinity. Created the end-to-end data pipeline streaming sensor telemetry into Firebase Realtime Database and visualized live data on a responsive web dashboard.",
    stack: ["Python", "Firebase", "JavaScript", "ESP32", "IoT"],
    image: "/assets/images/project_agrobot.png",
    githubUrl: "https://github.com/sharan815",
    demoUrl: "#",
    featured: true,
    metrics: "Live Sensor Telemetry Pipeline"
  },
  {
    id: "ai-chatbot",
    title: "AI Conversational Chatbot",
    subtitle: "Interactive Natural Language Assistant",
    category: "ai",
    description: "An interactive conversational AI application designed to communicate with users, process natural language queries, and deliver automated intelligent responses.",
    fullDetails: "Designed a clean user-friendly chat interface in React / JavaScript connected to Python backend NLP query handlers. Implemented user input processing, automated response pipelines, and conversational interaction concepts.",
    stack: ["Python", "Artificial Intelligence", "NLP", "React", "JavaScript"],
    image: "/assets/images/project_psysim.png",
    githubUrl: "https://github.com/sharan815",
    demoUrl: "#",
    featured: true,
    metrics: "Conversational NLP Processing"
  },
  {
    id: "study-planner",
    title: "Study Planner Productivity Application",
    subtitle: "Academic Schedule & Task Management System",
    category: "fullstack",
    description: "A student productivity application built to help students organize academic activities, manage subjects, schedule daily study plans, and track task completion.",
    fullDetails: "Designed and built modular React components for subject creation, daily study schedule planning, and task completion tracking with a student-friendly responsive UI created in TypeScript, HTML, and CSS.",
    stack: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    image: "/assets/images/project_psysim.png",
    githubUrl: "https://github.com/sharan815",
    demoUrl: "#",
    featured: false,
    metrics: "Progress & Task Tracker"
  },
  {
    id: "bus-management",
    title: "Bus Management System",
    subtitle: "College Transit & Route Information Platform",
    category: "fullstack",
    description: "A college transportation management application designed to simplify bus schedule organization, route tracking, and student transit information.",
    fullDetails: "Designed the application interface and developed core bus and route management functionality using HTML, CSS, JavaScript, and database integration to organize campus transportation data efficiently.",
    stack: ["HTML5", "CSS3", "JavaScript", "SQL Database"],
    image: "/assets/images/project_bus_tracker.png",
    githubUrl: "https://github.com/sharan815",
    demoUrl: "#",
    featured: false,
    metrics: "Organized Campus Transit"
  }
];

export const CLOUD_DEVOPS_TOOLS = [
  { name: "GOOGLE CLOUD (BASICS)", category: "Cloud", status: "GCP Foundations", icon: "Globe" },
  { name: "AWS (BASICS)", category: "Cloud", status: "AWS Essentials", icon: "Cloud" },
  { name: "Firebase", category: "BaaS & Hosting", status: "Realtime Sync & Database", icon: "Zap" },
  { name: "Git & GitHub", category: "Version Control", status: "Repositories & Workflows", icon: "GitBranch" },
  { name: "ESP32 & IoT", category: "Hardware Telemetry", status: "Realtime Sensors", icon: "Cpu" },
  { name: "VS Code", category: "IDE", status: "Development Environment", icon: "Terminal" }
];

export const CAREER_TIMELINE: ExperienceItem[] = [
  {
    year: "2024",
    title: "Academic Foundation",
    role: "B.Tech AI & Data Science Student",
    organization: "Higher Education Institution",
    description: "Commenced B.Tech in Artificial Intelligence & Data Science, mastering core computer science foundations, object-oriented programming, data structures, and database principles.",
    highlights: ["Explored Python & Data Science fundamentals", "Built relational database solutions", "DSA Foundations"],
    type: "academic"
  },
  {
    year: "2025",
    title: "Full Stack & AI Systems",
    role: "Full Stack Developer",
    organization: "Academic & Independent Engineering",
    description: "Built scalable full-stack applications leveraging React, Django, Flask, and Firebase. Developed AI-driven projects including PsySim Chatbot and Bus Tracker.",
    highlights: ["Developed 6+ full-stack web applications", "Integrated LLM & REST APIs", "Mastered modern frontend UIs"],
    type: "project"
  },
  {
    year: "2025",
    title: "Practical AI & Internship",
    role: "AI & Software Intern",
    organization: "Technology Internship",
    description: "Completed intensive AI internship focusing on practical machine learning applications, dataset preprocessing, automation scripts, and smart farming IoT integration.",
    highlights: ["Smart Agriculture IoT & ML integration", "Data pipeline optimization", "Clean code practices"],
    type: "internship"
  },
  {
    year: "2026",
    title: "Cloud & DevOps Mastery",
    role: "Cloud & DevOps Practitioner",
    organization: "Advanced Specialization",
    description: "Focused on AWS Cloud infrastructure, Docker container orchestration, GitHub Actions CI/CD pipelines, and Linux server deployment automation.",
    highlights: ["AWS EC2, S3 & IAM deployment", "CI/CD automated deployment pipelines", "Containerization with Docker"],
    type: "learning"
  },
  {
    year: "Future",
    title: "Industry Trajectory",
    role: "AI Solutions & Cloud DevOps Engineer",
    organization: "Target Career Horizon",
    description: "Airing to architect enterprise-grade AI cloud platforms, automate resilient infrastructure pipelines, and build high-impact technological innovations.",
    highlights: ["Cloud Architecture", "Enterprise AI Deployment", "DevOps Leadership"],
    type: "future"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "python-ibm",
    title: "Python for Data Science",
    issuer: "IBM (Coursera)",
    date: "2025",
    skills: ["Python Programming", "Data Science Fundamentals", "Pandas & NumPy", "Data Analysis"],
    icon: "Code"
  },
  {
    id: "aws-essentials",
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services (Coursera)",
    date: "2025",
    skills: ["AWS EC2", "S3 Storage", "IAM Security", "Cloud Infrastructure"],
    icon: "Cloud"
  },
  {
    id: "linux-shell-ibm",
    title: "Linux Commands & Shell Scripting",
    issuer: "IBM (Coursera)",
    date: "2025",
    skills: ["Linux SysAdmin", "Bash Shell Scripting", "CLI Automation", "Terminal Workflows"],
    icon: "Terminal"
  },
  {
    id: "ai-coursera",
    title: "Artificial Intelligence",
    issuer: "Coursera",
    date: "2025",
    skills: ["Machine Learning", "Neural Networks", "AI Concepts", "Algorithm Design"],
    icon: "Cpu"
  }
];
