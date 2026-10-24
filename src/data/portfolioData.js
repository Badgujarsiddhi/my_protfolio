/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION DATA
 * ==============================================================================
 * Edit this file to update your personal details, links, projects, skills,
 * education, and achievements. All UI components pull data directly from here.
 * ==============================================================================
 */

export const personalData = {
  name: "Siddhi Badgujar",
  role: "Computer Engineering Student",
  specialization: "Aspiring AI & Cybersecurity Engineer",
  tagline: "Building Intelligent Solutions. Securing the Digital World.",
  bio: [
    "I am a Computer Engineering student passionate about developing intelligent, data-driven systems and safeguarding digital architectures. My focus lies at the intersection of Machine Learning, Natural Language Processing, and Cyber Threat Intelligence.",
    "Driven by analytical thinking and practical problem-solving, I build secure, scalable software solutions—ranging from ML-powered predictive engines to defensive security prototypes. Constantly learning, experimenting, and pushing the boundaries of technology."
  ],
  email: "siddhibadgujar18@gmail.com",
  phone: "+91 9022753939",
  location: "Nashik, Maharashtra, India (422003)",
  socialLinks: {
    github: "https://github.com/Badgujarsiddhi",
    linkedin: "https://www.linkedin.com/in/siddhi-badgujar-5886772b3/",
    twitter: "",
  },
  resumeUrl: "/resume.pdf", // Place your real resume.pdf in the /public folder
  contactNote: "Have a project in mind, an internship opportunity, or want to collaborate on AI and cybersecurity research? Feel free to reach out!"
};

export const terminalSnippets = [
  { command: "whoami", output: "siddhi_badgujar // AI & Cybersecurity Engineer" },
  { command: "cat core_focus.txt", output: "Machine Learning • NLP • Digital Security • Threat Mitigation" },
  { command: "python -c 'import torch, sklearn, security'", output: "Status: All defense & intelligence systems operational [OK]" },
  { command: "nmap -sV target_perimeter", output: "0 vulnerabilities found • Hardened network defenses active" }
];

export const skillsData = [
  {
    category: "Programming",
    icon: "Code2",
    description: "Core languages used for systems programming, data structures, and script automation.",
    skills: ["C", "C++", "Python", "JavaScript"]
  },
  {
    category: "AI / Machine Learning",
    icon: "BrainCircuit",
    description: "Designing predictive models, natural language pipelines, and intelligent interfaces.",
    skills: ["Machine Learning", "NLP", "Streamlit", "Scikit-learn"]
  },
  {
    category: "Cybersecurity",
    icon: "ShieldAlert",
    description: "Defensive concepts, secure protocols, social engineering analysis, and digital protection.",
    skills: ["Security Fundamentals", "Phishing Awareness", "Digital Security", "Threat Analysis"]
  },
  {
    category: "Tools & Frameworks",
    icon: "Terminal",
    description: "Modern development environments, version control, and lightweight backend services.",
    skills: ["Git", "GitHub", "VS Code", "FastAPI"]
  }
];

