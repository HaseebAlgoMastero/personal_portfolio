import { Footer } from '~/components/footer';
import { DecoderText } from '~/components/decoder-text';
import { CursorFollower } from '~/components/ui/cursor-follower';
import { DottedSurface } from '~/components/ui/dotted-surface';
import { baseMeta } from '~/utils/meta';
import { useEffect, useRef, useState } from 'react';
import styles from './services.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Services',
    description: 'Consulting and delivery services.',
  });
};

const services = [
  {
    title: 'Custom Software Development',
    summary:
      'Custom software solutions solve specific business solutions and there is no one better equipped for the job then Cybersoft North America. Our innovative solutions are personalized to help forward-thinking enterprises by creating scalable solutions',
    highlights: [
      'SaaS Application Development',
      'Software Modernization',
      'Cloud Application Development',
      'Custom API Development',
      'Tech Advisory',
      'Software Integration',
    ],
    accent: '#6ee7ff',
  },
  {
    title: 'Agentic Automation',
    summary:
      'Automate complex workflows with resilient, tool-using agents that stay aligned with business rules and audit needs.',
    highlights: [
      'Multi-step agents with fallbacks',
      'Tooling integrations (DBs, CRMs, SaaS)',
      'Cost/performance tuning',
      'Guardrails + eval loops',
      'Human-in-the-loop controls',
      'Auditability and logging',
    ],
    accent: '#c084fc',
  },
  {
    title: 'Data and ML Foundations',
    summary:
      'Modernize data pipelines and ML ops so models stay fresh, observable, and ready for production workloads.',
    highlights: [
      'RAG pipelines and retrieval tuning',
      'Feature stores and vector indexing',
      'MLOps, CI/CD, and monitoring',
      'Data quality and validation',
      'Batch + streaming ETL',
      'Model deployment playbooks',
    ],
    accent: '#60a5fa',
  },
  {
    title: 'Web Development',
    summary:
      'Boost your business’s cross-platform capabilities with our web development services. Our web applications are built to be user-centric, ensuring a smooth user journey from A to Z! Our designs stay close to a brand’s core values, ensuring consistency',
    highlights: [
      'Custom Web Development',
      'Web UI/UX Design',
      'eCommerce Development',
      'CMS Development',
      'REST API Development',
      'Maintenance & Support',
    ],
    accent: '#fbbf24',
  },
  {
    title: 'Prototype Sprints',
    summary:
      'Focused 1-2 week builds to validate ideas with real users: fast scope, rapid iteration, crisp handoff.',
    highlights: [
      'Interactive prototypes',
      'User testing feedback cycles',
      'Documentation and next-step plans',
      'Design + dev pairing',
      'Demo-ready narratives',
      'Handoff with tickets',
    ],
    accent: '#34d399',
  },
  {
    title: 'Mobile App Development',
    summary:
      'Offering application development services for both major platforms, Android & iOS. Our customized mobile applications bring all the right functionalities for stakeholders looking for convenient solutions.',
    highlights: [
      'iOS Development',
      'Android Development',
      'React Native Development',
      'Flutter Development',
      'Cross Platform App Development',
      'IoT App Development',
    ],
    accent: '#f472b6',
  },
];

// Logo-only marquee; add more logos to this list.
const marqueeItems = [
  { icon: '/static/logos/Python-removebg-preview.png', alt: 'Python' },
  { icon: '/static/logos/C++-removebg-preview.png', alt: 'C++' },
  { icon: '/static/logos/NodeJs-removebg-preview.png', alt: 'Node.js' },
  { icon: '/static/logos/dotnetlogo.png', alt: '.NET' },
  { icon: '/static/logos/Screenshot_2025-11-29_175114-removebg-preview.png', alt: 'AngularJS' },
  { icon: '/static/logos/react-removebg-preview.png', alt: 'React' },
  { icon: '/static/logos/vue-removebg-preview.png', alt: 'Vue.js' },
  { icon: '/static/logos/flutter-removebg-preview.png', alt: 'Flutter', scale: 1.5 },
  { icon: '/static/logos/fastapi-removebg-preview.png', alt: 'FastAPI' },
  { icon: '/static/logos/Docker-removebg-preview.png', alt: 'Docker' },
  { icon: '/static/logos/microsoft-removebg-preview.png', alt: 'Azure', scale: 1.5 },
  { icon: '/static/logos/Amazon.png', alt: 'Amazon' },
  { icon: '/static/logos/openailogo.png', alt: 'OpenAI' },
  { icon: '/static/logos/Anthropic.png', alt: 'Claude' },
  { icon: '/static/logos/cohere-removebg-preview.png', alt: 'Cohere', scale: 1.5 },
  { icon: '/static/logos/Gemini logo.png', alt: 'Gemini' },
  { icon: '/static/logos/langchain-removebg-preview.png', alt: 'LangChain', scale: 1.5 },
  { icon: '/static/logos/Meta-removebg-preview.png', alt: 'LLaMA' },


];

