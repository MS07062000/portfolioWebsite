import React, { useRef, FunctionComponent, useEffect } from "react";
import styles from './style.module.css';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ProjectInfo } from "../../projectInfo";
import Link from "next/link";

interface ProjectCardProps {
    projectInfo: ProjectInfo;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ projectInfo: { projectName, projectDescription, srcImage, codeLink, videoLink, deployedLink } }) => {
    return (
        <div className={styles.projectCardContainer}>
            <Image className={styles.projectImg} src={srcImage} width={300} height={0} alt={projectName} loading="lazy" />
            <h3>{projectName}</h3>
            <p>{projectDescription}</p>
            <div className={styles.projectButtonsContainer}>
                {codeLink && codeLink.length > 0 && <Link href={codeLink} aria-label="GitHub Link" target="_blank">
                    <FontAwesomeIcon size="2xl" className={styles.projectCardIcon} icon={faGithub} />
                </Link>}
                {videoLink && videoLink.length > 0 && <Link href={videoLink} aria-label="Video Link" target="_blank">
                    <FontAwesomeIcon size="2xl" className={styles.projectCardIcon} icon={faYoutube} />
                </Link>}
                {deployedLink && deployedLink.length > 0 && (<Link href={deployedLink} aria-label="Deployed Link" target="_blank">
                    <FontAwesomeIcon size="2xl" className={styles.projectCardIcon} icon={faArrowUpRightFromSquare} />
                </Link>)}
            </div>
        </div>);
};

export default ProjectCard;