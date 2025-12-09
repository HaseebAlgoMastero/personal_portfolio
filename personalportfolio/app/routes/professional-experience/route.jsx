import { Footer } from '~/components/footer';
import { DecoderText } from '~/components/decoder-text';
import { Link } from '~/components/link';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { CursorFollower } from '~/components/ui/cursor-follower';
import { DottedSurface } from '~/components/ui/dotted-surface';
import { useEffect, useRef, useState } from 'react';
import { baseMeta } from '~/utils/meta';

export const meta = () => {
  return baseMeta({
    title: 'Professional Experience',
    description: 'A curated look at my professional journey and impactful roles.',
  });
};

const experiences = [
  {
    range: 'June 2025 - Present',
    title: 'AI Engineer',
    company: 'Cybersoft North America Inc.',
    companyLink: 'https://csnainc.io/',
    brandColor: '#25d4ff',
    logo: '/static/logos/cybersoft.jpeg',
    intro:
      'Building intelligent automation across AI + IoT stacks, shipping resilient, real-time systems with modern LLM tooling.',
    bullets: [
      'Integrated AI with IoT using ESP32S3 controllers and Raspberry Pi Pico 2 for intelligent automation systems',
      'Worked with Simpli-Fi Automation and NASA Products, developing real-time AI solutions for critical applications',
      'Implemented Generative AI applications using LangChain, Standard RAG, Hybrid RAG, and Graph RAG frameworks',
      'Worked with multiple Open Source LLMs including OpenAI, Cohere, Mistral, Anthropic, and Gemini',
      'Developed Agentic AI systems using OpenAI Agentic SDK, CrewAI, LangGraph, and MCP server integration',
      'Collaborated in cross-functional teams with strong problem-solving, communication, and client handling skills',
    ],
    tags: ['Python', 'Generative AI', 'Agentic AI', 'Raspberry Pi Pico 2', 'eNose'],
  },
  {
    range: 'August 2024 - May 2025',
    title: 'AI Engineer (Remote)',
    company: 'FabTechsol',
    companyLink: 'https://fabtechsol.com/',
    brandColor: '#25d4ff',
    logo: '/static/logos/data.jpg',
    intro:
      'Built and deployed generative AI and ML services for data-focused workflows, fully remote from Lahore, Pakistan.',
    bullets: [
      'Developed and optimized machine learning models using Scikit Learn, PyTorch, and TensorFlow to enhance AI capabilities.',
      'Implemented Generative AI applications utilizing LangChain and RAG variants to improve data processing efficiency.',
      'Deployed AI services on AWS with Docker and FastAPI to ensure scalable and reliable performance.',
    ],
    tags: [],
  }
];

