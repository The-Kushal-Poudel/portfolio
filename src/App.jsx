import { Analytics } from "@vercel/analytics/react";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      <Analytics />
    </>
  );
}
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Code,
  Database,
  Monitor,
  Rocket,
  Briefcase,
  GraduationCap,
  Laptop,
  Sparkles,
  Zap,
} from "lucide-react";

function GitHubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12.28c0 5.2 3.36 9.6 8.02 11.15.58.1.8-.26.8-.57v-2.02c-3.27.73-3.96-1.61-3.96-1.61-.53-1.4-1.3-1.77-1.3-1.77-1.07-.75.08-.74.08-.74 1.18.09 1.8 1.25 1.8 1.25 1.05 1.85 2.76 1.31 3.43 1 .1-.78.41-1.31.74-1.61-2.61-.31-5.36-1.34-5.36-5.96 0-1.32.46-2.39 1.22-3.23-.12-.31-.53-1.55.12-3.19 0 0 1-.33 3.26 1.23a11.05 11.05 0 0 1 5.94 0c2.26-1.56 3.26-1.23 3.26-1.23.65 1.64.24 2.88.12 3.19.76.84 1.22 1.91 1.22 3.23 0 4.63-2.76 5.64-5.38 5.95.42.38.8 1.11.8 2.24v3.32c0 .31.21.68.81.57A11.8 11.8 0 0 0 23.5 12.28 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

const profile = {
  name: "Kushal Poudel",
  role: "Backend Java Developer | Full-stack Laravel Developer",
  location: "Sinamangal, Kathmandu",
  email: "kushalpoudel240@gmail.com",
  phone: "9863614263 / 9824055306",
  image: "/images/pic3.png",
  cv: "/Kushal_Poudel_CV.pdf",
  github: "https://github.com/The-Kushal-Poudel",
  linkedin: "https://www.linkedin.com/in/kushal-poudel-317b25241/",
};

const aboutCards = [
  {
    title: "Clean Code",
    icon: Code,
    text: "Writing maintainable and scalable code with simple structure and best practices.",
  },
  {
    title: "Strong Backend",
    icon: Database,
    text: "Building robust APIs, dashboards and backend systems using Laravel, PHP and Java.",
  },
  {
    title: "Responsive UI",
    icon: Monitor,
    text: "Creating clean, modern and mobile-friendly interfaces using React and Tailwind CSS.",
  },
  {
    title: "Always Learning",
    icon: Rocket,
    text: "Exploring new technologies and improving through practical real-world projects.",
  },
];

const technologies = ["Laravel", "PHP", "MySQL", "React", "Tailwind CSS", "Git", "Java", "Spring", "PostgreSQL"];

const projects = [
  {
    title: "News Portal",
    tag: "Laravel • SQL • Tailwind CSS",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80",
    desc: "User and admin based news portal website with dashboard, category management and role based access.",
    link: "#",
  },
  {
    title: "Sayumi Travels and Tours",
    tag: "Laravel • SQL • Tailwind CSS • Git",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    desc: "Travel and tours website with dynamic packages, destinations, booking forms and admin management features.",
    link: "https://sayumiglobal.com/",
  },
  {
    title: "ConvertTree",
    tag: "Laravel • SQL • Tailwind CSS",
    status: "Launching Soon",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    desc: "All-in-one online tools platform for PDF, image, email, video and daily utility tools.",
    link: "https://www.converttree.com/",
  },
];

