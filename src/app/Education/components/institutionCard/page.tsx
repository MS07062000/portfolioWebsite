import React, { FunctionComponent } from "react";
import Image, { StaticImageData } from 'next/image';
import styles from '../institutionCard/style.module.css';

type institutionCardProps = {
    srcImage: string | StaticImageData; courseName: string; institutionName: string; yearOfCompletion: string
}
const InstitutionCard: FunctionComponent<institutionCardProps> = ({ srcImage, courseName, institutionName, yearOfCompletion }) => {
    return (
        <div className={`${styles.card} ${styles.grid}`}>
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