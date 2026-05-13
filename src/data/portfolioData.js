import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, 
  FaDatabase, FaGithub, FaCode, FaPaperPlane, FaRobot, FaChartLine, 
  FaPlug, FaServer, FaTools, FaBrain, FaGlobe, FaMobile, FaCloud,
  FaDocker, FaAws, FaFigma, FaGitAlt, FaNpm, FaYarn, FaSass, FaLess,
  FaBootstrap, FaWordpress, FaPhp, FaLaravel, FaVuejs, FaAngular,
  FaMongodb, FaPostgresql, FaMysql, FaRedis, FaFirebase, FaHeroku,
  FaDigitalOcean, FaUbuntu, FaLinux, FaWindows, FaApple
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase,
  SiHeroku, SiDigitalocean, SiDocker, SiAws, SiGooglecloud, SiVercel,
  SiNetlify, SiFigma, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd,
  SiSketch, SiInvision, SiZeplin, SiJira, SiTrello, SiSlack, SiDiscord,
  SiZoom, SiTeams, SiNotion, SiEvernote, SiDropbox, SiGoogledrive,
  SiOnedrive, SiIcloud, SiSpotify, SiYoutube, SiTwitch, SiInstagram,
  SiFacebook, SiTwitter, SiLinkedin, SiGithub, SiStackoverflow,
  SiReddit, SiQuora, SiMedium, SiDev, SiHashnode, SiSubstack,
  SiPatreon, SiKoFi, SiBuyMeACoffee, SiPaypal, SiStripe, SiSquare,
  SiShopify, SiWoo, SiMagento, SiOpencart, SiPrestashop, SiBigcommerce,
  SiSquarespace, SiWix, SiWebflow, SiWordpress, SiDrupal, SiJoomla,
  SiGhost, SiHugo, SiGatsby, SiNextdotjs, SiNuxtdotjs, SiSvelte,
  SiAlpinejs, SiJquery, SiBootstrap, SiTailwindcss, SiBulma,
  SiFoundation, SiSemanticui, SiMaterialui, SiAntdesign, SiChakraui,
  SiStyledcomponents, SiEmotion, SiCssmodules, SiSass, SiLess,
  SiStylus, SiPostcss, SiAutoprefixer, SiPurgecss, SiCssnano,
  SiWebpack, SiRollup, SiParcel, SiVite, SiGulp, SiGrunt, SiBabel,
  SiEslint, SiPrettier, SiHusky, SiLintstaged, SiCommitlint,
  SiConventionalcommits, SiSemanticrelease, SiRenovate, SiDependabot,
  SiSnyk, SiSonarqube, SiCodeclimate, SiCodacy, SiCoveralls,
  SiTravisci, SiCircleci, SiGithubactions, SiGitlabci, SiJenkins,
  SiTeamcity, SiBamboo, SiAzurepipelines, SiBitbucketpipelines,
  SiAppveyor, SiCodeship, SiSemaphore, SiWercker, SiBuddy,
  SiDeploybot, SiDeployhq, SiDeployer, SiCapistrano, SiFabric,
  SiAnsible, SiChef, SiPuppet, SiSalt, SiTerraform, SiCloudformation,
  SiPulumi, SiServerless, SiVercel, SiNetlify, SiFirebase,
  SiHeroku, SiRailway, SiRender, SiFly, SiDigitalocean,
  SiLinode, SiVultr, SiUpcloud, SiScaleway, SiHetzner, SiOVH,
  SiContabo, SiHostinger, SiNamecheap, SiGodaddy, SiCloudflare,
  SiAkamai, SiFastly, SiMaxcdn, SiBunny, SiKeycdn, SiCdn77,
  SiStackpath, SiLimelight, SiLevel3, SiCogent, SiHurricane,
  SiTelia
} from 'react-icons/si';

