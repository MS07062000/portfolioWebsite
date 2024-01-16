import React, {useRef, FunctionComponent } from "react";
import styles from './style.module.css';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ProjectInfo } from "../../projectInfo";


const ProjectCard: FunctionComponent<ProjectInfo> = ({ projectName, projectDescription, srcImage, codeLink, videoLink, deployedLink }) => {
    const projectCardRef = useRef<HTMLDivElement>(null);
    const projectInfoRef = useRef<HTMLDivElement>(null);
    const handleImageHover = () => {
        const projectInfoElement = projectInfoRef.current;
        if (projectInfoElement) {
            projectInfoElement.style.opacity = "1";
            projectInfoElement.style.top = "0%";
        }
    };

    const handleImageNotHover = () => {
        const projectInfoElement = projectInfoRef.current;
        if (projectInfoElement) {
            projectInfoElement.style.opacity = "0";
            projectInfoElement.style.top = "85%";
        }

    }

    return (<div ref={projectCardRef} onMouseOver={handleImageHover}
    onMouseLeave={handleImageNotHover} className={styles.projectCardContainer}>
        <Image className={styles.img} src={srcImage} width={320} height={180} alt={projectName}   loading="lazy" />
        <div className={styles.projectInfo} ref={projectInfoRef}>
            <p>{projectDescription}</p>
            <div className={styles.projectButtonsContainer}>
                {codeLink && codeLink.length > 0 && <a href={codeLink}>
                    <FontAwesomeIcon size="2xl" icon={faGithub} />
                </a>}
                {videoLink && videoLink.length > 0 && <a href={videoLink}>
                    <FontAwesomeIcon size="2xl" icon={faYoutube} />
                </a>}
                {deployedLink && deployedLink.length > 0 && (<a href={deployedLink}>
                    <FontAwesomeIcon size="2xl" icon={faArrowUpRightFromSquare} />
                </a>)}
            </div>
        </div>
    </div>);
};

export default ProjectCard;