// Edit portfolio copy and links here. Leave unconfirmed URLs null.
// Contact URLs can use mailto: for email or https: for public profiles.
export const portfolio = {
  name: 'Haikal Ramli',
  logo: 'HR.',
  monogram: 'HR',
  navigation: ['About', 'Skills', 'Projects', 'Contact'],
  hero: {
    eyebrow: 'CREATIVITY MEETS TECHNOLOGY',
    greeting: "Hi, I'm Haikal.",
    role: 'Creative & Tech Enthusiast',
    introduction: 'Exploring the space between design and technology through websites, videos, and digital experiences.',
    projectsLabel: 'Explore Projects',
    contactLabel: 'Contact Me',
  },
  about: {
    label: '01 / ABOUT',
    title: 'A little about me.',
    paragraphs: [
      "I'm Haikal, a creative and technology enthusiast who enjoys exploring web development, digital content creation, and practical digital tools.",
      'I love learning by building projects and turning ideas into experiences.',
    ],
    note: 'Curious by nature. Creative by practice.',
  },
  skillsSection: { label: '02 / SKILLS', title: 'My creative toolkit.', description: 'The areas I enjoy exploring and building in.' },
  skills: [
    { title: 'Web Development', description: 'Building clean, responsive experiences for the web.', icon: 'code' },
    { title: 'Video Editing', description: 'Shaping footage into engaging visual stories.', icon: 'video' },
    { title: 'Digital Design', description: 'Exploring layouts, visuals, and thoughtful details.', icon: 'design' },
    { title: 'Digital Marketing', description: 'Connecting creative ideas with digital audiences.', icon: 'marketing' },
  ],
  projectsSection: {
    label: '03 / FEATURED PROJECTS', title: 'Ideas taking shape.',
    description: 'A selection of personal digital projects and explorations.',
    githubLabel: 'GitHub', demoLabel: 'Live Demo',
  },
  projects: [
    { title: 'MITT AI Video Editor', description: 'A work-in-progress AI-assisted video editing tool designed to simplify short-form video production.', category: 'Video & Technology', status: 'In Development', icon: 'video', githubUrl: null, demoUrl: null },
    { title: 'Open When Letters', description: 'An interactive digital experience for creating meaningful personal letters.', category: 'Interactive Experience', status: 'Personal Project', icon: 'letters', githubUrl: null, demoUrl: null },
    { title: 'Digital Invitation', description: 'A digital invitation concept focused on simple, personalized experiences.', category: 'Web & Digital Design', status: 'Personal Project', icon: 'invitation', githubUrl: null, demoUrl: null },
  ],
  contact: {
    label: '04 / CONTACT',
    title: 'Let’s connect.',
    description: 'Creative ideas, practical tools, and thoughtful digital experiences are always worth a conversation.',
    links: [
      { label: 'Email', icon: 'email', url: null },
      { label: 'GitHub', icon: 'github', url: null },
      { label: 'LinkedIn', icon: 'linkedin', url: null },
    ],
  },
  footer: 'Made with curiosity & creativity.',
}