export const skillsData = [
  {
    category: "Frontend Development",
    icon: FaGlobe,
    skills: [
      { name: "HTML5", icon: FaHtml5, level: 90 },
      { name: "CSS3", icon: FaCss3Alt, level: 85 },
      { name: "JavaScript", icon: FaJs, level: 88 },
      { name: "React.js", icon: FaReact, level: 85 },
      { name: "TypeScript", icon: SiTypescript, level: 75 },
      { name: "Next.js", icon: SiNextdotjs, level: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
      { name: "Bootstrap", icon: FaBootstrap, level: 80 },
      { name: "Sass/SCSS", icon: FaSass, level: 75 },
    ]
  },
  {
    category: "Backend Development",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 82 },
      { name: "Express.js", icon: SiExpress, level: 80 },
      { name: "Python", icon: FaPython, level: 85 },
      { name: "Java", icon: FaJava, level: 75 },
      { name: "PHP", icon: FaPhp, level: 70 },
      { name: "Laravel", icon: FaLaravel, level: 65 },
    ]
  },
  {
    category: "Databases",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB", icon: FaMongodb, level: 80 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
      { name: "MySQL", icon: FaMysql, level: 78 },
      { name: "Redis", icon: SiRedis, level: 70 },
      { name: "Firebase", icon: SiFirebase, level: 75 },
    ]
  },
  {
    category: "DevOps & Tools",
    icon: FaTools,
    skills: [
      { name: "Git", icon: FaGitAlt, level: 85 },
      { name: "GitHub", icon: FaGithub, level: 90 },
      { name: "Docker", icon: FaDocker, level: 70 },
      { name: "AWS", icon: FaAws, level: 65 },
      { name: "Heroku", icon: SiHeroku, level: 75 },
      { name: "Vercel", icon: SiVercel, level: 80 },
      { name: "Netlify", icon: SiNetlify, level: 80 },
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: FaBrain,
    skills: [
      { name: "Machine Learning", icon: FaRobot, level: 80 },
      { name: "Data Science", icon: FaChartLine, level: 75 },
      { name: "TensorFlow", icon: SiTensorflow, level: 70 },
      { name: "PyTorch", icon: SiPytorch, level: 65 },
      { name: "Scikit-learn", icon: SiScikitlearn, level: 75 },
      { name: "OpenCV", icon: SiOpencv, level: 70 },
    ]
  },
  {
    category: "Design & UI/UX",
    icon: FaFigma,
    skills: [
      { name: "Figma", icon: SiFigma, level: 75 },
      { name: "Adobe XD", icon: SiAdobexd, level: 70 },
      { name: "Photoshop", icon: SiAdobephotoshop, level: 65 },
      { name: "Illustrator", icon: SiAdobeillustrator, level: 60 },
      { name: "Responsive Design", icon: FaMobile, level: 85 },
      { name: "UI/UX Design", icon: FaGlobe, level: 80 },
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Zerodha Clone",
    description: "A comprehensive trading platform clone built with React.js, featuring real-time data visualization, trading interface, and portfolio management. Includes advanced charting with TradingView integration and real-time market data.",
    image: "/images/projects/zerodha-clone.jpg",
    technologies: ["React.js", "Node.js", "Socket.io", "TradingView API", "MongoDB"],
    github: "https://github.com/ravishekhar/zerodha-clone",
    live: "https://zerodha-clone.vercel.app",
    category: "Web Application",
    featured: true,
    status: "Completed"
  },
  {
    id: 2,
    title: "Amazon Clone",
    description: "Full-stack e-commerce platform clone with complete shopping functionality including user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
    image: "/images/projects/amazon-clone.jpg",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"],
    github: "https://github.com/ravishekhar/amazon-clone",
    live: "https://amazon-clone-react.vercel.app",
    category: "E-commerce",
    featured: true,
    status: "Completed"
  },
  {
    id: 3,
    title: "Quora Clone",
    description: "Question-answer platform with features like user authentication, question posting, answering, voting, commenting, and search functionality. Includes real-time notifications.",
    image: "/images/projects/quora-clone.jpg",
    technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "JWT"],
    github: "https://github.com/ravishekhar/quora-clone",
    live: "https://quora-clone-react.vercel.app",
    category: "Social Platform",
    featured: true,
    status: "Completed"
  },
  {
    id: 4,
    title: "Spotify Clone",
    description: "Music streaming application clone with playlist management, audio player, search functionality, and user authentication. Features a responsive design and smooth animations.",
    image: "/images/projects/spotify-clone.jpg",
    technologies: ["React.js", "Spotify API", "CSS3", "JavaScript"],
    github: "https://github.com/ravishekhar/spotify-clone",
    live: "https://spotify-clone-react.vercel.app",
    category: "Music App",
    featured: false,
    status: "Completed"
  },
  {
    id: 5,
    title: "Email Spam Detection",
    description: "Machine learning model using Logistic Regression to classify emails as spam or legitimate. Features text preprocessing, feature extraction, and model evaluation with 95% accuracy.",
    image: "/images/projects/spam-detection.jpg",
    technologies: ["Python", "Scikit-learn", "NLTK", "Pandas", "NumPy"],
    github: "https://github.com/ravishekhar/email-spam-detection",
    live: "https://spam-detection-ml.herokuapp.com",
    category: "Machine Learning",
    featured: true,
    status: "Completed"
  },
  {
    id: 6,
    title: "Big Mart Sales Prediction",
    description: "Data science project predicting sales using machine learning algorithms. Includes data analysis, feature engineering, model selection, and deployment with interactive dashboard.",
    image: "/images/projects/sales-prediction.jpg",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Streamlit"],
    github: "https://github.com/ravishekhar/big-mart-sales-prediction",
    live: "https://sales-prediction-ml.herokuapp.com",
    category: "Data Science",
    featured: false,
    status: "Completed"
  },
  {
    id: 7,
    title: "Face Recognition Attendance System",
    description: "Python application using OpenCV for automated attendance system with face recognition. Features real-time face detection, attendance logging, and admin dashboard.",
    image: "/images/projects/face-recognition.jpg",
    technologies: ["Python", "OpenCV", "Face Recognition", "SQLite", "Tkinter"],
    github: "https://github.com/ravishekhar/face-recognition-attendance",
    live: null,
    category: "Computer Vision",
    featured: false,
    status: "Completed"
  },
  {
    id: 8,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasting, 7-day forecast, and weather alerts. Features beautiful UI with weather animations and responsive design.",
    image: "/images/projects/weather-app.jpg",
    technologies: ["React.js", "OpenWeather API", "Geolocation API", "CSS3"],
    github: "https://github.com/ravishekhar/weather-app",
    live: "https://weather-app-react.vercel.app",
    category: "Web Application",
    featured: false,
    status: "Completed"
  }
];

