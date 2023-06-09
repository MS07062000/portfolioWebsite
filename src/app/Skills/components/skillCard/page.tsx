import React, { FunctionComponent } from "react";
import styles from './style.module.css';
import Image, { StaticImageData } from 'next/image';

type SkillsProps = { skillName: string, skillIconImage: string }

export const SkillCard: FunctionComponent<SkillsProps> = ({ skillName, skillIconImage }) => {
    return (<div className={styles.card}>
        <Image className={styles.skillImage} src={skillIconImage} width={50} height={50} alt="skillLogo"></Image>
        <p className={styles.skillName}>{skillName}</p>
    </div>);
}