const industries = [
  { label: 'Healthcare', icon: '❤' },
  { label: 'Finance', icon: '💵' },
  { label: 'Restaurant', icon: '🍽' },
  { label: 'E-Commerce', icon: '🛒' },
  { label: 'EV', icon: '⚡' },
  { label: 'Education', icon: '🎓' },
  { label: 'Telecommunications', icon: '📡' },
  { label: 'Logistics', icon: '🚚' },
  { label: 'Agriculture', icon: '🌾' },
  { label: 'Transportation', icon: '🚌' },
  { label: 'Warehousing', icon: '🏠' },
  { label: 'Advertising & Marketing', icon: '✉' },
  { label: 'Renewable Energy', icon: '🔋' },
  { label: 'Real Estate', icon: '🏠' },
  { label: 'Retail', icon: '📦' },
  { label: 'Construction', icon: '🏗' },
];

const whyStats = [
  {
    value: '20+',
    title: 'Years of Market Leadership',
    description: 'Unparalleled expertise and dedication; a trusted partner for excellence.',
  },
  {
    value: '50+',
    title: 'Satisfied Clients',
    description: 'Long-standing relationships anchored in reliability and performance.',
  },
  {
    value: '100+',
    title: 'Successful Projects',
    description: 'Proven track record delivering outcomes with consistency.',
  },
  {
    value: '20+',
    title: 'Major Contracts Secured',
    description: 'Trusted to win and deliver demanding, large-scale initiatives.',
  },
  {
    value: '100+',
    title: 'Expert Team Members',
    description: 'Seasoned professionals committed to excellence in every engagement.',
  },
  {
    value: '24/7',
    title: 'Availability',
    description: 'Always on for mission-critical support when you need it.',
  },
];

