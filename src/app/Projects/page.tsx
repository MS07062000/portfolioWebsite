"use client";
import styles from './style.module.css';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectData } from './projectData';
import { ProjectInfo } from './projectInfo';
import ProjectCard from './components/projectCard/projectCard';

export default function Projects() {
    const projectCards = projectData.map((projectInfo: ProjectInfo, index: Number) => (
        <ProjectCard
            key={'project' + index}
            {...projectInfo}
        />
    ));
    return (
        <div id="projects" className={styles.container}>
            <h1 className={styles.title}>
                <FontAwesomeIcon icon={faLaptopCode} />
                <span> Projects</span>
            </h1>
            <div className={styles.projects}>
                {projectCards}
            </div>
        </div>
    )
}
