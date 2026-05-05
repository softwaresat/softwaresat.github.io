export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'AI Engineering Intern',
    company: 'Stellar AI',
    period: 'Placeholder',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    ],
  },
  {
    role: 'Machine Learning Engineering Intern',
    company: 'Snorkel AI',
    period: 'Placeholder',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    ],
  },
  {
    role: 'Applied AI Research Assistant',
    company: 'Pestilli Lab, UT Austin',
    period: 'August 2025 - Present',
    bullets: [
      'Developed PyTorch pipelines to transform surface-based MRI volumes from native space to fsLR space, reducing memory usage by 30%.',
      'Engineered a Vision Transformer for retinotopic mapping with 15% better out-of-domain performance over CNN models.',
      'Built reproducible Docker and Python workflows to benchmark models against 2 baselines across 3 tasks using multiple random seeds.',
    ],
  },
  {
    role: 'AI Trainer',
    company: 'Mercor Inc.',
    period: 'April 2025 - June 2025',
    bullets: [
      'Sanitized high-dimensional mathematical datasets using Python automation.',
      'Verified data integrity for 500+ prompts.',
      'Corrected LaTeX, structural errors, and hallucinated model outputs.',
      'Developed standardized labeling schemas for mathematical reasoning steps.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Builder Homesite Inc.',
    period: 'June 2023 - August 2023',
    bullets: [
      'Standardized Selenium debugging via Dockerized environments.',
      'Authored internal software design documents on Confluence.',
      'Maintained 100+ tests.',
      'Migrated core system validation from Playwright to Selenium.',
      'Resolved 10+ Jira tickets monthly.',
      'Optimized CI pipeline runtimes.',
    ],
  },
];
