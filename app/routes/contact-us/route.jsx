import { DecoderText } from '~/components/decoder-text';
import { Link } from '~/components/link';
import { Sparkles } from '~/components/ui/sparkles';
import { motion } from 'framer-motion';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: 'Get in touch for collaborations and inquiries.',
  });
};

const navLinks = [
  { label: 'About', href: '/home' },
  { label: 'Experience', href: '/professional-experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research-projects' },
  { label: 'Education', href: '/education' },
];

const socialLinks = [
  { label: 'Email', href: `mailto:${config.email}`, logo: '/static/logos/email-removebg-preview.png' },
  { label: 'GitHub', href: `https://github.com/${config.github}`, logo: '/static/logos/github.png' },
  { label: 'LinkedIn', href: `https://www.linkedin.com/in/${config.linkedin}`, logo: '/static/logos/linkedin.png' },
  { label: 'WhatsApp', href: 'https://wa.me/92167799400', logo: '/static/logos/whatsapp-removebg-preview.png' },
  { label: 'Phone', href: 'tel:+92167799400', logo: '/static/logos/phone.png' },
  { label: 'Instagram', href: 'https://www.instagram.com/', logo: '/static/logos/Instagram-Logosu.png' },
  { label: 'Facebook', href: 'https://www.facebook.com/', logo: '/static/logos/Facebook_Logo_(2019).png' },
  { label: 'Fiver', href: 'https://www.facebook.com/', logo: '/static/logos/fiver-removebg-preview.png' },
  { label: 'Upwork', href: 'https://www.facebook.com/', logo: '/static/logos/upwork-removebg-preview.png' },

];

const FloatingPaths = ({ position }) => {
  const paths = Array.from({ length: 24 }, (_, i) => {
    const offset = i * 5 * position;
    const step = i * 6;
    return {
      id: i,
      d: `M-${380 - offset} -${189 + step}C-${380 - offset} -${189 + step} -${312 - offset} ${216 - step} ${152 - offset} ${343 - step}C${616 - offset} ${470 - step} ${684 - offset} ${875 - step} ${684 - offset} ${875 - step}`,
      width: 0.5 + i * 0.02,
      opacity: 0.08 + i * 0.02,
      duration: 16 + i * 0.6,
    };
  });

  return (
    <motion.svg
      viewBox="0 0 696 316"
      fill="none"
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 0.85 }}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse' }}
    >
      <title>Background Paths</title>
      <motion.g
        animate={{
          x: [-28 * position, 32 * position, -28 * position],
          y: [-12, 18, -12],
        }}
        transition={{
          duration: 26,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      >
        {paths.map(path => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{
              pathLength: 1,
              opacity: [0.25, 0.55, 0.25],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </motion.g>
    </motion.svg>
  );
};

export default function ContactRoute() {
  return (
    <>
      <main className={styles.page}>
        <Sparkles className={styles.sparkles} />
        <div className={styles.paths} aria-hidden>
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
        <section className={styles.card}>
          <header className={styles.header}>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>
                <DecoderText
                  text={`CONTACT ${config.name.toUpperCase()}`}
                  start
                  delay={120}
                  springConfig={{ stiffness: 10, damping: 6 }}
                />
              </h1>
            </div>
          </header>

          <p className={styles.lead}>
            Welcome to the studio where creativity meets strategy. I craft AI-driven products,
            immersive digital experiences, and content systems that resonate with real audiences.
            My focus is on pairing bold concepts with measurable outcomes so your brand stands out
            with clarity and confidence. From research and UX to production and rollout, I shape
            the full story so every touchpoint feels intentional. Let&apos;s partner to launch
            something expressive, thoughtful, and unforgettable.
          </p>

          <div className={styles.divider} />

          <div className={styles.navGrid}>
            {navLinks.map(link => (
              <Link key={link.label} className={styles.navLink} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.divider} />

          <div className={styles.socialRow}>
            {socialLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className={styles.socialButton}
                aria-label={link.label}
              >
                {link.logo ? (
                  <img
                    src={link.logo}
                    alt={`${link.label} logo`}
                    className={`${styles.socialLogo} ${link.label === 'Instagram' ? styles.socialLogoLarge : ''}`}
                    loading="lazy"
                  />
                ) : (
                  <span className={styles.socialText}>{link.text}</span>
                )}
                <span className={styles.srOnly}>{link.label}</span>
              </Link>
            ))}
          </div>

          <p className={`${styles.kicker} ${styles.kickerBottom}`}>Let&apos;s build something bold</p>
        </section>
      </main>
    </>
  );
}