export const experienceData = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "ONGC (Oil and Natural Gas Corporation)",
    location: "Mumbai, India",
    period: "May 2025 - June 2025",
    description: "Gaining hands-on experience in oil and gas industry technology and software systems. Working on enterprise-level applications and learning industry-specific technologies.",
    technologies: ["Java", "Spring Boot", "Oracle Database", "Enterprise Systems"],
    type: "Internship",
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Software Development Intern",
    company: "SAIL (Steel Authority of India Limited)",
    location: "Bokaro, India",
    period: "May 2024 - June 2024",
    description: "Worked on industrial software systems and gained practical experience in enterprise technology. Contributed to maintenance and development of internal applications.",
    technologies: ["Java", "SQL", "Industrial Systems", "Enterprise Software"],
    type: "Internship",
    status: "Completed"
  },
  {
    id: 3,
    title: "Computer Science Student",
    company: "GIET University",
    location: "Gunupur, Odisha, India",
    period: "2022 - Present",
    description: "5th semester student focusing on software development, machine learning, and data science. Maintaining excellent academic performance while working on personal projects.",
    technologies: ["Computer Science", "Software Engineering", "Data Structures", "Algorithms"],
    type: "Education",
    status: "Ongoing"
  },
  {
    id: 4,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2023 - Present",
    description: "Developing custom websites and web applications for clients. Specializing in React.js, Node.js, and modern web technologies. Delivering high-quality, responsive solutions.",
    technologies: ["React.js", "Node.js", "MongoDB", "Client Projects"],
    type: "Freelance",
    status: "Ongoing"
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ravi-shekhar-79a671354/",
    icon: "linkedin",
    color: "#0077B5"
  },
  {
    name: "GitHub",
    url: "https://github.com/ravishekhar",
    icon: "github",
    color: "#333"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/smartravishekhar/",
    icon: "instagram",
    color: "#E4405F"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ravishekhar",
    icon: "twitter",
    color: "#1DA1F2"
  }
];

export const contactInfo = {
  email: "ravishekharcvbokaro@gmail.com",
  phone: "+91 98765 43210",
  location: "Bokaro, Jharkhand, India",
  availability: "Available for freelance opportunities and full-time positions",
  resume: "/assets/Ravi_Shekhar_CV.pdf"
};

export const personalInfo = {
  name: "Ravi Shekhar",
  title: "Software Developer & ML Enthusiast",
  subtitle: "Computer Science Student at GIET University",
  description: "I'm a 5th semester Computer Science student at GIET University, passionate about building web applications, solving problems with data, and developing ML solutions. I've done internships at SAIL and ONGC, and I love combining software engineering with AI/DS to create impactful projects.",
  avatar: "/images/avatar.jpg",
  coverImage: "/images/cover.jpg"
};
