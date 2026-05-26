export const portfolioData = {
  site: {
    logoInitial: "K.",
    logoName: "Kushal",
    logoHighlight: "Poudel",
    footerCopyright: "© 2026 Kushal Poudel. All rights reserved.",
    footerCredit: "Built with React & Tailwind CSS",
  },

  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Blogs", href: "#blogs" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  profile: {
    name: "Kushal Poudel",
    role: "Backend Java Developer | Full-stack Laravel Developer",
    location: "Sinamangal, Kathmandu",
    email: "kushalpoudel240@gmail.com",
    phone: "9863614263 / 9824055306",
    image: "/images/pic3.png",
    imageFallback:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80",
    cv: "/Kushal_Poudel_CV.pdf",
    cvFileName: "Kushal_Poudel_CV.pdf",
    github: "https://github.com/The-Kushal-Poudel",
    linkedin: "https://www.linkedin.com/in/kushal-poudel-317b25241/",
    availability: "Available for work",
  },

  hero: {
    title: "I build digital experiences that are clean, fast & meaningful.",
    description:
      "BCA graduate focused on building Laravel applications, backend systems and modern full-stack web experiences using Java, PHP, SQL, React and Tailwind CSS.",
    primaryButton: "Download CV",
    secondaryButton: "View My Projects",
    secondaryLink: "#projects",
    chips: [
      { label: "Laravel", className: "left-2 top-8 z-20", delay: 0.7 },
      { label: "React", className: "right-4 top-24 z-20 hidden sm:block", delay: 1.1 },
      { label: "Java", className: "bottom-36 right-12 z-20 hidden sm:block", delay: 1.45 },
    ],
  },

  about: {
    label: "About Me",
    title: "Turning ideas into functional & beautiful web applications.",
    description:
      "I am a BCA graduate and backend-focused developer from Kathmandu. I enjoy building clean, dynamic and useful web applications with Laravel, PHP, SQL, React and Tailwind CSS. I am also exploring Java, Spring and backend development concepts to grow as a stronger full-stack developer.",
    signature: "Kushal",
    cards: [
      {
        title: "Clean Code",
        icon: "Code",
        text: "Writing maintainable and scalable code with simple structure and best practices.",
      },
      {
        title: "Strong Backend",
        icon: "Database",
        text: "Building robust APIs, dashboards and backend systems using Laravel, PHP and Java.",
      },
      {
        title: "Responsive UI",
        icon: "Monitor",
        text: "Creating clean, modern and mobile-friendly interfaces using React and Tailwind CSS.",
      },
      {
        title: "Always Learning",
        icon: "Rocket",
        text: "Exploring new technologies and improving through practical real-world projects.",
      },
    ],
  },

  techStack: {
    label: "Technologies I Work With",
    items: ["Laravel", "PHP", "MySQL", "React", "Tailwind CSS", "Git", "Java", "Spring", "PostgreSQL"],
  },

  projectsSection: {
    label: "Featured Projects",
    title: "Some things I’ve built.",
    ctaText: "Need a similar project?",
    ctaLink: "#contact",
    items: [
      {
        title: "News Portal",
        tag: "Laravel • SQL • Tailwind CSS",
        image:
          "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80",
        desc: "User and admin based news portal website with dashboard, category management and role based access.",
        link: "#",
      },
      {
        title: "Sayumi Travels and Tours",
        tag: "Laravel • SQL • Tailwind CSS • Git",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        desc: "Travel and tours website with dynamic packages, destinations, booking forms and admin management features.",
        link: "https://sayumiglobal.com/",
      },
      {
        title: "ConvertTree",
        tag: "Laravel • SQL • Tailwind CSS",
        status: "Launching Soon",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        desc: "All-in-one online tools platform for PDF, image, email, video and daily utility tools.",
        link: "https://www.converttree.com/",
      },
    ],
  },

  blogsSection: {
    label: "Latest Blogs",
    title: "Thoughts, learning & development notes.",
    description:
      "I write about Laravel, React, backend development, project building and my developer journey.",
    ctaText: "Read all blogs",
    ctaLink: "#blogs",
    items: [
      {
        title: "How I Built My Portfolio Website",
        category: "React",
        date: "May 2026",
        desc: "A simple explanation of how I created my developer portfolio using React, Tailwind CSS and Framer Motion.",
        link: "#",
      },
      {
        title: "My Journey as a Backend Java Developer",
        category: "Career",
        date: "May 2026",
        desc: "My learning journey, internship experience and how I am growing as a backend developer.",
        link: "#",
      },
      {
        title: "Laravel CRUD Project Explained",
        category: "Laravel",
        date: "May 2026",
        desc: "A beginner-friendly explanation of CRUD, routing, controllers, models, migrations and database flow in Laravel.",
        link: "#",
      },
    ],
  },

  journeySection: {
    label: "My Journey",
    title: "Education & Experience",
    items: [
      {
        year: "7th January 2024 - 4th April 2024",
        title: "Backend Java Developer Intern",
        company: "FoneNxt",
        icon: "Briefcase",
        text: "Worked as an intern and learned Java, PostgreSQL, use case flow and backend development practices.",
      },
      {
        year: "2020 - 2025",
        title: "Bachelor of Computer Application",
        company: "Patan Multiple Campus",
        icon: "GraduationCap",
        text: "Completed a bachelor’s degree focused on programming, database systems, web development and software engineering.",
      },
      {
        year: "Present",
        title: "Laravel & Web Development Projects",
        company: "Softsaron Pvt. Ltd. & Freelance",
        icon: "Laptop",
        text: "Built Laravel based dynamic websites with admin panels, responsive UI, database integration and Git workflow.",
      },
    ],
  },

  contact: {
    label: "Let's Connect",
    title: "Have a project in mind? Let’s build something amazing together.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Workspace",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email Address",
    messagePlaceholder: "Your Message",
    buttonText: "Send Message",
    emailSubjectPrefix: "Portfolio inquiry from",
  },
};
