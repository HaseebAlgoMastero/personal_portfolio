import { Footer } from '~/components/footer';
import { DecoderText } from '~/components/decoder-text';
import { CursorFollower } from '~/components/ui/cursor-follower';
import { DottedSurface } from '~/components/ui/dotted-surface';
import { Button } from '~/components/button';
import { Link } from '~/components/link';
import { baseMeta } from '~/utils/meta';
import { useEffect, useRef, useState } from 'react';

const publications = [
  {
    title: 'Convolutional Neural Network Driven Electroencephalogram Characterization for Robust and Efficient Schizophrenia Diagnosis',
    summary:
      'This study uses EEG signals to detect abnormal brain activity associated with schizophrenia. Traditional machine learning requires heavy preprocessing, but deep learning—specifically a CNN—can classify normal and schizophrenic EEG patterns more effectively. The proposed CNN model achieves 96.4% accuracy, outperforming existing methods and demonstrating strong potential for robust early diagnosis.',
    href: 'https://www.researchgate.net/publication/387891015_Convolutional_Neural_Network_Driven_Electroencephalogram_Characterization_for_Robust_and_Efficient_Schizophrenia_Diagnosis',
    keywords: ['EEG', 'Digital Signal Processing','Schizophrenia', 'Deep Learning', 'Convolutional Neural Network (CNN)', 'Brain Activity'],
  },
  {
    title: 'Detection of Sinus Bradycardia with Electrocardiogram using Machine Learning Techniques',
    summary:
      'This study evaluates seven machine learning techniques to identify sinus bradycardia—a type of cardiovascular disease—using ECG signals. A comparative analysis on a small dataset of 94 records shows that the proposed lightweight ANN model achieves the highest accuracy at 95.2%, outperforming KNN, SVM, and Random Forest. The results highlight the strong potential of machine learning models in supporting clinicians with reliable bradycardia diagnosis, even with limited data.',
    href: 'https://www.researchgate.net/publication/391831623_Detection_of_Sinus_Bradycardia_with_Electrocardiogram_using_Machine_Learning_Techniques',
    keywords: ['Cardiovascular Diseases', 'ECG', 'Sinus Bradycardia', 'Digital Signal Processing', 'Machine Learning', 'Artificial Neural Network'],
  },
  {
    title: 'Using Machine Learning for Air Quality Prediction and Sustainable Urban Planning',
    summary:
      'This study analyzes air pollution trends in Lahore from 2003 to 2022 using eight pollutants and four weather factors. Multiple time-series models—including SARIMA, SARIMAX, LSTM, and NAR—were evaluated, with the NAR model achieving the best performance (RMSE 23.52, DTW 5023). Findings indicate a projected 13% increase in AQI by 2030 compared to 2022, emphasizing worsening air quality. The research supports strategic policymaking and aligns with the SDG goal of ensuring “Good Health and Well-Being.',
    href: 'https://www.sciencedirect.com/science/article/pii/S2666188825005453?via%3Dihub',
    keywords: ['Air Pollution', 'AQI', 'Time-Series Forecasting', 'NAR', 'LSTM', 'SARIMA', 'SDGs', 'Environmental Health'],
  },
  {
    title: 'Transfer Learning-Based Deep Learning Model with XAI Integration for Breast Cancer Histopathology Classification',
    summary:
      'This work introduces a hybrid breast cancer diagnosis model that combines DenseNet121 with explainable AI methods (Grad-CAM & Grad-CAM++) to provide accurate and interpretable predictions on histopathology images. With a customized classification head and strong data augmentation, the model achieves 95.56% accuracy on BreakHis and 91.7% on ICIAR 2018, outperforming VGG16 and ResNet50. Its lightweight design (33 MB, 8.1M parameters) and rapid inference make it suitable for real clinical deployment, especially in low-resource settings.z',
    href: 'https://drive.google.com/file/d/1SqIWPyVs_medgq6se63sUnsLyXtTz4SJ/view',
    keywords: ['Breast Cancer', 'Diagnosis', 'Transfer Learning', 'DenseNet121', 'XAI', 'Grad-CAM', 'Grad-CAM++'],
  },
  {
    title: 'Diabetes Detection with Hybrid Deep Learning Models',
    summary:
      'This study introduces hybrid ML–DL models (CNN-RF, CNN-KNN, and CNN-LSTM) to improve diabetes diagnosis using the PIMA dataset. The proposed CNN-LSTM model—combining 1D convolutions with an LSTM layer—achieves 84% accuracy, surpassing standalone LSTM (78%) and Random Forest (76%). It also delivers strong clinical metrics (precision 0.88, F1-score 0.89), reducing false negatives by 15%. These results demonstrate the superior diagnostic potential of hybrid architectures for early diabetes detection.',
    href: 'https://drive.google.com/file/d/1knISK6UisP_i0J_7rCbxauDm34iFOjzk/view',
    keywords: ['Diabetes', 'Machine Learning', 'Deep Learning', 'CNN-LSTM', 'Hybrid Model', 'PIMA Dataset','Medical Diagnosis'],
  },
];

