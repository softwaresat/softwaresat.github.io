export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'C++', 'C', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS', 'ARM'],
  },
  {
    title: 'AI / ML',
    items: ['PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'LangChain', 'OpenAI API', 'Gemini API', 'Qwen 2.5', 'Unsloth'],
  },
  {
    title: 'Frontend / Mobile',
    items: ['React Native', 'React', 'TypeScript', 'Expo', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'Firebase'],
  },
  {
    title: 'Cloud / Tools',
    items: ['Docker', 'Git', 'Linux', 'Google Cloud Platform', 'Oracle Cloud', 'AWS', 'Selenium'],
  },
];
