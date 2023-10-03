import Image from 'next/image'
import styles from '../AboutMe/style.module.css'
import profilePic from '../../../public/murali.jpeg'
import Link from 'next/link';
export default function AboutMe() {
    return (
        <div id="aboutMe" className={styles.aboutMeContainer}>
            <div className={styles.imageContainer}>
                <Image src={profilePic} alt="Picture of the author"
                    className={styles.selfImage}></Image>
            </div>
            <div className={styles.selfInformationContainer}>
                <p className={styles.title}>So, who am I?</p>
                <p className={styles.information}>
                    Hello, I&apos;m Murali Singh, a junior fullstack developer with a strong passion for web and app development. I am enthusiastic about creating dynamic and engaging experiences for users through my coding skills.
                </p>
                <p className={styles.information}>
                    With a solid foundation in both front-end and back-end technologies, I enjoy building innovative and responsive web applications. My expertise lies in HTML, CSS, JavaScript, and various libraries like React for front-end development. On the back-end, I am proficient in languages like Node.js,Express.js along with databases such as MongoDB.
                </p>
                <p className={styles.information}>
                    Currently, I am seeking opportunities to expand my skills and contribute to exciting projects. Whether it&apos;s crafting user-friendly interfaces or developing robust back-end systems, I am eager to tackle new challenges and contribute to the success of any development team.
                </p>
                <p className={styles.information}>Feel free to reach out to me to discuss potential collaborations, project ideas, or just to connect. Let&apos;s build something amazing together!</p>
                <a href="https://www.upwork.com/workwith/muralis3">
                    <button className={styles.contactMeButton}>Hire Me</button>
                </a>
            </div>
        </div>
    );
}