export const projectsData = [
  {
    id: "debate-gpt",
    title: "DebateGPT",
    badge: "AI & NLP Platform",
    status: "Completed",
    description: "An AI-powered debate practice and argument analysis platform designed to evaluate rhetorical arguments, provide counter-perspectives, and strengthen critical debate reasoning using Natural Language Processing.",
    techStack: ["Python", "NLP", "LLM APIs", "Streamlit"],
    githubUrl: "https://github.com/Badgujarsiddhi/FinalProject_DebateGPT.git",
    liveUrl: "",
    features: [
      "Argument strength scoring & logical fallacy detection",
      "Dynamic counter-argument generation",
      "Interactive practice sparring environment"
    ]
  },
  {
    id: "crop-recommendation",
    title: "Crop Recommendation System",
    badge: "Machine Learning",
    status: "Completed",
    description: "An ML-based decision support system that analyzes soil nutrients (N, P, K), pH levels, rainfall, and weather parameters to recommend the most optimal crop for maximum agricultural yield.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/Badgujarsiddhi/crop-recommendation-.git",
    liveUrl: "",
    features: [
      "Multi-parameter soil and climatic feature processing",
      "Trained classification model with high accuracy",
      "Intuitive web dashboard for farmers & researchers"
    ]
  },
  {
    id: "scamshield-ai",
    title: "ScamShield AI",
    badge: "Cybersecurity (Inova)",
    status: "Active Prototype",
    description: "An AI-assisted scam and social engineering detection system built during the Inova Hackathon to analyze suspicious text messages, emails, and phishing URLs to flag fraudulent intent before damage occurs.",
    techStack: ["Python", "FastAPI", "NLP", "Heuristic Analysis"],
    githubUrl: "https://github.com/Badgujarsiddhi/inova-hackaton.git",
    liveUrl: "",
    features: [
      "Heuristic keyword and behavioral pattern scanner",
      "Phishing link and domain spoofing inspection",
      "User-friendly threat advisory report generation"
    ]
  },
  {
    id: "pharma-guard",
    title: "Pharma Guard",
    badge: "Healthcare & Security",
    status: "Completed",
    description: "A pharmaceutical security and validation platform engineered to verify medicine authenticity, monitor pharmaceutical supply chain integrity, and safeguard consumers against counterfeit medications.",
    techStack: ["Python", "Security Protocols", "FastAPI", "Database"],
    githubUrl: "https://github.com/Badgujarsiddhi/Pharma_Guard.git",
    liveUrl: "",
    features: [
      "Authenticity verification & medicine traceability",
      "Drug verification protocol to prevent counterfeits",
      "Clean verification dashboard"
    ]
  },
  {
    id: "milk-chiller-can",
    title: "Milk Chilling Can — SIH Hackathon",
    badge: "Hardware & IoT (SIH)",
    status: "In Development",
    description: "An innovative thermal preservation milk chilling can engineered for the Smart India Hackathon (SIH). Designed to prevent milk spoilage for dairy farmers during transit in rural regions without continuous grid power.",
    techStack: ["IoT Sensors", "Embedded Systems", "Hardware Prototype", "Thermal Design"],
    githubUrl: "https://github.com/Badgujarsiddhi/Milk_Chiller_Can.git",
    liveUrl: "https://drive.google.com/drive/folders/1m2POUm7gs_e5K8ooSC9TtVEpp0Z3UpgY",
    demoLabel: "Prototype (Drive)",
    features: [
      "Smart India Hackathon (SIH) prototype innovation",
      "Rapid cooling retention system for rural dairy transit",
      "Complete working prototype models & drive documentation"
    ]
  },
  {
    id: "mental-health-predictor",
    title: "Mental Health Predictor",
    badge: "Predictive Healthcare",
    status: "Completed",
    description: "A predictive machine learning system designed to evaluate psychological wellness indicators, stress metrics, and lifestyle parameters to provide early guidance and supportive wellness insights.",
    techStack: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    githubUrl: "https://github.com/Badgujarsiddhi/mental-health-predictor.git",
    liveUrl: "",
    features: [
      "Predictive classification of psychological indicators",
      "Exploratory analysis on lifestyle and stress metrics",
      "Confidential self-assessment workflow"
    ]
  }
];

export const achievementsData = [
  {
    id: "paper-presentation",
    title: "Paper Presentation — Runner-Up",
    category: "Academic & Research Recognition",
    description: "Secured Runner-Up position in a technical paper presentation symposium, showcasing research methodology, analytical presentation skills, and deep technical domain knowledge.",
    event: "Technical Symposium", // Editable institute/event name
    date: "Academic Year 2025-26",
    highlight: true
  },
  {
    id: "rift-hackathon",
    title: "RIFT '26 Hackathon — Participant",
    category: "Competitive Hackathon (Pune)",
    description: "Actively participated in the RIFT '26 Hackathon organized by PW (Physics Wallah) Institute of Innovation in Pune. Collaborated under 'Team The Debuggers' to build, innovate, and present a technical prototype under intensive competitive constraints.",
    event: "PW Institute of Innovation (Pune)",
    date: "19th - 20th February 2026",
    team: "The Debuggers",
    certificateId: "677e9f01-8850-4950-9960-dd5d88c8b4c4",
    highlight: true
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "NDMVP Samaj's K.B.T. College of Engineering (KBTCOE), Nashik",
    period: "Pursuing",
    status: "Direct Second Year (DSE)",
    grade: "Perfect Marks in DSA & Microprocessor",
    description: "Admitted directly into Second Year Computer Engineering based on outstanding diploma merit. Demonstrated subject mastery by securing full out-of marks in Data Structures & Algorithms (DSA) and Microprocessors. Focusing on core computing algorithms, artificial intelligence, and cybersecurity.",
    highlights: [
      "Mastered Data Structures & Algorithms (DSA) with full out-of marks",
      "Achieved out-of marks in Microprocessors",
      "Direct Second Year Engineering Admission"
    ]
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "K.K. Wagh Polytechnic, Nashik",
    period: "2026 Batch",
    status: "Graduated with Distinction",
    grade: "92.59% Aggregate",
    description: "Completed Diploma in the Department of Computer Technology with an exceptional aggregate score of 92.59%. Built rock-solid fundamentals in C, C++, object-oriented programming, operating systems, and computer network architecture.",
    highlights: [
      "Graduated with 92.59% Distinction",
      "Department of Computer Technology",
      "Top Academic Performer"
    ]
  }
];
