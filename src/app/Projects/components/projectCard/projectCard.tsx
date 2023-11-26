import React, { useEffect, useRef, FunctionComponent } from "react";
import styles from './style.module.css';
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import dynamic from "next/dynamic";

type projectCardProps = {
    projectName: string; projectDescription: string; srcImage: string | StaticImageData; codeLink: string; videoLink: string; deployedLink?: string;
};

const ProjectCard: FunctionComponent<projectCardProps> = ({ projectName, projectDescription, srcImage, codeLink, videoLink, deployedLink }) => {
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
    // useEffect(() => {
    //     const projectCardElement = projectCardRef.current;
    //     if (projectCardElement) {
    //         projectCardElement.addEventListener("mouseover", handleImageHover);
    //         projectCardElement.addEventListener("mouseleave", handleImageNotHover);

    //         // Clean up the event listener when the component unmounts
    //         return () => {
    //             projectCardElement.removeEventListener('mouseover', handleImageHover);
    //             projectCardElement.removeEventListener("mouseleave", handleImageNotHover);
    //         };
    //     }


    // }, []);



    return (<div ref={projectCardRef} onMouseOver={handleImageHover}
    onMouseLeave={handleImageNotHover} className={styles.projectCardContainer}>
        <Image className={styles.img} src={srcImage} width={320} height={180} alt={projectName} />
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


export default dynamic(() => Promise.resolve(ProjectCard), {
    ssr: false,
});