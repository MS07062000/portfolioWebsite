"use client";
import styles from './style.module.css';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectData } from './projectData';

import ProjectCard from './components/projectCard/projectCard';

export default function Projects() {
    return (
        <div id="projects" className={styles.container}>
            <h1 className={styles.title}>
                <FontAwesomeIcon icon={faLaptopCode} />
                <span> Projects</span>
            </h1>
            <div className={styles.projectsContainer}>
                <div className={styles.projects}>
                    {projectData.map((projectInfo, index) => (
                        <ProjectCard key={index} projectInfo={projectInfo} />
                    ))}
                </div>
            </div>
        </div>
    )
}
