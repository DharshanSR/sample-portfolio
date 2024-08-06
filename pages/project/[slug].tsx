import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Project, projects } from '../../data/projectData';
import styles from './ProjectDetail.module.css'; // Import the CSS Module
import PageTransition from '@/components/PageTransition';

type ProjectProps = {
    project: Project;
};

const ProjectDetail = ({ project }: ProjectProps) => {
    return (
        <PageTransition>
        <div className={styles.container}>
            <Link href="/" legacyBehavior>
                <a className={styles.backLink}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={styles.backArrow}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </a>
            </Link>

            <h1 className={styles.title}>{project.title}</h1>
            <div className={styles.imageContainer}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.image}
                />
            </div>
            {project.additionalImages && (
                <div className={styles.additionalImages}>
                    {project.additionalImages.map((imgSrc, index) => (
                        <div key={index} className={styles.additionalImageContainer}>
                            <Image
                                src={imgSrc}
                                alt={`${project.title} additional image ${index + 1}`}
                                fill
                                className={styles.additionalImage}
                            />
                        </div>
                    ))}
                </div>
            )}
            <div >
                <h2 className={styles.aboutSection}>About</h2>
                <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                />
            </div>
            <div className={styles.techList}>
                <h3 className={styles.techHeading}>Technologies Used</h3>
                <ul className={styles.techItem}>
                    {project.technologies.map((tech, index) => (
                        <li key={index} className={styles.techBox}>
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>


            <div className={styles.links}>
                <div className={styles.linkSection}>
                    <h4 className={styles.linkHeading}>Live Demo</h4>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.link}>View Demo</a>
                </div>
                <div className={styles.linkSection}>
                    <h4 className={styles.linkHeading}>GitHub Code</h4>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>View Code</a>
                </div>
            </div>
        </div>
        </PageTransition>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const project = projects.find((project) => project.slug === params?.slug);

    return {
        props: {
            project,
        },
    };
};

export default ProjectDetail;