const journey = [
  {
    year: "7th January 2024 - 4th April 2024 (3 months)",
    title: "Backend Java Developer Intern",
    company: "FoneNxt",
    icon: Briefcase,
    text: "Worked as an intern and learned Java, PostgreSQL, use case flow and backend development practices.",
  },
  {
    year: "2020 - 2025",
    title: "Bachelor of Computer Application",
    company: "Patan Multiple Campus",
    icon: GraduationCap,
    text: "Completed a bachelor’s degree focused on programming, database systems, web development and software engineering.",
  },
  {
    year: "Present",
    title: "Laravel & Web Development Projects",
    company: "Softsaron Pvt. Ltd. & Freelance",
    icon: Laptop,
    text: "Built Laravel based dynamic websites with admin panels, responsive UI, database integration and Git workflow.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 42, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50, filter: "blur(10px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.82, y: 28, rotate: -2, filter: "blur(12px)" },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[999] h-1 w-full origin-left bg-[#a78d67]"
    />
  );
}

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 60, -20, 0], y: [0, -50, 30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-[#d6bd93]/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -80, 30, 0], y: [0, 45, -35, 0], scale: [1, 0.9, 1.18, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-28 top-40 h-80 w-80 rounded-full bg-[#a78d67]/20 blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute left-[48%] top-12 h-44 w-44 rounded-full border border-[#cab99e]/40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-[18%] h-28 w-28 rounded-full border border-dashed border-[#b9a17a]/50"
      />
    </div>
  );
}

function FloatingChip({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.9 }}
      animate={{ opacity: 1, y: [0, -12, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 3.4, delay, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2a2824] shadow-xl shadow-black/10 backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

function AnimatedTitle({ children, className = "" }) {
  const words = children.split(" ");

  return (
    <motion.h1 variants={stagger} initial="hidden" animate="show" className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 48, rotateX: -80, filter: "blur(8px)" },
            show: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="mr-[0.22em] inline-block origin-bottom"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function SocialButton({ children, href = "#" }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -7, scale: 1.08, rotate: 4 }}
      whileTap={{ scale: 0.92 }}
      className="grid h-10 w-10 place-items-center rounded-full border border-[#e6ded0] bg-white text-[#151412] shadow-sm transition hover:border-[#b59a71] hover:text-[#b59a71]"
    >
      {children}
    </motion.a>
  );
}

