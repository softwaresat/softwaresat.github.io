export type Project = {
  title: string;
  slug: string;
  category: string;
  hook: string;
  description: string;
  details: string[];
  stack: string[];
  metrics?: string[];
  github?: string;
  featured?: boolean;
  spotlight?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Retinotopic Mapping with Neural Networks',
    slug: 'retinotopic-mapping',
    category: 'Applied AI Research / Neural Networks / Vision Science',
    hook: 'Surface-based MRI pipelines and a Vision Transformer for retinotopic prediction.',
    description:
      'Applied AI research at Pestilli Lab, UT Austin, with Junbeom Kwon and Franco Pestilli. The work focuses on neural network systems for retinotopic mapping using surface-based MRI and cortical geometry data.',
    details: [
      'Developed PyTorch pipelines to transform surface-based MRI volumes from native space to fsLR space.',
      'Reduced memory usage by 30% while improving workflow efficiency for large geometry-aware datasets.',
      'Engineered a Vision Transformer for retinotopic mapping with 15% better out-of-domain performance than CNN baselines.',
      'Built reproducible Docker and Python workflows and benchmarked models against 2 baselines across 3 tasks using multiple random seeds.',
    ],
    stack: ['PyTorch', 'Python', 'Docker', 'MRI Processing', 'Vision Transformer', 'Benchmarking'],
    metrics: ['30% memory reduction', '15% better OOD performance', '2 baselines', '3 benchmark tasks'],
    featured: true,
    spotlight: true,
  },
  {
    title: 'GreenCompass',
    slug: 'greencompass',
    category: 'AI Agent / Mobile App / Travel / Food Tech',
    hook: 'An AI agent that finds, scrapes, and reasons over restaurant menus so travelers can find safe vegetarian options.',
    description:
      'GreenCompass is an AI-powered dietary navigation agent that helps travelers find vegetarian and vegan options at nearby restaurants through location search, autonomous menu discovery, scraping, and Gemini-based reasoning.',
    details: [
      'Uses Google Places to discover nearby restaurants and autonomously locate menu pages.',
      'Scrapes, extracts, and reasons over menu content to classify vegetarian compatibility and explain results.',
      'Parallelizes scraping and menu analysis with worker threads and supports saved reports and regeneration flows.',
      'Optimized parsing with a C++ native add-on for faster HTML structure analysis.',
    ],
    stack: ['React Native', 'Node.js', 'Express', 'Google Places API', 'Gemini API', 'Playwright', 'Worker Threads', 'C++'],
    metrics: ['95% vegetarian dish accuracy', '40% faster HTML parsing'],
    github: 'https://github.com/softwaresat/GreenCompass',
    featured: true,
  },
  {
    title: 'AdTalk',
    slug: 'adtalk',
    category: 'AI Agent / Audio Verification / Cloud Backend',
    hook: 'An AI agent for verifying ad impressions using transcription, embeddings, and campaign validation workflows.',
    description:
      'AdTalk is an AI verification agent for ad impression and campaign validation. It uses speech transcription, semantic matching, and backend workflows to verify whether campaigns are being delivered correctly.',
    details: [
      'Uses Whisper for audio processing and OpenAI embeddings for semantic impression verification.',
      'Stores campaign and event data in a SQL-based backend with analytics for verification monitoring.',
      'Automates validation of incoming ad campaign data with deployment on Google Cloud Run.',
      'Designed for high-throughput validation across thousands of distributed events.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'OpenAI API', 'Whisper', 'Docker', 'Google Cloud Run'],
    metrics: ['30% lower cloud costs', 'Thousands of distributed events'],
    featured: true,
  },
  {
    title: 'SkillParse-Engine',
    slug: 'skillparse-engine',
    category: 'Fine-Tuned LLM / Recruiting AI / Structured Data Extraction',
    hook: 'A fine-tuned Qwen 2.5 system that turns messy career text into structured skill data.',
    description:
      'SkillParse-Engine parses unstructured resume or profile text into normalized skill signals that can power recruiting, ATS workflows, job matching, or freelancer-client matching.',
    details: [
      'Fine-tuned a Qwen 2.5 model for structured skill parsing instead of relying only on prompt-based extraction.',
      'Converts messy career text into normalized skill objects for downstream workflows and ranking.',
      'Demonstrates domain-specific data formatting, model adaptation, and applied LLM system design.',
      'Designed for recruiting platforms, resume analysis, job matching, and marketplace search.',
    ],
    stack: ['Python', 'Qwen 2.5', 'Unsloth', 'Fine-Tuning', 'Structured Extraction', 'LLM Evaluation'],
    github: 'https://github.com/softwaresat/SkillParse-Engine',
    featured: true,
  },
  {
    title: 'StageNextDoor',
    slug: 'stagenextdoor',
    category: 'Geo-Spatial Mobile App / Creator Platform',
    hook: 'A map-based mobile platform for discovering local artists, shows, and underground performances.',
    description:
      'StageNextDoor is a React Native and TypeScript app for discovering local artists and underground performances through a map-first event discovery experience.',
    details: [
      'Built with a mobile-first map interface for nearby underground concerts and performances.',
      'Supports artist portfolios, event schedules, and dense event marker rendering.',
      'Shows product thinking around discovery, location features, and creator ecosystems.',
    ],
    stack: ['React Native', 'TypeScript', 'Firebase', 'Google Maps API', 'Express.js'],
    github: 'https://github.com/softwaresat/StageNextDoor',
  },
  {
    title: 'Polara',
    slug: 'polara',
    category: 'Full-Stack Product / Benefits Platform / Accessibility',
    hook: 'A full-stack benefits dashboard that turns complex eligibility information into clear, user-centered guidance.',
    description:
      'Polara is a benefits navigation platform built around a visual dashboard for helping users understand eligibility, benefit changes, and personalized alerts.',
    details: [
      'Built with a React/Vite frontend and Node/Express backend.',
      'Uses dashboard patterns to organize complex benefits information into actionable views.',
      'Designed with accessibility, multilingual support, and profile-based tracking in mind.',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Dashboard UX', 'Accessibility'],
    github: 'https://github.com/softwaresat/Polara',
  },
  {
    title: 'Peggle Dash',
    slug: 'peggle-dash',
    category: 'Interactive Web Game / Frontend Engineering / Game Logic',
    hook: 'A polished interactive browser game showing game logic, motion, and frontend creativity.',
    description:
      'Peggle Dash demonstrates frontend polish, physics-style interaction, game state management, and fast prototyping through a playful browser game.',
    details: [
      'Highlights game logic, collision-style mechanics, scoring, and responsive browser UI.',
      'Shows a more creative side of frontend engineering beyond dashboards and AI tooling.',
      'Useful as a smaller project that adds personality without weakening the professional brand.',
    ],
    stack: ['JavaScript', 'Game Logic', 'Animation', 'Responsive UI'],
    github: 'https://github.com/softwaresat/Peggle-Dash',
  },
];

export const featuredProjectTitles = new Set([
  'Retinotopic Mapping with Neural Networks',
  'GreenCompass',
  'AdTalk',
  'SkillParse-Engine',
]);