const PublicationCard = ({ paper, index, total }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;
  const isLast = index === total - 1;
  const paperNumber = String(index + 1).padStart(2, '0');

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
      className="research-card"
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
        className="research-card-inner"
        style={{
          borderRadius: 32,
          padding: 'clamp(48px, 5vw, 60px) clamp(28px, 4vw, 48px) clamp(36px, 4vw, 48px)',
          background: 'linear-gradient(145deg, rgb(var(--rgbBackground)), rgb(var(--rgbBackground) / 0.85))',
          position: 'relative',
          overflow: 'hidden',
          border: 'var(--research-card-border, 1px solid rgb(var(--rgbText) / 0.08))',
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
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <Link
            href={paper.href}
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
              justifyContent: 'space-between',
              width: '100%',
              textAlign: 'left',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontSize: '1.15rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 18px 6px 14px',
                borderRadius: 999,
                background: 'linear-gradient(120deg, var(--accent), var(--primary))',
                color: 'rgb(var(--rgbBackground))',
                boxShadow: '0 18px 45px -25px var(--accent)',
              }}
            >
              {paperNumber}
            </span>
            <span>{paper.title}</span>
          </Link>
          <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.7, fontSize: 15 }}>
            {paper.summary}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
            {paper.keywords.map(keyword => (
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
            href={paper.href}
            iconEnd="arrow-right"
            iconHoverShift
            target="_blank"
            rel="noopener noreferrer"
            style={{ alignSelf: 'flex-start', marginTop: 12 }}
          >
            View paper
          </Button>
        </div>
      </div>
    </article>
  );
};

export const meta = () => {
  return baseMeta({
    title: 'Articles & Publications',
    description: 'Research publications and related writing.',
  });
};

export default function ArticlesRoute() {
  const researchCardResponsiveStyles = `
    @media (max-width: 594px) {
      .research-card {
        border: 2px solid var(--accent) !important;
        box-shadow: 0 0 0 1px color-mix(in lab, var(--accent) 40%, transparent), 0 18px 45px -32px var(--accent);
      }
      .research-card-inner {
        --research-card-border: none !important;
      }
    }
  `;

  return (
    <>
      <style>{researchCardResponsiveStyles}</style>
      <CursorFollower />
      <section aria-labelledby="research-heading">
        <div
          className="responsive-hero research-hero"
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
            padding: 'var(--hero-inner-gap, 12px) var(--hero-content-padding, 34px)',
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
              padding: '0 var(--hero-content-padding, 34px)',
              textAlign: 'inherit',
            }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  @keyframes caretBlink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
                  @keyframes badgeGlow {
                    0% { box-shadow: 0 0 0 rgb(var(--rgbText) / 0); }
                    70% { box-shadow: 0 8px 24px -8px rgb(var(--rgbText) / 0.35); }
                    100% { box-shadow: 0 0 0 rgb(var(--rgbText) / 0); }
                  }
                `,
              }}
            />
            <h1
              id="research-heading"
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
              <DecoderText text="RESEARCH PUBLICATIONS" start delay={120} springConfig={{ stiffness: 10, damping: 6 }} />
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

      <section
        aria-label="Publication cards"
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
          {publications.map((paper, index) => (
            <PublicationCard key={paper.title} paper={paper} index={index} total={publications.length} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
