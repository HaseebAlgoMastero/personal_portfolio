import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import papers from '~/data/research-papers.json';

export const meta = () => {
  return baseMeta({
    title: 'Research Projects',
    description: 'Peer-reviewed publications and research case studies.',
    prefix: 'Projects',
  });
};

function PaperCard({ paper }) {
  return (
    <div style={{
      background: 'rgb(var(--rgbBackground))',
      borderRadius: 12,
      padding: 20,
      boxShadow: '0 10px 30px -15px rgb(var(--rgbText) / 0.15)',
      marginBottom: 16,
    }}>
      <h3 style={{ margin: '0 0 6px 0' }}>{paper.title}</h3>
      <div style={{ opacity: 0.8, marginBottom: 8 }}>{paper.authors}</div>
      <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 12 }}>
        {paper.venue} • {paper.year}
      </div>
      {paper.abstract && (
        <ProjectSectionText as="p" style={{ marginBottom: 12 }}>
          {paper.abstract}
        </ProjectSectionText>
      )}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {paper?.links?.pdf && (
          <Link href={paper.links.pdf}>PDF</Link>
        )}
        {paper?.links?.doi && (
          <Link href={paper.links.doi}>DOI</Link>
        )}
        {paper?.links?.code && (
          <Link href={paper.links.code}>Code</Link>
        )}
      </div>
    </div>
  );
}

export default function ResearchProjectsRoute() {
  return (
    <>
      <ProjectContainer>
        <ProjectHeader
          title="Research Projects"
          description="A collection of my published papers and research explorations."
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>Publications</ProjectSectionHeading>
            {papers.map((paper, i) => (
              <PaperCard key={`${paper.title}-${i}`} paper={paper} />
            ))}
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
}



