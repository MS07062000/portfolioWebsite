import React, { FunctionComponent } from "react";
import styles from './style.module.css';
import Image from 'next/image';

type SkillsProps = { skillName: string; skillIconImage: string }

const SkillCard: FunctionComponent<SkillsProps> = ({ skillName, skillIconImage }) => {
    // Check if skillIconImage is a URL or an imported SVG
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