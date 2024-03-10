import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.css';
import { FunctionComponent } from "react";
import ExperienceInfo from "../../experienceInfo";

interface ExperienceCardProps extends ExperienceInfo {
    alignment: 'left' | 'right';
}

const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({ companyName, jobTitle, startDate, endDate, alignment }) => {
    return (
        <div className={`${styles.experienceCardContainer} ${alignment === 'left'? styles.left : styles.right}`}>
            <div className={styles.content}>
                <h4>{companyName}</h4>
                <h3>{jobTitle}</h3>
                <p style={{marginBottom:0}}>{startDate} to {endDate}</p>
            </div>
        </div>
    );
}

export default ExperienceCard;