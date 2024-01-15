import React, { FunctionComponent } from "react";
import styles from './style.module.css';
import Image, { StaticImageData } from 'next/image';

type SkillsProps = { skillName: string; skillIconImage: string|StaticImageData }

const SkillCard: FunctionComponent<SkillsProps> = ({ skillName, skillIconImage }) => {
    const isUrl = typeof skillIconImage === "string";

    if (isUrl) {
        return (
            <div className={styles.card}>
                <Image
                    className={styles.skillImage}
                    src={skillIconImage}
                    width={50}
                    height={50}
                    alt="skillLogo"
                    loading="lazy"
                />
                <p className={styles.skillName}>{skillName}</p>
            </div>
        );
    } else {
        return (
            <div className={styles.card}>
                <Image
                    className={styles.skillImage}
                    src={skillIconImage}
                    width={50}
                    height={50}
                    alt="skillLogo"
                />
                <p className={styles.skillName}>{skillName}</p>
            </div>
        );
    }
}


export default SkillCard;