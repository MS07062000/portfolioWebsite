"use client";
import Image from 'next/image'
import styles from '../AboutMe/style.module.css'
import profilePic from '../../../public/murali.jpeg'
import { useEffect, useMemo, useRef } from 'react';
export default function AboutMe() {
    const imgRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLParagraphElement>(null);
    const infoRef = useRef<HTMLParagraphElement>(null);
    const contactRef = useRef<HTMLButtonElement>(null);
    const refs = useMemo(() => [imgRef, titleRef, infoRef, contactRef], [imgRef, titleRef, infoRef, contactRef]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const currentRef = refs.find(ref => ref.current === entry.target);
                    if (currentRef && currentRef.current) {
                        currentRef.current.classList.add(getAnimationClass(currentRef.current));
                    }
                } else {
                    const currentRef = refs.find(ref => ref.current === entry.target);
                    if (currentRef && currentRef.current) {
                        currentRef.current.classList.remove(getAnimationClass(currentRef.current));
                    }
                }
            });
        });


        refs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            refs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [refs]);

    function getAnimationClass(element: HTMLElement) {
        // Define your logic to determine the appropriate animation class based on the element
        if (element === imgRef.current) {
            return styles.bounceInFromLeftAnimation;
        } else if (element === titleRef.current) {
            return styles.bounceInFromRightAnimation;
        } else if (element === infoRef.current) {
            return styles.bounceInFromRightAnimation;
        } else if (element === contactRef.current) {
            return styles.pulse;
        }
        return '';
    }

    return (
        <div id="aboutMe" className={styles.aboutMeContainer}>
            <div className={styles.imageContainer}>
                <Image ref={imgRef} src={profilePic} alt="Picture of the author"
                    className={styles.selfImage}></Image>
            </div>
            <div className={styles.selfInformationContainer}>
                <p ref={titleRef} className={styles.title}>So, who am I?</p>
                <p ref={infoRef} className={styles.information}>
                    Hello, I&apos;m Murali Singh, a junior fullstack developer with a strong passion for web and app development. I am enthusiastic about creating dynamic and engaging experiences for users through my coding skills.
                    <span className={styles.information}>
                        With a solid foundation in both front-end and back-end technologies, I enjoy building innovative and responsive web applications. My expertise lies in HTML, CSS, JavaScript, and various libraries like React for front-end development. On the back-end, I am proficient in languages like Node.js,Express.js along with databases such as MongoDB.
                    </span>
                    <span className={styles.information}>
                        Currently, I am seeking opportunities to expand my skills and contribute to exciting projects. Whether it&apos;s crafting user-friendly interfaces or developing robust back-end systems, I am eager to tackle new challenges and contribute to the success of any development team.
                    </span>
                    <span className={styles.information}>Feel free to reach out to me to discuss potential collaborations, project ideas, or just to connect. Let&apos;s build something amazing together!
                    </span>
                </p>
                <a href="https://drive.google.com/file/d/1WHIXmMFif8_XeQ-pSBNwRjpBMiJC7Urh/view">
                    <button ref={contactRef} className={styles.contactMeButton}>Hire Me</button>
                </a>
            </div>
        </div>
    );
}