export default function ServicesRoute() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [techVisible, setTechVisible] = useState(false);
  const [industriesVisible, setIndustriesVisible] = useState(false);
  const [whyVisible, setWhyVisible] = useState(false);
  const heroRef = useRef(null);
  const techRef = useRef(null);
  const industriesRef = useRef(null);
  const whyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroVisible(true);
            if (entry.target === techRef.current) setTechVisible(true);
            if (entry.target === industriesRef.current) setIndustriesVisible(true);
            if (entry.target === whyRef.current) setWhyVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (techRef.current) observer.observe(techRef.current);
    if (industriesRef.current) observer.observe(industriesRef.current);
    if (whyRef.current) observer.observe(whyRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CursorFollower />
      <section
        className={`${styles.hero} responsive-hero`}
        aria-labelledby="services-heading"
        ref={heroRef}
        data-visible={heroVisible}
      >
        <DottedSurface
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroTitleRow}>
            <div className={styles.heroTitleWrap}>
              <h1 id="services-heading" className={styles.heroLabel}>
                <DecoderText
                  text="SERVICES"
                  start={heroVisible}
                  delay={120}
                  springConfig={{ stiffness: 10, damping: 6 }}
                />
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className={`${styles.servicesIntro} ${styles.marqueeHeader}`}>
        <span className={styles.marker} aria-hidden />
        <div className={styles.marqueeTitleWrap}>
          <h2 className={`${styles.servicesHeading} ${styles.marqueeTitle}`}>
            Services We{' '}
            <span className={styles.offerWrap}>
              <span>Offer</span>
            </span>
          </h2>
          <span className={styles.marqueeUnderline} aria-hidden />
        </div>
      </div>

      <section className={styles.servicesPanel} aria-label="Services overview">
        <div className={styles.serviceList} role="tablist" aria-label="Service categories">
          {services.map((service, index) => (
            <button
              key={service.title}
              className={styles.serviceListItem}
              data-active={index === activeServiceIndex}
              role="tab"
              aria-selected={index === activeServiceIndex}
              onClick={() => setActiveServiceIndex(index)}
            >
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        <div className={styles.serviceContent} role="tabpanel">
          <h2 className={styles.serviceTitle}>{services[activeServiceIndex].title}</h2>
          <p className={styles.serviceSummary}>{services[activeServiceIndex].summary}</p>

          <div className={styles.highlightGrid}>
            {services[activeServiceIndex].highlights.map(item => (
              <div key={item} className={styles.highlightCard}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.servicesStack} aria-label="Services overview - mobile">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={styles.servicesStackCard}
            style={{ '--i': index, '--dir': index % 2 === 0 ? 1 : -1 }}
          >
            <header className={styles.servicesStackHeader}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceSummary}>{service.summary}</p>
            </header>
            <ul className={styles.servicesStackList}>
              {service.highlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section
        className={styles.marqueeSection}
        aria-label="Technology stack marquee"
        ref={techRef}
        data-visible={techVisible}
      >
        <div className={`${styles.sectionHeader} ${styles.marqueeHeader}`}>
          <span className={styles.marker} aria-hidden />
          <div className={styles.marqueeTitleWrap}>
            <h3 className={`${styles.subtitle} ${styles.marqueeTitle}`}>
              <DecoderText
                text="TECHNOLOGY STACK"
                start={techVisible}
                delay={120}
                springConfig={{ stiffness: 10, damping: 6 }}
              />
            </h3>
            <span className={styles.marqueeUnderline} aria-hidden />
          </div>
        </div>
        <div className={styles.marqueeFrame}>
          <div className={styles.marqueeLine} aria-hidden />
          <div className={styles.marqueeMask}>
            <div className={styles.marqueeTrack}>
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span
                  key={`${item.icon || 'logo'}-${index}`}
                  className={styles.marqueeItem}
                  style={{ '--marquee-accent': 'var(--accent)' }}
                >
                  {item.icon ? (
                    <img
                      src={item.icon}
                      alt={item.alt || 'Tech logo'}
                      className={styles.marqueeLogo}
                      loading="lazy"
                      style={item.scale ? { transform: `scale(${item.scale})` } : undefined}
                    />
                  ) : null}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.marqueeLine} aria-hidden />
        </div>
        <div className={styles.marqueeBoundary} aria-hidden />
      </section>

      <section
        className={styles.industriesSection}
        aria-labelledby="industries-heading"
        ref={industriesRef}
        data-visible={industriesVisible}
      >
        <div className={`${styles.sectionHeader} ${styles.marqueeHeader}`}>
          <span className={styles.marker} aria-hidden />
          <div className={styles.marqueeTitleWrap}>
            <h3 id="industries-heading" className={`${styles.subtitle} ${styles.marqueeTitle} ${styles.industriesTitle}`}>
              <DecoderText
                text="INDUSTRIES WE TRANSFORM"
                start={industriesVisible}
                delay={120}
                springConfig={{ stiffness: 10, damping: 6 }}
              />
            </h3>
            <span className={styles.marqueeUnderline} aria-hidden />
          </div>
        </div>
        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <div key={industry.label} className={styles.industryCard} style={{ '--i': index }}>
              <div className={styles.industryIcon} aria-hidden>
                {industry.icon}
              </div>
              <span className={styles.industryLabel}>{industry.label}</span>
            </div>
          ))}
          <div className={styles.gridOverlay} aria-hidden />
        </div>
      </section>

      <section
        className={styles.whySection}
        aria-labelledby="why-heading"
        ref={whyRef}
        data-visible={whyVisible}
      >
        <div className={`${styles.sectionHeader} ${styles.marqueeHeader}`}>
          <span className={styles.marker} aria-hidden />
          <div className={styles.marqueeTitleWrap}>
            <h3 id="why-heading" className={`${styles.subtitle} ${styles.marqueeTitle}`}>
              <DecoderText
                text="WHY CHOOSE US?"
                start={whyVisible}
                delay={120}
                springConfig={{ stiffness: 10, damping: 6 }}
              />
            </h3>
            <span className={styles.marqueeUnderline} aria-hidden />
          </div>
        </div>
        <div className={styles.whyGrid}>
          {whyStats.map(stat => (
            <article key={stat.title} className={styles.whyCard} style={{ '--i': whyStats.indexOf(stat) }}>
              <div className={styles.whyValue}>{stat.value}</div>
              <div className={styles.whyTitle}>{stat.title}</div>
              <p className={styles.whyText}>{stat.description}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
