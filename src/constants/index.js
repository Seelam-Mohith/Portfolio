export const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'Home', path: '/' },
  { id: 'about', label: 'About', icon: 'User', path: '/about' },
  { id: 'skills', label: 'Skills', icon: 'Code2', path: '/skills' },
  { id: 'projects', label: 'Projects', icon: 'FolderGit2', path: '/projects' },
  { id: 'experience', label: 'Experience', icon: 'Briefcase', path: '/experience' },
  { id: 'achievements', label: 'Achievements', icon: 'Trophy', path: '/achievements' },
  { id: 'resume', label: 'Resume', icon: 'FileText', path: '/resume' },
  { id: 'contact', label: 'Contact', icon: 'Mail', path: '/contact' },
  { id: 'settings', label: 'Settings', icon: 'Settings', path: '/settings' },
]

export const SUB_NAV_SECTIONS = [
  {
    id: 'projects',
    items: [
      { id: 'ai-ml', label: 'AI/ML' },
      { id: 'computer-vision', label: 'Computer Vision' },
      { id: 'edge-ai', label: 'Edge AI' },
    ],
  },
  {
    id: 'skills',
    items: [
      { id: 'programming', label: 'Programming' },
      { id: 'ai-ml', label: 'AI/ML' },
      { id: 'libraries', label: 'Libraries' },
      { id: 'data', label: 'Data Analytics' },
      { id: 'tools', label: 'Tools' },
      { id: 'languages', label: 'Languages' },
    ],
  },
  {
    id: 'experience',
    items: [
      { id: 'work', label: 'Work' },
      { id: 'internships', label: 'Internships' },
      { id: 'volunteer', label: 'Volunteer' },
    ],
  },
  {
    id: 'achievements',
    items: [
      { id: 'hackathons', label: 'Hackathons' },
      { id: 'certifications', label: 'Certifications' },
      { id: 'awards', label: 'Awards' },
    ],
  },
]

export const SKILLS = [
  { name: 'Python', icon: '🐍', category: 'programming', level: 92 },
  { name: 'SQL', icon: '🗄️', category: 'programming', level: 85 },
  { name: 'Data Structures & Algorithms', icon: '🧩', category: 'programming', level: 82 },
  { name: 'Object-Oriented Programming', icon: '🧱', category: 'programming', level: 85 },
  { name: 'Machine Learning', icon: '🤖', category: 'ai-ml', level: 88 },
  { name: 'Deep Learning', icon: '🧠', category: 'ai-ml', level: 85 },
  { name: 'Natural Language Processing', icon: '💬', category: 'ai-ml', level: 84 },
  { name: 'Computer Vision', icon: '👁️', category: 'ai-ml', level: 86 },
  { name: 'Optical Character Recognition', icon: '📄', category: 'ai-ml', level: 82 },
  { name: 'LSTM', icon: '🔁', category: 'ai-ml', level: 80 },
  { name: 'Large Language Models', icon: '✨', category: 'ai-ml', level: 78 },
  { name: 'Retrieval-Augmented Generation', icon: '🔗', category: 'ai-ml', level: 75 },
  { name: 'TensorFlow', icon: '🧠', category: 'libraries', level: 85 },
  { name: 'Keras', icon: '🔶', category: 'libraries', level: 82 },
  { name: 'OpenCV', icon: '📷', category: 'libraries', level: 87 },
  { name: 'NumPy', icon: '🔢', category: 'libraries', level: 88 },
  { name: 'Pandas', icon: '🐼', category: 'libraries', level: 87 },
  { name: 'Tesseract OCR', icon: '🔤', category: 'libraries', level: 83 },
  { name: 'TrOCR', icon: '🖋️', category: 'libraries', level: 78 },
  { name: 'Exploratory Data Analysis', icon: '📊', category: 'data', level: 85 },
  { name: 'Data Cleaning', icon: '🧹', category: 'data', level: 87 },
  { name: 'Data Preprocessing', icon: '⚙️', category: 'data', level: 86 },
  { name: 'Statistical Analysis', icon: '📈', category: 'data', level: 82 },
  { name: 'Data Visualization', icon: '🎨', category: 'data', level: 84 },
  { name: 'Power BI', icon: '📊', category: 'tools', level: 78 },
  { name: 'Git', icon: '📦', category: 'tools', level: 88 },
  { name: 'GitHub', icon: '🐙', category: 'tools', level: 88 },
  { name: 'Raspberry Pi', icon: '🍓', category: 'tools', level: 75 },
  { name: 'English', icon: '🗣️', category: 'languages', level: 90 },
  { name: 'Telugu', icon: '🇮🇳', category: 'languages', level: 95 },
  { name: 'Hindi', icon: '🇮🇳', category: 'languages', level: 80 },
]

export const PROJECTS = [
  {
    id: 'medisign',
    title: 'MediSign – Handwritten Prescription Translator',
    description: 'AI-powered system that converts handwritten medical prescriptions into readable digital text.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    technologies: ['Python', 'OpenCV', 'Tesseract OCR', 'TrOCR'],
    features: ['OCR Text Extraction', 'Medication Recognition', 'Image Preprocessing', 'Public Dataset Evaluation'],
    category: 'computer-vision',
  },
  {
    id: 'flight-delay',
    title: 'Flight Delay Prediction using LSTM',
    description: 'Deep learning-based flight delay prediction system trained on historical flight datasets.',
    thumbnail: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    technologies: ['Python', 'Pandas', 'NumPy', 'TensorFlow', 'Keras'],
    features: ['Data Cleaning', 'Feature Engineering', 'Weather Features', 'LSTM Model'],
    category: 'ai-ml',
  },
  {
    id: 'edge-ai',
    title: 'Edge AI for Post-Harvest Loss Reduction',
    description: 'Lightweight fruit quality classification model using MobileNetV2 for edge devices.',
    thumbnail: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'MobileNetV2'],
    features: ['Transfer Learning', 'Data Augmentation', 'Fruit Quality Classification', 'Edge Deployment'],
    category: 'edge-ai',
  },
]

