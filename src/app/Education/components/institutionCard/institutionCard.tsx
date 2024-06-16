"use client";
import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from 'next/image';
import styles from '../institutionCard/style.module.css';

type InstitutionCardProps = {
    index: number;
    srcImage: string | StaticImageData; courseName: string; institutionName: string; yearOfCompletion: string;
}

const InstitutionCard: React.FC<InstitutionCardProps> = ({ index, srcImage, courseName, institutionName, yearOfCompletion }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (index % 2 === 0) {
                        entry.target.classList.add(styles.institutionCardEnteranceAnimationEvenChild);
                    } else {
                        entry.target.classList.add(styles.institutionCardEnteranceAnimationOddChild);
                    }
                } else {
                    if (index % 2 === 0) {
                        entry.target.classList.remove(styles.institutionCardEnteranceAnimationEvenChild);
                    } else {
                        entry.target.classList.remove(styles.institutionCardEnteranceAnimationOddChild);
                    }
                }
            });
        });


        const currentCardRef = cardRef.current;

        if (currentCardRef) {
            observer.observe(currentCardRef);
        }

        return () => {
            if (currentCardRef) {
                observer.unobserve(currentCardRef);
            }
        };
    }, [cardRef, index]);

    return (
        <div ref={cardRef} className={`${styles.card} ${styles.grid}`}>
            <div className={styles.img_column}>
                <Image className={styles.img} src={srcImage} alt={courseName} loading="lazy" />
            </div>
            <div className={styles.info_column}>
                <h2 className={styles.course_name}>{courseName}</h2>
                <h3 className={styles.institution_name}>{institutionName}</h3>
                <h4 className={styles.year_Of_Completion}>Completed in {yearOfCompletion}</h4>
            </div>
        </div>
    );
}

export default InstitutionCard;