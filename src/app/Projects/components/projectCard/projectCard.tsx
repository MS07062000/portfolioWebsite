import React,{Component, FunctionComponent} from "react";
import styles from './style.module.css';
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
type projectCardProps={
    projectName:string;projectDescription:string;srcImage:string|StaticImageData;codeLink:string;videoLink:string;deployedLink?:string;
};

export const ProjectCard:FunctionComponent<projectCardProps>=({projectName,projectDescription,srcImage,codeLink,videoLink,deployedLink})=>{
return (<div>
    <Image className={styles.img} src={srcImage} alt={projectName} />
    <div>
        <p>{projectName}</p>
        <p>{projectDescription}</p>
        <div className={styles.projectButtonsContainer}>
            <Link href={codeLink}>
            <button><FontAwesomeIcon icon={faGithub} /></button>
            </Link>
            <Link href={videoLink}>
            <button><FontAwesomeIcon icon={faYoutube}/></button>
            </Link>
            {deployedLink && (<Link href={deployedLink}>
            <button><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
            </Link>)}
        </div>
    </div>
</div>);
};