export const EXPERIENCES = [
  {
    id: 'quantumready-intern',
    role: 'AI Automation Engineering Intern',
    company: 'QuantumReady',
    period: 'Sep 2026 - Present',
    description: 'Remote — contributing to AI-enabled automation workflows for a messaging-based microlearning platform.',
    highlights: [
      'Developed automated messaging workflows and scheduled delivery of AI-supported learning content using backend data models, webhooks, and databases',
      'Contributed to LLM-assisted features for personalized learning messages and automated learner responses',
      'Performed end-to-end testing and supported production readiness of AI automation workflows',
    ],
  },
]

export const ACHIEVEMENTS = [
  {
    id: 'oracle-ai-foundations',
    title: 'OCI AI Foundations Associate',
    description: 'Oracle Cloud Infrastructure certification covering AI/ML, deep learning, and OCI AI services.',
    date: '2025',
    type: 'certification',
    icon: '📜',
  },
  {
    id: 'ibm-ai-fundamentals',
    title: 'IBM AI Fundamentals',
    description: 'IBM SkillsBuild certification covering AI foundations, machine learning concepts, and AI use cases.',
    date: '2026',
    type: 'certification',
    icon: '📜',
  },
]

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: '#', icon: 'Github' },
  { name: 'LinkedIn', url: '#', icon: 'Linkedin' },
]

export const THEMES = [
  {
    id: 'dark',
    name: 'Dark',
    primary: '#6366f1',
    secondary: '#818cf8',
    accent: '#22d3ee',
    background: '#0b0d15',
    surface: '#12141e',
    surfaceHover: '#1a1d2e',
    text: '#e2e8f0',
    textSecondary: '#94a3b8',
    border: '#1e2235',
    glass: 'rgba(18, 20, 30, 0.8)',
  },
  {
    id: 'light',
    name: 'Light',
    primary: '#6366f1',
    secondary: '#818cf8',
    accent: '#0891b2',
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceHover: '#f1f5f9',
    text: '#0f172a',
    textSecondary: '#64748b',
    border: '#e2e8f0',
    glass: 'rgba(255, 255, 255, 0.8)',
  },
  {
    id: 'midnight',
    name: 'Midnight',
    primary: '#818cf8',
    secondary: '#6366f1',
    accent: '#34d399',
    background: '#070b14',
    surface: '#0f1320',
    surfaceHover: '#181d30',
    text: '#e2e8f0',
    textSecondary: '#94a3b8',
    border: '#1e293b',
    glass: 'rgba(15, 19, 32, 0.85)',
  },
  {
    id: 'slate',
    name: 'Slate',
    primary: '#38bdf8',
    secondary: '#818cf8',
    accent: '#2dd4bf',
    background: '#0c1222',
    surface: '#141b2d',
    surfaceHover: '#1c2541',
    text: '#e2e8f0',
    textSecondary: '#94a3b8',
    border: '#1e293b',
    glass: 'rgba(20, 27, 45, 0.85)',
  },
  {
    id: 'warm',
    name: 'Warm',
    primary: '#f59e0b',
    secondary: '#f97316',
    accent: '#10b981',
    background: '#0f0d0a',
    surface: '#181510',
    surfaceHover: '#221e16',
    text: '#f5f0e8',
    textSecondary: '#a09882',
    border: '#2a241c',
    glass: 'rgba(24, 21, 16, 0.85)',
  },
]

export const QUOTES = [
  "First, solve the problem. Then, write the code. - John Johnson",
  "Simplicity is prerequisite for reliability. - Edsger Dijkstra",
  "Make it work, make it right, make it fast. - Kent Beck",
  "Code is like humor. When you have to explain it, it's bad.",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Talk is cheap. Show me the code. - Linus Torvalds",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
]

export const ABOUT_DATA = {
  bio: "AIML final-year undergraduate with hands-on experience building end-to-end machine learning and AI systems across Computer Vision, OCR/NLP, Edge AI, and Automation. Currently an AI Automation Engineering Intern at QuantumReady, contributing to AI-enabled messaging workflows and LLM-assisted features. Proficient in Python, SQL, TensorFlow, Keras, OpenCV, and applied AI development.",
  education: [
    { degree: 'B.E. in Artificial Intelligence and Machine Learning', school: 'Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad', year: '2023 - 2027 (Expected) · CGPA: 8.62' },
    { degree: 'Intermediate (MPC)', school: 'Sri Chaitanya College, Hyderabad', year: 'Percentage: 98.2%' },
    { degree: 'SSC', school: 'Sri Chaitanya School, Hyderabad', year: 'CGPA: 10.0' },
  ],
  interests: [
    'Artificial Intelligence & Machine Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Optical Character Recognition',
    'Deep Learning',
    'Edge AI',
    'LLM-based Applications',
    'AI Automation',
    'Intelligent Workflow Development',
    'Applied Machine Learning Research',
  ],
}

export const ACTIVITY_DATA = {
  status: 'Open to Opportunities',
  building: 'AI Automation Workflows',
  learning: ['LLM Applications', 'RAG', 'Edge AI'],
  recentUpdates: [
    'Started AI Automation internship at QuantumReady',
    'Built MediSign prescription translator',
    'Developed LSTM flight delay predictor',
    'Explored MobileNetV2 for edge deployment',
  ],
}
