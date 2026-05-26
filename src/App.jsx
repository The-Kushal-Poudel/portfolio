import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
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
  Menu,
  X,
  BookOpen,
  CalendarDays,
} from "lucide-react";
import { portfolioData } from "./data/portfolioData";

const {
  site,
  navItems,
  profile,
  hero,
  about,
  techStack,
  projectsSection,
  blogsSection,
  journeySection,
  contact: contactData,
} = portfolioData;

const iconMap = {
  Code,
  Database,
  Monitor,
  Rocket,
  Briefcase,
  GraduationCap,
  Laptop,
};

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

const fadeUp = {
  hidden: { opacity: 0, y: 42, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
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

function SocialButton({ children, href = "#", label = "Social link" }) {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      whileHover={{ y: -7, scale: 1.08, rotate: 4 }}
      whileTap={{ scale: 0.92 }}
      className="grid h-10 w-10 place-items-center rounded-full border border-[#e6ded0] bg-white text-[#151412] shadow-sm transition hover:border-[#b59a71] hover:text-[#b59a71]"
    >
      {children}
    </motion.a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-[9999] border-b border-[#e6ded0]/80 bg-[#f8f3eb]/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-3 sm:px-5 lg:px-8">
        <motion.a href="#home" whileHover={{ scale: 1.04 }} className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
          <motion.span
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-serif text-3xl font-black leading-none tracking-tight text-[#151412] sm:text-4xl"
          >
            {site.logoInitial}
          </motion.span>

          <span className="block max-w-[135px] truncate font-serif text-[15px] font-semibold tracking-wide text-[#29251f] sm:max-w-none sm:text-lg">
            {site.logoName} <span className="text-[#a78d67]">{site.logoHighlight}</span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-7 text-[13px] font-semibold text-[#332f29] md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              href={item.href}
              className="relative transition hover:text-[#a78d67] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#151412] after:transition-all hover:after:w-full"
            >
              {item.label}
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

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          className="relative z-[10000] flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#151412]/20 bg-[#151412] text-white shadow-md md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full z-[9998] w-full border-t border-[#e6ded0] bg-[#f8f3eb] px-4 py-3 shadow-xl md:hidden"
        >
          <div className="mx-auto grid max-w-screen-2xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#332f29] transition hover:text-[#a78d67]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
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

      <div className="relative mx-auto grid w-full max-w-screen-2xl items-center gap-7 px-4 pb-10 pt-7 sm:px-5 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:pb-14 lg:pt-12">
        <motion.div style={{ y: heroY }} variants={stagger} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="mb-4 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#a78d67] sm:text-[11px] sm:tracking-[0.35em]">
            <motion.span
              animate={{ scale: [1, 1.8, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-[#b69a70]"
            />
            {profile.role}
          </motion.p>

          <AnimatedTitle className="max-w-[720px] font-serif text-[34px] leading-[1.08] tracking-tight text-[#1f1c18] sm:text-5xl lg:text-[70px]">
            {hero.title}
          </AnimatedTitle>

          <motion.p variants={fadeUp} className="mt-4 max-w-[620px] text-[14px] leading-7 text-[#5f574d] sm:text-[15px] sm:leading-8">
            {hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={profile.cv}
              download={profile.cvFileName}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-3 rounded-md bg-[#151412] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#292723]"
            >
              {hero.primaryButton} <Download size={16} />
            </motion.a>

            <motion.a
              href={hero.secondaryLink}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-3 rounded-md border border-[#beb3a2] bg-white/30 px-6 py-3.5 text-sm font-semibold text-[#1d1b17] transition hover:bg-white"
            >
              {hero.secondaryButton} <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8c806f] sm:text-[11px]">Follow me on</span>
            <SocialButton href={profile.github} label="GitHub profile">
              <GitHubIcon size={17} />
            </SocialButton>
            <SocialButton href={profile.linkedin} label="LinkedIn profile">
              <LinkedInIcon size={17} />
            </SocialButton>
            <SocialButton href={`mailto:${profile.email}`} label="Send email">
              <Mail size={17} />
            </SocialButton>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY, rotate: imageRotate }}
          initial={{ opacity: 0, scale: 0.88, rotate: 4, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto min-h-[370px] w-full max-w-[650px] lg:mx-0 lg:min-h-[455px]"
        >
          {hero.chips.map((chip) => (
            <FloatingChip key={chip.label} delay={chip.delay} className={chip.className}>
              {chip.label}
            </FloatingChip>
          ))}

          <motion.div
            whileHover={{ scale: 1.035, rotate: -1.5 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="absolute right-0 top-0 h-[330px] w-[88%] overflow-hidden rounded-[18px] bg-[#d8cbb8] shadow-2xl shadow-black/15 sm:h-[410px]"
          >
            <motion.img
              src={profile.image}
              alt={profile.name}
              onError={(e) => {
                e.currentTarget.src = profile.imageFallback;
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
            className="absolute bottom-8 left-0 w-[92%] max-w-[410px] rounded-xl border border-white/10 bg-[#171614]/90 p-4 text-white shadow-2xl shadow-black/25 backdrop-blur-xl sm:left-8 sm:p-5"
          >
            <div className="grid gap-3 text-sm sm:gap-4">
              <div className="flex items-center gap-4">
                <MapPin size={17} />
                <span className="text-white/80">{profile.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={17} />
                <span className="text-white/80">{profile.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={17} />
                <span className="text-white/80">{profile.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <motion.span
                  animate={{ scale: [1, 1.55, 1], opacity: [1, 0.55, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-500/40"
                />
                <span className="font-semibold">{profile.availability}</span>
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
    <section id="about" className="relative overflow-hidden border-y border-[#e6ded0] bg-[#f8f3eb] py-12 lg:py-14">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -left-24 top-10 h-52 w-52 rounded-full border border-dashed border-[#d6c7ad]"
      />

      <div className="mx-auto grid w-full max-w-screen-2xl gap-8 px-4 sm:px-5 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#a78d67] sm:text-[11px]">{about.label}</p>
          <h2 className="font-serif text-3xl leading-tight text-[#211e19] lg:text-[38px]">{about.title}</h2>
          <p className="mt-4 max-w-lg text-[14px] leading-7 text-[#62594e] sm:text-[15px] sm:leading-8">{about.description}</p>
          <motion.p
            whileInView={{ x: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-5 font-serif text-3xl italic text-[#a78d67]"
          >
            {about.signature}
          </motion.p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {about.cards.map((card) => {
            const Icon = iconMap[card.icon] || Code;
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
                  className="mb-6 grid h-[52px] w-[52px] place-items-center rounded-full bg-[#f0eadf] text-[#1c1a17] transition group-hover:bg-[#1c1a17] group-hover:text-white"
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
  const repeated = [...techStack.items, ...techStack.items, ...techStack.items];

  return (
    <section id="skills" className="relative overflow-hidden bg-[#151513] py-10 text-white lg:py-12">
      <motion.div
        animate={{ x: ["-20%", "0%", "-20%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 left-0 w-[160%] opacity-[0.05] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:50px_50px]"
      />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-5 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-7 text-center text-[10px] font-black uppercase tracking-[0.35em] text-[#b9a17a] sm:text-[11px]"
        >
          {techStack.label}
        </motion.p>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-3 sm:gap-4"
          >
            {repeated.map((tech, index) => (
              <motion.div
                key={`${tech}-${index}`}
                whileHover={{ y: -8, scale: 1.08 }}
                className="flex min-w-[130px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/75 backdrop-blur sm:min-w-[145px] sm:px-5 sm:py-3"
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
    <section id="projects" className="relative overflow-hidden bg-[#f8f3eb] py-12 lg:py-14">
      <motion.div
        animate={{ y: [0, -24, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-8 top-12 hidden rounded-full border border-[#dfd2bf] bg-white/35 p-5 text-[#a78d67] shadow-xl shadow-black/5 lg:block"
      >
        <Sparkles size={32} />
      </motion.div>

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-5 lg:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#a78d67] sm:text-[11px]">{projectsSection.label}</p>
            <h2 className="font-serif text-3xl text-[#211f1a] sm:text-4xl lg:text-5xl">{projectsSection.title}</h2>
          </motion.div>
          <motion.a variants={fadeUp} whileHover={{ x: 8 }} href={projectsSection.ctaLink} className="inline-flex items-center gap-2 text-sm font-bold text-[#211f1a] hover:text-[#a78d67]">
            {projectsSection.ctaText} <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8 xl:grid-cols-3">
          {projectsSection.items.map((project) => (
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
                  loading="lazy"
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

              <div className="p-5 sm:p-6">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-[#a78d67]">{project.tag}</p>
                <h3 className="mb-3 text-xl font-bold text-[#201d18]">{project.title}</h3>
                <p className="min-h-[72px] text-sm leading-7 text-[#655d52]">{project.desc}</p>

                {project.link === "#" ? (
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#a78d67]">
                    Live Soon <ArrowRight size={14} />
                  </span>
                ) : (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 8 }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#a78d67]"
                  >
                    View Project <ArrowRight size={14} />
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Blogs() {
  return (
    <section id="blogs" className="relative overflow-hidden border-y border-[#e6ded0] bg-white py-12 lg:py-14">
      <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#d2c4ae_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-5 lg:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div variants={fadeUp}>
            <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#a78d67] sm:text-[11px]">
              <BookOpen size={15} /> {blogsSection.label}
            </p>
            <h2 className="font-serif text-3xl text-[#211f1a] sm:text-4xl lg:text-5xl">{blogsSection.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#655d52] sm:text-[15px]">{blogsSection.description}</p>
          </motion.div>
          <motion.a variants={fadeUp} whileHover={{ x: 8 }} href={blogsSection.ctaLink} className="inline-flex items-center gap-2 text-sm font-bold text-[#211f1a] hover:text-[#a78d67]">
            {blogsSection.ctaText} <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {blogsSection.items.map((blog) => (
            <motion.article
              key={blog.title}
              variants={popIn}
              whileHover={{ y: -14, scale: 1.02 }}
              className="group rounded-xl border border-[#e6ded0] bg-[#f8f3eb]/85 p-5 shadow-sm transition hover:bg-white hover:shadow-2xl hover:shadow-black/10 sm:p-6"
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-[#151412] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                  {blog.category}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#7d7162]">
                  <CalendarDays size={14} /> {blog.date}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-snug text-[#201d18] transition group-hover:text-[#a78d67]">{blog.title}</h3>
              <p className="mt-4 min-h-[98px] text-sm leading-7 text-[#655d52]">{blog.desc}</p>

              <motion.a href={blog.link} whileHover={{ x: 8 }} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#a78d67]">
                Read Article <ArrowRight size={14} />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#151513] py-12 text-white lg:py-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#b9a17a] blur-3xl"
      />

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-5 lg:px-8">
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#b9a17a] sm:text-[11px]">
          {journeySection.label}
        </motion.p>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 font-serif text-3xl sm:text-4xl lg:text-5xl">
          {journeySection.title}
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

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="relative grid gap-8 md:grid-cols-3">
          {journeySection.items.map((item) => {
            const Icon = iconMap[item.icon] || Briefcase;
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`${contactData.emailSubjectPrefix} ${form.name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

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
          src={contactData.image}
          alt={contactData.imageAlt}
          loading="lazy"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8 }}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="relative mx-auto grid w-full max-w-screen-2xl gap-8 px-4 py-12 sm:px-5 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-14">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#a78d67] sm:text-[11px]">{contactData.label}</p>
          <h2 className="font-serif text-3xl leading-tight text-[#211f1a] lg:text-[38px]">{contactData.title}</h2>

          <div className="mt-7 space-y-4 text-sm text-[#5f574d]">
            <motion.p whileHover={{ x: 8 }} className="flex items-center gap-3">
              <Mail size={17} className="text-[#a78d67]" /> {profile.email}
            </motion.p>
            <motion.p whileHover={{ x: 8 }} className="flex items-center gap-3">
              <Phone size={17} className="text-[#a78d67]" /> {profile.phone}
            </motion.p>
            <motion.p whileHover={{ x: 8 }} className="flex items-center gap-3">
              <MapPin size={17} className="text-[#a78d67]" /> {profile.location}
            </motion.p>
          </div>

          <div className="mt-6 flex gap-3">
            <SocialButton href={profile.github} label="GitHub profile">
              <GitHubIcon size={17} />
            </SocialButton>
            <SocialButton href={profile.linkedin} label="LinkedIn profile">
              <LinkedInIcon size={17} />
            </SocialButton>
            <SocialButton href={`mailto:${profile.email}`} label="Send email">
              <Mail size={17} />
            </SocialButton>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -8 }}
          className="relative z-10 rounded-xl border border-[#e6ded0] bg-white/80 p-5 shadow-2xl shadow-black/5 backdrop-blur-xl lg:mr-[22%] lg:p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              name="name"
              value={form.name}
              onChange={handleChange}
              className="h-12 rounded-md border border-[#e9e2d7] bg-white px-4 text-sm outline-none transition focus:border-[#a78d67]"
              placeholder={contactData.namePlaceholder}
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="h-12 rounded-md border border-[#e9e2d7] bg-white px-4 text-sm outline-none transition focus:border-[#a78d67]"
              placeholder={contactData.emailPlaceholder}
              required
            />
          </div>

          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            name="message"
            value={form.message}
            onChange={handleChange}
            className="mt-4 h-32 w-full resize-none rounded-md border border-[#e9e2d7] bg-white px-4 py-4 text-sm outline-none transition focus:border-[#a78d67]"
            placeholder={contactData.messagePlaceholder}
            required
          />

          <motion.button
            type="submit"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#151412] text-sm font-semibold text-white transition hover:bg-[#2a2824]"
          >
            {contactData.buttonText} <ArrowRight size={16} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#151513] text-white">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:px-5 md:flex-row lg:px-8">
        <motion.p
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="font-serif text-xl text-white"
        >
          {site.logoInitial}
        </motion.p>
        <p>{site.footerCopyright}</p>
        <p>{site.footerCredit}</p>
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
      <Blogs />
      <Experience />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  );
}
