
import styles from '../Education/style.module.css';
import { InstitutionCard } from './components/institutionCard/page';
import secondarySchoolImage from '../../../public/secondarySchoolLogo.png';
import higherSecondarySchoolImage from '../../../public/higherSecondarySchoolLogo.png';
import collegeImage from '../../../public/KJSCE-Logo.svg';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Education() {
    return (
        <div className={styles.education}>
            <h1 className={styles.title}>
                <FontAwesomeIcon icon={faGraduationCap} />
                <span> My Education</span>
            </h1>
            <InstitutionCard srcImage={secondarySchoolImage} courseName='Senior Secondary Certification(SSC)' institutionName='St.Thomas High School' yearOfCompletion='2016'></InstitutionCard>
            <InstitutionCard srcImage={higherSecondarySchoolImage} courseName='Higher Secondary Certification(HSC)' institutionName='B.K. Birla College of Arts, Science & Commerce, Kalyan' yearOfCompletion='2018'></InstitutionCard>
            <InstitutionCard srcImage={collegeImage} courseName='Bachelor Of Technology In Electronics And Telecommunications' institutionName='K. J. Somaiya College of Engineering' yearOfCompletion='2022'></InstitutionCard>
        </div>
    );
}