const ExperienceCard = ({ experience, index, total }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;
  const isLast = index === total - 1;
  const badgeNumber = String(index + 1).padStart(2, '0');
  const brandColor = experience.brandColor || 'var(--accent)';
  const logoInitials =
    experience.company
      ?.split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || '?';
  const logoSrc = experience.logo;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      className="experience-card"
      ref={ref}
      style={{
        position: 'relative',
        maxWidth: 920,
        width: '100%',
        padding: 2,
        borderRadius: 36,
        marginTop: 0,
        marginBottom: isLast ? '0' : 'clamp(56px, 9vh, 88px)',
        marginLeft: isEven ? '0' : 'auto',
        marginRight: isEven ? 'auto' : '0',
        background: isEven
          ? 'linear-gradient(135deg, rgb(var(--accent) / 0.35), rgb(var(--rgbBackground) / 0.45))'
          : 'linear-gradient(135deg, rgb(var(--primary) / 0.35), rgb(var(--rgbBackground) / 0.45))',
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translate3d(0, 0, 0)'
          : isEven
          ? 'translate3d(-90px, 40px, 0)'
          : 'translate3d(90px, 40px, 0)',
        filter: isVisible ? 'blur(0)' : 'blur(14px)',
        transition:
          'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), filter 0.65s ease',
        scrollMarginTop: '120px',
      }}
    >
      <div
        className="experience-card-inner"
        style={{
          borderRadius: 32,
          padding: 'clamp(48px, 5vw, 60px) clamp(28px, 4vw, 48px) clamp(40px, 5vw, 54px)',
          background:
            'linear-gradient(145deg, rgb(var(--rgbBackground)), rgb(var(--rgbBackground) / 0.85))',
          position: 'relative',
          overflow: 'hidden',
          border: 'var(--experience-card-border, 1px solid rgb(var(--rgbText) / 0.08))',
          boxShadow: '0 45px 90px -65px rgb(var(--rgbText) / 0.85)',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: isEven
              ? 'radial-gradient(circle at 10% 0%, rgb(var(--accent) / 0.35), transparent 55%)'
              : 'radial-gradient(circle at 90% 0%, rgb(var(--primary) / 0.35), transparent 55%)',
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: 6,
            top: 0,
            bottom: 0,
            width: 4,
            background: `linear-gradient(180deg, ${brandColor}, color-mix(in lab, ${brandColor} 55%, transparent))`,
            boxShadow: `0 0 35px -10px ${brandColor}`,
            opacity: 0.82,
            display: 'var(--experience-glow-display, block)',
          }}
        />
        <div style={{ height: 18 }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 14,
              fontWeight: 700,
              fontSize: 'clamp(1.05rem, 2.6vw, 1.5rem)',
              color: 'inherit',
            }}
          >
            <span
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                minWidth: 34,
                height: 34,
                borderRadius: '50%',
                background: 'linear-gradient(120deg, var(--accent), var(--primary))',
                color: 'rgb(var(--rgbBackground))',
                boxShadow: '0 12px 30px -18px var(--accent)',
              }}
            >
              {badgeNumber}
            </span>
            <span
              style={{
                marginLeft: 'auto',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--textLight)',
              }}
            >
              {experience.range}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            {logoSrc ? (
              <Link
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  background: 'none',
                  padding: 0,
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '18px',
                    background: 'rgb(var(--rgbBackground))',
                    border: `1px solid color-mix(in lab, ${brandColor} 40%, transparent)`,
                    overflow: 'hidden',
                    boxShadow: `0 14px 34px -16px ${brandColor}`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={logoSrc}
                    alt={`${experience.company} logo`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </Link>
            ) : (
              <Link
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  background: 'none',
                  padding: 0,
                  textDecoration: 'none',
                }}
              >
                <div
                  aria-hidden
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: `conic-gradient(from 120deg, ${brandColor}, color-mix(in lab, ${brandColor} 24%, transparent), ${brandColor})`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgb(var(--rgbBackground))',
                    fontWeight: 800,
                    fontSize: 18,
                    boxShadow: `0 14px 38px -18px ${brandColor}`,
                    border: '1px solid rgb(var(--rgbText) / 0.1)',
                  }}
                >
                  {logoInitials}
                </div>
              </Link>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
                {experience.title}
              </span>
              {experience.companyLink ? (
                <Link
                  href={experience.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--textLight)',
                    textDecoration: 'none',
                  }}
                >
                  {experience.company}
                </Link>
              ) : (
                <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--textLight)' }}>
                  {experience.company}
                </span>
              )}
            </div>
          </div>
          <Text as="p" size="m" style={{ margin: 0, opacity: 0.9, lineHeight: 1.7 }}>
            {experience.intro}
          </Text>
          <ul
            style={{
              margin: '6px 0 0',
              paddingLeft: 18,
              display: 'grid',
              gap: 10,
              lineHeight: 1.6,
            }}
          >
            {experience.bullets.map(point => (
              <li key={point}>
                <Text as="span" size="m">
                  {point}
                </Text>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
            {/* Tags removed as requested */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default function ProfessionalExperienceRoute() {
  const experienceCardResponsiveStyles = `
    @media (max-width: 594px) {
      .experience-card {
        border: 2px solid var(--accent) !important;
        box-shadow: 0 0 0 1px color-mix(in lab, var(--accent) 40%, transparent), 0 18px 45px -32px var(--accent);
      }
      .experience-card-inner {
        --experience-card-border: none !important;
        --experience-glow-display: none !important;
      }
    }
  `;

  return (
    <>
      <style>{experienceCardResponsiveStyles}</style>
      <CursorFollower />
      <section aria-labelledby="experience-heading">
        <div
          className="responsive-hero experience-hero"
          style={{
            position: 'relative',
            width: '100%',
            height: 'var(--hero-height, 100vh)',
            minHeight: 'var(--hero-min-height, 540px)',
            textAlign: 'var(--hero-text-align, center)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'var(--hero-content-align, center)',
            justifyContent: 'center',
            gap: 'var(--hero-inner-gap, 12px)',
            padding: 'var(--hero-inner-gap, 12px) var(--hero-content-padding, 24px)',
            overflow: 'hidden',
          }}
        >
          <DottedSurface
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgb(var(--rgbBackground) / 0.4), transparent 50%, rgb(var(--rgbBackground)))',
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: 'var(--hero-content-max-width, 1100px)',
              padding: '0 var(--hero-content-padding, 24px)',
              textAlign: 'inherit',
            }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  @keyframes caretBlink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
                `,
              }}
            />
            <h1
              id="experience-heading"
              style={{
                margin: 0,
                fontWeight: 800,
                letterSpacing: 'var(--hero-title-spacing, 0.28em)',
                textTransform: 'uppercase',
                fontSize: 'var(--hero-title-size, clamp(3.5rem, 7vw, 5.6rem))',
                lineHeight: 'var(--hero-title-line-height, 1.05)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'clamp(8px, 2vw, 12px)',
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 0,
                  height: '1.25em',
                }}
              />
              <DecoderText text="PROFESSIONAL EXPERIENCE" start delay={120} springConfig={{ stiffness: 10, damping: 6 }} />
              <span
                aria-hidden
                style={{
                  width: 0,
                  height: 0,
                  margin: 0,
                  padding: 0,
                }}
              />
            </h1>
          </div>
        </div>
      </section>
      <section
        aria-label="Professional experience cards"
        style={{
          position: 'relative',
          padding: 'clamp(48px, 12vh, 140px) clamp(20px, 8vw, 150px) clamp(32px, 8vh, 120px)',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at top, rgb(var(--rgbText) / 0.08), transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vh, 56px)' }}>
            <Heading level={2} align="center">
              Changelog from my journey
            </Heading>
            <Text as="p" size="l" align="center" style={{ opacity: 0.85, marginTop: 12 }}>
              A living record of roles, ownership, and the technologies I shipped along the way.
            </Text>
          </div>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.title}-${experience.company}`}
              experience={experience}
              index={index}
              total={experiences.length}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
