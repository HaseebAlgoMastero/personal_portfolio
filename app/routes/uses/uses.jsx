import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';


export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of AI/ML tools, frameworks, hardware, and software that I use daily for machine learning and artificial intelligence projects. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>AI/ML Frameworks</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.tensorflow.org/">TensorFlow</Link> is my go-to framework for
                    deep learning projects. I use it for computer vision, NLP, and custom model development.
                    The ecosystem and community support make it ideal for production deployments.
                  </ListItem>
                  <ListItem>
                    <Link href="https://pytorch.org/">PyTorch</Link> is my preferred choice for research and
                    experimentation. The dynamic computation graph and intuitive API make it perfect for
                    rapid prototyping and model iteration.
                  </ListItem>
                  <ListItem>
                    For data preprocessing and machine learning pipelines, I rely on{' '}
                    <Link href="https://scikit-learn.org/">scikit-learn</Link>. It's excellent for
                    traditional ML algorithms and provides a solid foundation for feature engineering.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Agentic AI Applications</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://platform.openai.com/docs/assistants/overview">OpenAI Agentic SDK</Link> is my primary framework for building sophisticated AI agents and multi-agent systems. I use it to create autonomous agents that can reason, plan, and execute complex tasks with natural language understanding and generation capabilities.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.crewai.com/">CrewAI</Link> is essential for orchestrating multi-agent workflows where different AI agents collaborate to solve complex problems. I use it to coordinate specialized agents for research, analysis, and decision-making processes.
                  </ListItem>
                  <ListItem>
                    For building conversational AI systems, I leverage <Link href="https://docs.anthropic.com/claude/docs">Anthropic's Claude API</Link> for advanced reasoning capabilities and <Link href="https://docs.aws.amazon.com/bedrock/">AWS Bedrock</Link> for enterprise-grade AI model deployment and management.
                  </ListItem>
                  <ListItem>
                    For agent memory and context management, I use <Link href="https://www.pinecone.io/">Pinecone</Link> for vector storage and <Link href="https://docs.langchain.com/docs/">LangChain</Link> for building complex agent workflows with memory persistence and tool integration.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development & Data</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://code.visualstudio.com/">VS Code</Link> as my primary
                    development environment, with Python extensions and Jupyter notebook support
                    for data science workflows.
                  </ListItem>
                  <ListItem>
                    <Link href="https://jupyter.org/">Jupyter Notebooks</Link> are essential for
                    data exploration, model prototyping, and sharing research findings with
                    interactive visualizations.
                  </ListItem>
                  <ListItem>
                    For version control and collaboration, I use <Link href="https://git-scm.com/">Git</Link> with{' '}
                    <Link href="https://github.com/">GitHub</Link> for hosting repositories and
                    managing ML model versions with DVC.
                  </ListItem>
                  <ListItem>
                    <Link href="https://pandas.pydata.org/">Pandas</Link> and <Link href="https://numpy.org/">NumPy</Link> are my
                    go-to libraries for data manipulation and numerical computing. They form the
                    foundation of most ML workflows.
                  </ListItem>
                  <ListItem>
                    For data visualization, I use <Link href="https://matplotlib.org/">Matplotlib</Link> and{' '}
                    <Link href="https://seaborn.pydata.org/">Seaborn</Link> for statistical plots,
                    and <Link href="https://plotly.com/">Plotly</Link> for interactive dashboards.
                  </ListItem>
                  <ListItem>
                    For model deployment and serving, I use <Link href="https://fastapi.tiangolo.com/">FastAPI</Link> for
                    building APIs and <Link href="https://www.docker.com/">Docker</Link> for containerization
                    to ensure consistent environments.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System & Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>Custom built with RTX 4090 for ML training</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Ubuntu 22.04 LTS with CUDA support</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>GPU</TableHeadCell>
                    <TableCell>NVIDIA RTX 4090 24GB VRAM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>RAM</TableHeadCell>
                    <TableCell>64GB DDR4 for large dataset processing</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Storage</TableHeadCell>
                    <TableCell>2TB NVMe SSD for fast data access</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cloud Computing</TableHeadCell>
                    <TableCell>Google Colab Pro, AWS EC2 instances</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Development Environment</TableHeadCell>
                    <TableCell>Docker, Conda, for environment management</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
