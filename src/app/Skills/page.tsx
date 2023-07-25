import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { default as SkillCard } from './components/skillCard/page'
import styles from './style.module.css'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import github from '../../../public/github-mark.svg'
export default function Skills() {
    return (
        <div id="skills" className={styles.container}>
            <h1 className={styles.title}>
                <FontAwesomeIcon icon={faLaptopCode} />
                <span> Skills & Abilities</span>
            </h1>
            <div className={styles.skillsContainer}>
                <SkillCard skillIconImage="https://img.icons8.com/color/48/000000/html-5--v1.png" skillName="HTML5"></SkillCard>
                <SkillCard skillIconImage="https://img.icons8.com/color/48/000000/css3.png" skillName="CSS"></SkillCard>
                <SkillCard skillIconImage="https://img.icons8.com/color/48/000000/javascript--v1.png" skillName="Javascript"></SkillCard>
                <SkillCard skillIconImage="https://img.icons8.com/color/48/000000/nodejs.png" skillName="NodeJS"></SkillCard>
                <SkillCard skillIconImage="https://img.icons8.com/color/48/000000/express-js" skillName="ExpressJS"></SkillCard>
                <SkillCard skillIconImage="https://img.icons8.com/color/48/000000/mongodb.png" skillName="MongoDB"></SkillCard>
                <SkillCard skillIconImage="https://img.icons8.com/color/48/000000/flutter.png" skillName="Flutter"></SkillCard>
                <SkillCard skillIconImage="https://img.icons8.com/color/48/000000/firebase.png" skillName="Firebase"></SkillCard>
                <SkillCard skillIconImage="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" skillName="Java"></SkillCard>
                <SkillCard skillIconImage={github} skillName="GitHub"></SkillCard>
            </div>
        </div>);
}