"use client";
import styles from './style.module.css';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { experienceData } from './experienceData';
import { ExperienceInfo } from './experienceInfo';
const ExperienceCard = dynamic(() => import('../Experience/components/experienceCard/experienceCard'), {
    ssr: false,
});

export default function Experience() {
    const experienceCards = experienceData.map((experienceInfo: ExperienceInfo, index: number) => (
        <ExperienceCard
            key={'experience' + index}
            {...experienceInfo}
            alignment={index % 2 == 0 ? 'left' : 'right'}
        />
    ));
    return (
        <div id="experience" className={styles.container}>
            <h1 className={styles.title}>
                <FontAwesomeIcon icon={faBriefcase} />
                <span> Experience</span>
            </h1>
            <div className={styles.experienceTimeline}>
                {experienceCards}
            </div>
        </div>
    )
}
