"use client";

import { motion, type MotionProps } from "framer-motion";
import Link from "next/link";
import styles from "./page.module.css";

const stats = [
  { value: "120+", label: "Auditioning pups" },
  { value: "15", label: "Show-stopping acts" },
  { value: "6", label: "Celebrity judges" },
];

const categories = [
  {
    title: "Vocal Virtuosos",
    description: "Howling harmonies, melodic barks, and whistle-perfect duets.",
    accent: "var(--talent-sunrise)",
  },
  {
    title: "Stunt Superstars",
    description:
      "High-flying frisbee flips and agility runs that defy doggy gravity.",
    accent: "var(--talent-breeze)",
  },
  {
    title: "Heartwarming Stories",
    description:
      "Rescue tales, therapy heroes, and pups making the world kinder.",
    accent: "var(--talent-twilight)",
  },
];

const schedule = [
  {
    time: "2:00 PM",
    title: "Red Carpet Arrivals",
    description: "Glam shots, paw-parazzi poses, and snout-size swag bags.",
  },
  {
    time: "3:00 PM",
    title: "Opening Parade",
    description: "March of the mutts backed by a live brass band.",
  },
  {
    time: "4:30 PM",
    title: "Talent Showcase",
    description: "Five rounds of dazzling performances with live scoring.",
  },
  {
    time: "6:00 PM",
    title: "Paws & Applause Finale",
    description: "Winners crowned, confetti cannons, and a biscuit banquet.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const floatingMotion = (delay: number): MotionProps => ({
  initial: { y: 0 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    },
  },
});

export default function Home() {
  return (
    <div className={styles.page}>
      <motion.main
        className={styles.main}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <section className={styles.hero}>
          <div className={styles.heroBackdrop} aria-hidden />
          <motion.div className={styles.heroCopy} variants={fadeUp}>
            <span className={styles.heroBadge}>July 12 · Austin Music Hall</span>
            <h1 className={styles.heroTitle}>
              Paws & Applause Talent Show
            </h1>
            <p className={styles.heroSubtitle}>
              The most paw-some performers in the country gather for an evening
              of goosebumps, giggles, and tail-wagging talent. Bring your pup,
              bring your friends, and get ready to cheer louder than a squeaky
              toy convention.
            </p>
            <div className={styles.heroActions}>
              <Link href="#register" className={styles.primaryButton}>
                Register Your Pup
              </Link>
              <Link href="#schedule" className={styles.secondaryButton}>
                See the Lineup
              </Link>
            </div>
            <div className={styles.statGrid}>
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  variants={fadeUp}
                >
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className={styles.heroVisual}>
            <motion.div
              className={styles.visualCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className={styles.visualHeader}>
                <span>Spotlight Pup</span>
                <span className={styles.visualBadge}>Last year&apos;s winner</span>
              </div>
              <div className={styles.visualScene}>
                <motion.div
                  className={styles.visualStage}
                  {...floatingMotion(0.4)}
                />
                <motion.div
                  className={styles.visualSpotlight}
                  {...floatingMotion(0.2)}
                />
                <motion.div
                  className={styles.visualPup}
                  {...floatingMotion(0)}
                />
                <motion.div
                  className={styles.visualStars}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.6, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </div>
              <p className={styles.visualQuote}>
                “That backflip fetch routine had the crowd howling for more.”
              </p>
              <span className={styles.visualAttribution}>- Judge Barkley Bones</span>
            </motion.div>
          </div>
        </section>

        <section aria-hidden className={styles.marqueeWrapper}>
          <motion.div
            className={styles.marquee}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 16, repeat: Infinity }}
          >
            {[
              "Best in Show",
              "Frisbee Finals",
              "Howl Harmonies",
              "Dancing Doggos",
              "Pup Paparazzi",
              "Treat Toss",
            ].map((text) => (
              <span key={text} className={styles.marqueeItem}>
                {text}
              </span>
            ))}
            {[
              "Best in Show",
              "Frisbee Finals",
              "Howl Harmonies",
              "Dancing Doggos",
              "Pup Paparazzi",
              "Treat Toss",
            ].map((text) => (
              <span key={`duplicate-${text}`} className={styles.marqueeItem}>
                {text}
              </span>
            ))}
          </motion.div>
        </section>

        <motion.section
          id="schedule"
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Event Schedule</span>
            <h2>Every moment planned for maximum tail wags</h2>
            <p>
              From red carpet arrivals to the last confetti cannon, we craft an
              experience that keeps paws prancing from start to finish.
            </p>
          </div>
          <div className={styles.timeline}>
            {schedule.map((item) => (
              <motion.div
                key={item.title}
                className={styles.timelineItem}
                variants={fadeUp}
              >
                <div className={styles.timelineTime}>{item.time}</div>
                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Talent Tracks</span>
            <h2>Choose your pup&apos;s spotlight moment</h2>
            <p>
              Register for multiple categories and showcase everything from
              synchronized tail-wag duets to heartstring-tugging therapy stories.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {categories.map((category) => (
              <motion.div
                key={category.title}
                className={styles.categoryCard}
                style={{ borderColor: category.accent }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <span
                  className={styles.categoryAccent}
                  style={{ background: category.accent }}
                />
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="register"
          className={styles.ctaSection}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.ctaCopy}>
            <h2>Ready to unleash your star?</h2>
            <p>
              Early bird registration closes June 15. Limited slots available for
              each category.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a
              href="https://example.com/register"
              className={styles.primaryButton}
              target="_blank"
              rel="noreferrer"
            >
              Claim a Spot
            </a>
            <a
              href="mailto:wagmaster@pawsandapplause.com"
              className={styles.secondaryButton}
            >
              Ask the Wagmaster
            </a>
          </div>
        </motion.section>
      </motion.main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Paws &amp; Applause Talent Show</p>
        <p>A production by the Austin Pup Performers Guild.</p>
      </footer>
    </div>
  );
}