function Header() {
  const nav = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-[#e6ded0]/80 bg-[#f8f3eb]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-5 py-4 lg:px-6">
        <motion.a href="#home" whileHover={{ scale: 1.04 }} className="flex shrink-0 items-center gap-3">
          <motion.span
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-serif text-4xl font-black leading-none tracking-tight text-[#151412]"
          >
            K.
          </motion.span>
          <span className="hidden font-serif text-lg font-semibold tracking-wide text-[#29251f] sm:block">
            Kushal <span className="text-[#a78d67]">Poudel</span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-7 text-[13px] font-semibold text-[#332f29] md:flex">
          {nav.map((item, index) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              href={`#${item.toLowerCase()}`}
              className="relative transition hover:text-[#a78d67] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#151412] after:transition-all hover:after:w-full"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="hidden items-center gap-3 rounded-lg bg-[#151412] px-5 py-3 text-[13px] font-semibold text-white shadow-xl shadow-black/10 transition hover:bg-[#2a2824] lg:flex"
        >
          Let's Work Together <ArrowRight size={15} />
        </motion.a>
      </div>
    </motion.header>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -90]);
  const imageY = useTransform(scrollYProgress, [0, 0.35], [0, 70]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.35], [0, -4]);

  return (
    <section id="home" className="relative overflow-hidden bg-[#f8f3eb]">
      <AnimatedBackground />
      <div className="absolute inset-0 opacity-[0.45] [background-image:radial-gradient(#d2c4ae_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 pb-14 pt-10 lg:grid-cols-[0.86fr_1.14fr] lg:px-6 lg:pb-16 lg:pt-14">
        <motion.div style={{ y: heroY }} variants={stagger} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="mb-5 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.35em] text-[#a78d67]">
            <motion.span
              animate={{ scale: [1, 1.8, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-[#b69a70]"
            />
            {profile.role}
          </motion.p>

          <AnimatedTitle className="max-w-[640px] font-serif text-[42px] leading-[1.02] tracking-tight text-[#1f1c18] sm:text-5xl lg:text-[64px]">
            I build digital experiences that are clean, fast & meaningful.
          </AnimatedTitle>

          <motion.p variants={fadeUp} className="mt-5 max-w-[560px] text-[15px] leading-8 text-[#5f574d]">
            BCA graduate focused on building Laravel applications, backend systems and modern full-stack web experiences using Java, PHP, SQL, React and Tailwind CSS.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={profile.cv}
              download ="Kushal_Poudel_CV.pdf"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-3 rounded-md bg-[#151412] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#292723]"
            >
              Download CV <Download size={16} />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-3 rounded-md border border-[#beb3a2] bg-white/30 px-7 py-4 text-sm font-semibold text-[#1d1b17] transition hover:bg-white"
            >
              View My Projects <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#8c806f]">Follow me on</span>
            <SocialButton href={profile.github}><GitHubIcon size={17} /></SocialButton>
            <SocialButton href={profile.linkedin}><LinkedInIcon size={17} /></SocialButton>
            <SocialButton href={`mailto:${profile.email}`}><Mail size={17} /></SocialButton>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY, rotate: imageRotate }}
          initial={{ opacity: 0, scale: 0.88, rotate: 4, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto min-h-[455px] w-full max-w-[610px] lg:mx-0"
        >
          <FloatingChip delay={0.7} className="left-2 top-8 z-20">
            Laravel
          </FloatingChip>
          <FloatingChip delay={1.1} className="right-4 top-24 z-20 hidden sm:block">
            React
          </FloatingChip>
          <FloatingChip delay={1.45} className="bottom-36 right-12 z-20 hidden sm:block">
            Java
          </FloatingChip>

          <motion.div
            whileHover={{ scale: 1.035, rotate: -1.5 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="absolute right-0 top-0 h-[410px] w-[88%] overflow-hidden rounded-[18px] bg-[#d8cbb8] shadow-2xl shadow-black/15"
          >
            <motion.img
              src={profile.image}
              alt={profile.name}
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80";
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="absolute bottom-8 left-0 w-[92%] max-w-[410px] rounded-xl border border-white/10 bg-[#171614]/90 p-5 text-white shadow-2xl shadow-black/25 backdrop-blur-xl sm:left-8"
          >
            <div className="grid gap-4 text-sm">
              <div className="flex items-center gap-4"><MapPin size={17} /><span className="text-white/80">{profile.location}</span></div>
              <div className="flex items-center gap-4"><Mail size={17} /><span className="text-white/80">{profile.email}</span></div>
              <div className="flex items-center gap-4"><Phone size={17} /><span className="text-white/80">{profile.phone}</span></div>
              <div className="flex items-center gap-4">
                <motion.span
                  animate={{ scale: [1, 1.55, 1], opacity: [1, 0.55, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-500/40"
                />
                <span className="font-semibold">Available for work</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[-54px] top-56 hidden items-center gap-8 xl:flex"
          >
            <span className="h-px w-20 bg-[#d8ccba]" />
            <span className="rotate-90 text-[10px] font-black uppercase tracking-[0.45em] text-[#8f816d]">Scroll Down</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden border-y border-[#e6ded0] bg-[#f8f3eb] py-14">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -left-24 top-10 h-52 w-52 rounded-full border border-dashed border-[#d6c7ad]"
      />
      <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:px-6">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.35em] text-[#a78d67]">About Me</p>
          <h2 className="font-serif text-3xl leading-tight text-[#211e19] lg:text-[38px]">
            Turning ideas into functional & beautiful web applications.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-8 text-[#62594e]">
            I am a BCA graduate and backend-focused developer from Kathmandu. I enjoy building clean, dynamic and useful web applications with Laravel, PHP, SQL, React and Tailwind CSS. I am also exploring Java, Spring and backend development concepts to grow as a stronger full-stack developer.
          </p>
          <motion.p
            whileInView={{ x: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-6 font-serif text-3xl italic text-[#a78d67]"
          >
            Kushal
          </motion.p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {aboutCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={popIn}
                whileHover={{
                  y: -14,
                  rotate: -1.5,
                  scale: 1.035,
                  transition: { type: "spring", stiffness: 220, damping: 16 },
                }}
                className="group rounded-2xl border border-[#e6ded0] bg-white/55 p-5 shadow-sm transition hover:bg-white hover:shadow-xl hover:shadow-black/5"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 grid h-14 w-14 place-items-center rounded-full bg-[#f0eadf] text-[#1c1a17] transition group-hover:bg-[#1c1a17] group-hover:text-white"
                >
                  <Icon size={23} />
                </motion.div>
                <h3 className="mb-3 text-base font-bold text-[#211f1a]">{card.title}</h3>
                <p className="text-sm leading-7 text-[#665e53]">{card.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TechStack() {
  const repeated = [...technologies, ...technologies, ...technologies];

  return (
    <section id="skills" className="relative overflow-hidden bg-[#151513] py-12 text-white">
      <motion.div
        animate={{ x: ["-20%", "0%", "-20%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 left-0 w-[160%] opacity-[0.05] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:50px_50px]"
      />
      <div className="relative mx-auto w-full max-w-[1180px] px-5 lg:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-[11px] font-black uppercase tracking-[0.4em] text-[#b9a17a]"
        >
          Technologies I Work With
        </motion.p>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-4"
          >
            {repeated.map((tech, index) => (
              <motion.div
                key={`${tech}-${index}`}
                whileHover={{ y: -8, scale: 1.08 }}
                className="flex min-w-[145px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/75 backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#b9a17a]" /> {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#f8f3eb] py-14">
      <motion.div
        animate={{ y: [0, -24, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-8 top-12 hidden rounded-full border border-[#dfd2bf] bg-white/35 p-5 text-[#a78d67] shadow-xl shadow-black/5 lg:block"
      >
        <Sparkles size={32} />
      </motion.div>

      <div className="mx-auto w-full max-w-[1180px] px-5 lg:px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.35em] text-[#a78d67]">Featured Projects</p>
            <h2 className="font-serif text-4xl text-[#211f1a] lg:text-5xl">Some things I’ve built.</h2>
          </motion.div>
          <motion.a variants={fadeUp} whileHover={{ x: 8 }} href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#211f1a] hover:text-[#a78d67]">
            View all projects <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={popIn}
              whileHover={{
                y: -18,
                rotateX: 4,
                rotateY: -4,
                scale: 1.025,
                transition: { type: "spring", stiffness: 190, damping: 16 },
              }}
              className="group overflow-hidden rounded-xl border border-[#e6ded0] bg-white shadow-sm transition hover:shadow-2xl hover:shadow-black/10"
            >
              <div className="relative h-40 overflow-hidden bg-[#ded4c4]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.16 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />
                <motion.div
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                />
                {project.status && (
                  <motion.span
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute left-4 top-4 rounded-full bg-[#151412] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white"
                  >
                    {project.status}
                  </motion.span>
                )}
              </div>
              <div className="p-6">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-[#a78d67]">{project.tag}</p>
                <h3 className="mb-3 text-xl font-bold text-[#201d18]">{project.title}</h3>
                <p className="min-h-[72px] text-sm leading-7 text-[#655d52]">{project.desc}</p>
                <motion.a
                  href={project.link}
                  whileHover={{ x: 8 }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#a78d67]"
                >
                  {project.link === "#" ? "Live Soon" : "View Project"} <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#151513] py-14 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#b9a17a] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-3 text-[11px] font-black uppercase tracking-[0.35em] text-[#b9a17a]">
          My Journey
        </motion.p>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12 font-serif text-4xl lg:text-5xl">
          Education & Experience
        </motion.h2>

        <svg className="absolute left-8 right-8 top-40 hidden h-36 w-[calc(100%-4rem)] opacity-35 lg:block" viewBox="0 0 1200 120" fill="none">
          <motion.path
            d="M 0 55 C 180 0, 280 110, 430 50 S 720 20, 850 55 S 1050 75, 1200 35"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="6 8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </svg>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="relative grid gap-10 md:grid-cols-3">
          {journey.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -12 }} className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-5 grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-white text-[#171614] shadow-xl"
                >
                  <Icon size={22} />
                </motion.div>
                <p className="mb-2 text-sm font-bold text-[#b9a17a]">{item.year}</p>
                <h3 className="mb-1 text-lg font-bold lg:text-xl">{item.title}</h3>
                <p className="mb-4 text-sm text-white/55">{item.company}</p>
                <p className="max-w-sm text-sm leading-7 text-white/70">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#f8f3eb]">
      <motion.div
        animate={{ rotate: [0, 12, -12, 0], y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 top-12 hidden rounded-2xl border border-[#e6ded0] bg-white/50 p-4 text-[#a78d67] shadow-xl shadow-black/5 lg:block"
      >
        <Zap size={28} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 hidden h-full w-[32%] lg:block"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
          alt="Workspace"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8 }}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="relative mx-auto grid w-full max-w-[1180px] gap-9 px-5 py-14 lg:grid-cols-[0.72fr_1.28fr] lg:px-6">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.35em] text-[#a78d67]">Let's Connect</p>
          <h2 className="font-serif text-3xl leading-tight text-[#211f1a] lg:text-[38px]">
            Have a project in mind? <br /> Let’s build something amazing together.
          </h2>

          <div className="mt-8 space-y-4 text-sm text-[#5f574d]">
            <motion.p whileHover={{ x: 8 }} className="flex items-center gap-3"><Mail size={17} className="text-[#a78d67]" /> {profile.email}</motion.p>
            <motion.p whileHover={{ x: 8 }} className="flex items-center gap-3"><Phone size={17} className="text-[#a78d67]" /> {profile.phone}</motion.p>
            <motion.p whileHover={{ x: 8 }} className="flex items-center gap-3"><MapPin size={17} className="text-[#a78d67]" /> {profile.location}</motion.p>
          </div>

          <div className="mt-7 flex gap-3">
            <SocialButton href={profile.github}><GitHubIcon size={17} /></SocialButton>
            <SocialButton href={profile.linkedin}><LinkedInIcon size={17} /></SocialButton>
            <SocialButton href={`mailto:${profile.email}`}><Mail size={17} /></SocialButton>
          </div>
        </motion.div>

        <motion.form
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -8 }}
          className="relative z-10 rounded-xl border border-[#e6ded0] bg-white/80 p-5 shadow-2xl shadow-black/5 backdrop-blur-xl lg:mr-[22%] lg:p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <motion.input whileFocus={{ scale: 1.02 }} className="h-12 rounded-md border border-[#e9e2d7] bg-white px-4 text-sm outline-none transition focus:border-[#a78d67]" placeholder="Your Name" />
            <motion.input whileFocus={{ scale: 1.02 }} className="h-12 rounded-md border border-[#e9e2d7] bg-white px-4 text-sm outline-none transition focus:border-[#a78d67]" placeholder="Email Address" />
          </div>
          <motion.textarea whileFocus={{ scale: 1.01 }} className="mt-4 h-32 w-full resize-none rounded-md border border-[#e9e2d7] bg-white px-4 py-4 text-sm outline-none transition focus:border-[#a78d67]" placeholder="Your Message" />
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#151412] text-sm font-semibold text-white transition hover:bg-[#2a2824]"
          >
            Send Message <ArrowRight size={16} />
          </motion.a>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#151513] text-white">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-white/60 md:flex-row lg:px-6">
        <motion.p
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="font-serif text-xl text-white"
        >
          K.
        </motion.p>
        <p>© 2026 Kushal Poudel. All rights reserved.</p>
        <p>Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden scroll-smooth bg-[#f8f3eb] text-[#201d18] selection:bg-[#a78d67] selection:text-white">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
