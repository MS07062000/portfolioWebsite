"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.css';
import { FunctionComponent, useEffect, useRef, useState } from "react";
import ExperienceInfo from "../../experienceInfo";

interface ExperienceCardProps extends ExperienceInfo {
    alignment: 'left' | 'right';
}

const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({ companyName, jobTitle, startDate, endDate, alignment }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (alignment === 'left') {
                        entry.target.classList.add(viewportWidth < 768 ? styles.swingInLeftForward : styles.swingInRightForward);
                    } else {
                        entry.target.classList.add(styles.swingInLeftForward);
                    }
                } else {
                    if (alignment === 'left') {
                        entry.target.classList.remove(viewportWidth < 768 ? styles.swingInLeftForward : styles.swingInRightForward);
                    } else {
                        entry.target.classList.remove(styles.swingInLeftForward);
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
    }, [cardRef, alignment, viewportWidth]);

    return (
        <div ref={cardRef} className={`${styles.experienceCardContainer} ${alignment === 'left' ? styles.left : styles.right}`}>
            <div className={styles.content}>
                <h4>{companyName}</h4>
                <h3>{jobTitle}</h3>
                <p style={{ marginBottom: 0 }}>{startDate} to {endDate}</p>
            </div>
        </div>
    );
}

export default ExperienceCard;