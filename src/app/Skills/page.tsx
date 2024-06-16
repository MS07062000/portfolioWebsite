import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { default as SkillCard } from './components/skillCard/skillCard'
import styles from './style.module.css'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import skillCards from './skillsData';
import SkillInfo from './skillInfo';

export default function Skills() {
    return (
        <div id="skills" className={styles.container}>
            <h1 className={styles.title}>
                <FontAwesomeIcon icon={faLaptopCode} />
                <span> Skills & Abilities</span>
            </h1>
            <div className={styles.skillsContainer}>
                {skillCards.map((skill: SkillInfo, index: number) => <SkillCard key={"skill" + index} {...skill} />)}
            </div>
        </div>);
}
