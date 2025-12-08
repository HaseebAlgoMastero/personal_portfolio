import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import heroImage from '~/assets/hero.png';
import taxImage from '~/assets/rate.png';
import rateImage from '~/assets/ratemy.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import sprLessonLight from '~/assets/spr-lesson-builder-light.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { ProjectSummary } from '../home/project-summary';
import { DecoderText } from '~/components/decoder-text';
import { DottedSurface } from '~/components/ui/dotted-surface';
import { CursorFollower } from '~/components/ui/cursor-follower';
import { useEffect, useRef, useState } from 'react';
import styles from '../home/home.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Projects',
    description: 'Selected projects and product collaborations.',
  });
};

export default function ProjectsRoute() {
  const [visibleSections, setVisibleSections] = useState([]);
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();

  useEffect(() => {
    const sections = [projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix];

    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            sectionObserver.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <>
      <CursorFollower />
      <div className={styles.home}>
        <section aria-labelledby="projects-heading">
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
                margin: '0 37px',
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
                id="projects-heading"
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
                <DecoderText text="PROJECTS" start delay={120} springConfig={{ stiffness: 10, damping: 6 }} />
                <span
                  aria-hidden
                  style={{
                    width: 12,
                    height: '1.15em',
                    borderLeft: '3px solid transparent',
                  }}
                />
              </h1>
            </div>
          </div>
        </section>

        <ProjectSummary
          id="project-1"
          sectionRef={projectOne}
          visible={visibleSections.includes(projectOne.current)}
          index={1}
          title="Staron AI"
          description="Staron AI is a next-gen platform that blends visual design, AI intelligence, and developer collaboration to help you build web apps fast. Our smart builder lets you design interfaces, write clean code, sync with GitHub, and get backend support when needed — all in one place."
          buttonText="View project"
          buttonLink="https://staron.ai/"
          model={{
            type: 'laptop',
            alt: 'Staron AI web app builder dashboard',
            textures: [
              {
                srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
                placeholder: sprTexturePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-2"
          sectionRef={projectTwo}
          visible={visibleSections.includes(projectTwo.current)}
          index={2}
          title="Ratemyresume"
          description="Enhance your job search with AI-driven resume optimization. Personalize your resume to boost your chances of landing interviews and stand out with Rate My Resume."
          buttonText="Visit website"
          buttonLink="https://ratemyresume.com/"
          buttonTarget="_self"
          alternate
          model={{
            type: 'phone',
            alt: 'Rate My Resume mobile preview',
            textures: [
              {
                srcSet: `${rateImage} 640w`,
                placeholder: sliceTexturePlaceholder,
              },
              {
                srcSet: `${rateImage} 640w`,
                placeholder: sliceTexturePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-3"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Mealcraver"
          description="Your ultimate companion for crave-worthy meals and real wellness. Smart nutrition, delicious meals, and real-life health made simple. Get personalized meal plans, practical tips, and recipes you'll actually want to cook."
          buttonText="Visit website"
          buttonLink="http://www.mealcraver.com/"
          buttonTarget="_self"
          model={{
            type: 'laptop',
            alt: 'Mealcraver hero preview',
            textures: [
              {
                srcSet: `${heroImage} 1280w`,
                placeholder: sliceTexturePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-4"
          sectionRef={projectFour}
          visible={visibleSections.includes(projectFour.current)}
          index={4}
          title="TheTaxTruths"
          description="The Only Tax, Financial, Insurance, Investment, Real Estate and Estate Planning Software for Modern Tax Professional. Unlock 2X your revenue without onboarding a single new client. Crafted by a seasoned tax law strategist and Registered Investment Advisor (RIA) to streamline your advisory workflow and maximize client ROI."
          buttonText="Visit website"
          buttonLink="https://thetaxtruths.com/"
          buttonTarget="_self"
          alternate
          model={{
            type: 'phone',
            alt: 'TheTaxTruths mobile preview',
            textures: [
              {
                srcSet: `${taxImage} 640w`,
                placeholder: sliceTexturePlaceholder,
              },
              {
                srcSet: `${taxImage} 640w`,
                placeholder: sliceTexturePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-5"
          sectionRef={projectFive}
          visible={visibleSections.includes(projectFive.current)}
          index={5}
          title="Provectus Canary"
          description="Advanced pathogen detection system for healthcare facilities that provides early warning of contaminants and threats. Features flexible deployment options and comprehensive monitoring."
          buttonText="View project"
          buttonLink="https://simplifiautomation.com/provectus-canary"
          buttonTarget="_self"
          model={{
            type: 'laptop',
            alt: 'Annotating a biomedical image in the Slice app',
            textures: [
              {
                srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
                placeholder: sliceTexturePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-6"
          sectionRef={projectSix}
          visible={visibleSections.includes(projectSix.current)}
          index={6}
          title="InfiSearch - Scientific Research Assistant"
          description="A sophisticated multi-agent research assistant powered by OpenAI Agentic SDK and GPT-4. Orchestrates specialized AI agents to autonomously conduct comprehensive scientific research."
          model={{
            type: 'laptop',
            alt: 'InfiSearch AI Research Assistant Dashboard',
            textures: [
              {
                srcSet: `${sprLessonLight} 1280w`,
                placeholder: sprTexturePlaceholder,
              },
            ],
          }}
        />
        <Footer />
      </div>
    </>
  );
}
