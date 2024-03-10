"use client";
import React, { FunctionComponent, useEffect, useRef } from "react";
import styles from './style.module.css';
import Image, { StaticImageData } from 'next/image';

type SkillsProps = { skillName: string; skillIconImage: string | StaticImageData };

const SkillCard: FunctionComponent<SkillsProps> = ({ skillName, skillIconImage }) => {
    const isUrl = typeof skillIconImage === "string";
    const skillCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.skillCardAnimation);
                } else {
                    entry.target.classList.remove(styles.skillCardAnimation);
                }
            })
        });

        const skillCardElement = skillCardRef.current;
        if (skillCardElement) {
            observer.observe(skillCardElement);
        }

        return () => {
            if (skillCardElement) {
                observer.unobserve(skillCardElement);
            }
        }

    }, [skillCardRef]);

    if (isUrl) {
        return (
            <div className={styles.card} ref={skillCardRef}>
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
            <div className={styles.card} ref={skillCardRef}>
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