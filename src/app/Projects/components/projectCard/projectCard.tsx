import React, { useRef, FunctionComponent, useEffect } from "react";
import styles from './style.module.css';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ProjectInfo } from "../../projectInfo";

interface ProjectCardProps {
    projectInfo: ProjectInfo;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ projectInfo: { projectName, projectDescription, srcImage, codeLink, videoLink, deployedLink } }) => {
    return (
        <div className={styles.projectCardContainer}>
            <Image className={styles.projectImg} src={srcImage} width={300} height={180} alt={projectName} loading="lazy" />
            <h3>{projectName}</h3>
            <p>{projectDescription}</p>
            <div className={styles.projectButtonsContainer}>
                {codeLink && codeLink.length > 0 && <a href={codeLink} aria-label="GitHub Link">
                    <FontAwesomeIcon size="2xl" className={styles.projectCardIcon} icon={faGithub} />
                </a>}
                {videoLink && videoLink.length > 0 && <a href={videoLink} aria-label="Video Link">
                    <FontAwesomeIcon size="2xl" className={styles.projectCardIcon} icon={faYoutube} />
                </a>}
                {deployedLink && deployedLink.length > 0 && (<a href={deployedLink} aria-label="Deployed Link">
                    <FontAwesomeIcon size="2xl" className={styles.projectCardIcon} icon={faArrowUpRightFromSquare} />
                </a>)}
            </div>
        </div>);
};

export default ProjectCard;