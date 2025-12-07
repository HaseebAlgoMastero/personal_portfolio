import { Footer } from '~/components/footer';
import { DecoderText } from '~/components/decoder-text';
import { CursorFollower } from '~/components/ui/cursor-follower';
import { DottedSurface } from '~/components/ui/dotted-surface';
import { Button } from '~/components/button';
import { Link } from '~/components/link';
import { baseMeta } from '~/utils/meta';
import { useEffect, useRef, useState } from 'react';

const degreeLink = 'https://drive.google.com/file/d/1rG-TZY84hRi4xr-_Wvb3PgESW31I9UNZ/view?usp=sharing';

const educationEntries = [
  {
    title: 'B.Sc. Biomedical Engineering',
    dateRange: '2021 - 2025',
    summary:
      'University of Engineering and Technology Lahore',
    href: degreeLink,
    keywords: ['Biomedical Engineering', 'Artificial Intelligence', 'Medical Innovation', 'Healthcare Technology',  'Medical Devices', 'Health Informatics'],
  },
  {
    title: 'Higher Secondary School Certicate',
    dateRange: '2019 - 2021',
    summary:
      'Chenab College Jhang',
    href: degreeLink,
    keywords: ['Biology', 'Physics', 'Chemistry', 'Maths'],
  },
  {
    title: 'Secondary School Certificate',
    dateRange: '2017 - 2019',
    summary:
      'Government Boys High school Jhang City',
    href: degreeLink,
    keywords: ['Biology', 'Physics', 'Chemistry', 'Maths'],
  },
];

const EducationCard = ({ entry, index, total }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;
  const isLast = index === total - 1;
  const itemNumber = String(index + 1).padStart(2, '0');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entryItem => {
          if (entryItem.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entryItem.target);
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
      className="education-card"
      ref={ref}
      style={{
        position: 'relative',
        maxWidth: 760,
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
        style={{
          borderRadius: 32,
          padding: 'clamp(48px, 5vw, 60px) clamp(28px, 4vw, 48px) clamp(36px, 4vw, 48px)',
          background: 'linear-gradient(145deg, rgb(var(--rgbBackground)), rgb(var(--rgbBackground) / 0.85))',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgb(var(--rgbText) / 0.08)',
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
        <div style={{ height: 18 }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Link
            href={entry.href}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
              fontWeight: 700,
              lineHeight: 1.35,
              color: 'inherit',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              transition: 'color 0.3s ease',
            }}
          >
            <span
              style={{
                fontSize: '1.15rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 18px 6px 14px',
                borderRadius: 999,
                background: 'linear-gradient(120deg, var(--accent), var(--primary))',
                color: 'rgb(var(--rgbBackground))',
                boxShadow: '0 18px 45px -25px var(--accent)',
                transform: 'translateY(-6px)',
              }}
            >
              {itemNumber}
            </span>
            <span>{entry.title}</span>
          </Link>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.7, fontSize: 15, flex: '1 1 220px' }}>
              {entry.summary}
            </p>
            <span
              style={{
                fontSize: '0.95rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '8px 16px',
                borderRadius: 999,
                background: 'rgb(var(--rgbText) / 0.08)',
                border: '1px solid rgb(var(--rgbText) / 0.15)',
                boxShadow: '0 12px 32px -24px rgb(var(--rgbText) / 0.65)',
                whiteSpace: 'nowrap',
              }}
            >
              {entry.dateRange}
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
            {entry.keywords.map(keyword => (
              <span
                key={keyword}
                style={{
                  position: 'relative',
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  padding: '10px 20px 10px 18px',
                  borderRadius: 999,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: 'rgb(var(--rgbText))',
                  boxShadow: '0 20px 40px -30px rgb(var(--rgbText) / 0.85)',
                  background: 'linear-gradient(135deg, rgb(var(--rgbBackground) / 0.95), rgb(var(--rgbBackground) / 0.6))',
                  border: '1px solid rgb(var(--rgbText) / 0.25)',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    position: 'relative',
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: 'linear-gradient(180deg, var(--accent), var(--primary))',
                    boxShadow: '0 0 12px rgb(var(--accent) / 0.7)',
                  }}
                />
                {keyword}
              </span>
            ))}
          </div>
          <Button
            href={entry.href}
            iconEnd="arrow-right"
            iconHoverShift
            target="_blank"
            rel="noopener noreferrer"
            style={{ alignSelf: 'flex-start', marginTop: 12 }}
          >
            See details
          </Button>
        </div>
      </div>
    </article>
  );
};

export const meta = () => {
  return baseMeta({
    title: 'Education',
    description: 'Academic milestones and learning highlights.',
  });
};

export default function EducationRoute() {
  const educationCardResponsiveStyles = `
    @media (max-width: 594px) {
      .education-card {
        border: 2px solid var(--accent) !important;
        box-shadow: 0 0 0 1px color-mix(in lab, var(--accent) 40%, transparent), 0 18px 45px -32px var(--accent);
      }
    }
  `;

  return (
    <>
      <style>{educationCardResponsiveStyles}</style>
      <CursorFollower />
      <section aria-labelledby="education-heading">
        <div
          className="responsive-hero"
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
            className={undefined}
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
              id="education-heading"
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
              <DecoderText text="EDUCATION" start delay={120} springConfig={{ stiffness: 10, damping: 6 }} />
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
        aria-label="Education cards"
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
          {educationEntries.map((entry, index) => (
            <EducationCard key={entry.title} entry={entry} index={index} total={educationEntries.length} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
