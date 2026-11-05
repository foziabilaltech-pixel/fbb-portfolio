/*
  portfolioData.js
  ----------------
  All the content of the site lives here (except the About paragraph and Hero
  description which are personal texts kept inside their components).

  Images MUST be imported as modules (Vite bundles them) - never use string
  paths like "src/assets/images/project-1.jpg" directly.
*/

import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.jpg';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.jpg';
import project5 from '../assets/images/project-5.jpg';
import project6 from '../assets/images/project-6.jpg';

// Navbar links (Services removed as requested)
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" }
];

// Professions for the typewriter effect (same as original script.js)
export const professions = [
  'Full-Stack Developer',
  'Frontend Engineer',
  'Backend Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
  
];

// Hero stats
export const heroStats = [
  { number: '30+', label: 'Projects Completed' },
  { number: '2+', label: 'Years Experience' },
  { number: '20+', label: 'Happy Clients' },
];

// Social icons with their brand hover colors (same as original)
export const socialLinks = [
  {
    name: 'WhatsApp',
    icon: 'fab fa-whatsapp',
    href: '#',
    hoverClass: 'hover:bg-[#25d366]',
  },
  {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    href: '#',
    hoverClass: 'hover:bg-[#0077b5]',
  },
  {
    name: 'GitHub',
    icon: 'fab fa-github',
    href: '#',
    hoverClass: 'hover:bg-[#333333]',
  },
  {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    href: '#',
    hoverClass:
      'hover:bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)]',
  },
];

// Skills section: 6 categories x 3 skills, with progress bar levels (%)
export const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: 'fab fa-html5', level: 95 },
      { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 },
      { name: 'JavaScript', icon: 'fab fa-js-square', level: 85 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: 'fab fa-node-js', level: 85 },
      { name: 'Python', icon: 'fab fa-python', level: 80 },
      { name: 'Express.js', icon: 'fas fa-server', level: 80 },
    ],
  },
  {
    title: 'Database Management',
    skills: [
      { name: 'MongoDB', icon: 'fas fa-database', level: 75 },
      { name: 'MySQL', icon: 'fas fa-database', level: 80 },
      { name: 'PostgreSQL', icon: 'fas fa-database', level: 70 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt', level: 90 },
      { name: 'Docker', icon: 'fab fa-docker', level: 70 },
      { name: 'VS Code', icon: 'fas fa-code', level: 95 },
    ],
  },
  {
    title: 'UI/UX Design',
    skills: [
      { name: 'Figma', icon: 'fab fa-figma', level: 85 },
      { name: 'Adobe XD', icon: 'fas fa-palette', level: 75 },
      { name: 'Responsive Design', icon: 'fas fa-mobile-alt', level: 90 },
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', icon: 'fab fa-react', level: 75 },
      { name: 'Android', icon: 'fab fa-android', level: 70 },
      { name: 'iOS', icon: 'fab fa-apple', level: 65 },
    ],
  },
];

// Projects section (images imported as modules at the top)
export const projects = [
  {
    image: project1,
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    image: project2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
  },
  {
    image: project3,
    title: 'Weather Dashboard',
    description:
      'An interactive weather dashboard with location-based forecasts, weather maps, and historical data visualization.',
    tech: ['JavaScript', 'Chart.js', 'OpenWeather API'],
  },
  {
    image: project4,
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
  },
  {
    image: project5,
    title: 'Blog Platform',
    description:
      'A full-featured blog platform with CMS capabilities, user management, and SEO optimization features.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
  },
  {
    image: project6,
    title: 'Social Media Dashboard',
    description:
      'A comprehensive social media management dashboard with analytics, scheduling, and multi-platform integration.',
    tech: ['React', 'D3.js', 'Express.js'],
  },
];

// Contact info cards
export const contactInfo = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    value: 'foziabilaltech@example.com',
    action: 'Send Email',
    href: 'mailto:foziabilaltech@example.com',
    action: 'Call me',
    external: 'false',
  },
 
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    value: 'Punjab, Pakistan',
    action: 'View on Map',
    href: '#',
    external: true,
  },
 
];

// About section highlights
export const about = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'Education',
    text: 'Computer Science',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    text: 'Pakistan',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Experience',
    text: '2+ Years in Web Development',
  },
];

// Blog section
export const blogposts = [
  {
     id: 1,
      title: "Why I Started Learning React",
      category: "React JS",
      date: "Oct 24, 2026",
      excerpt: "React ne frontend development ko hamesha ke liye badal diya hai. Is blog mein main apna safar share kar rahi hoon...",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
      fullContent: `React is one of the most popular JavaScript libraries for building user interfaces. When I first started learning web development, I was using plain HTML, CSS, and JavaScript. It was fun, but as my projects grew bigger, managing the code became a nightmare.
      
      Then I discovered React. The concept of "Components" completely blew my mind. Instead of writing one huge HTML file, I could break my website into small, reusable pieces.
      
      If you are also a beginner, my advice is simple: Don't give up. Build small things. The more you code, the more it makes sense.`
  },
  {
     id: 2,
      title: "CSS Tips for Modern UI Design",
      category: "CSS",
      date: "Oct 15, 2026",
      excerpt: "Ek achi website banane ke liye sirf code kafi nahi hota, design sense bhi zaroori hai. Yahan hain mere kuch favourite tips...",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop",
      fullContent: `Design is not just about making things look pretty; it's about making them work well. Here are a few CSS tips I always keep in mind:
      
      1. Use Flexbox and Grid for layouts.
      2. Keep your color palette limited (like this portfolio uses Cyan and Dark theme).
      3. Never forget hover effects. They make the UI feel alive.
      4. Always make sure your design is responsive on mobile screens.`
  },
  {id: 3,
      title: "How I Stay Motivated as a Developer",
      category: "Career",
      date: "Oct 02, 2026",
      excerpt: "Coding seekhna aasan nahi hai. Kabhi kabhi frustration hoti hai. Is blog mein maine apne ways share kiye hain...",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
      fullContent: `There are days when nothing works, and you just want to quit. But here is how I push through:
      
      - I take a step back and go for a walk.
      - I look at my old code and realize how much I have improved.
      - I remind myself why I started this journey.
      
      Remember, every expert was once a beginner. Keep going!`},

];