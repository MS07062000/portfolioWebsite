import styles from '../ContactMe/style.module.css';
import Image from 'next/image';
import contactImg from '../../../public/contact1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeadset, faMessage, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';


export function ContactMe() {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}><span><FontAwesomeIcon icon={faHeadset} /></span> Get in Touch </h1>
            <div className={styles.contactImageAndFormContainer}>
                <Image src={contactImg} alt="Contact Image" className={styles.contactImage}></Image>
                <div className={styles.contactFormContainer}>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faUser} className={styles.formFieldIcon} />
                        <input type="text" placeholder='Name' className={styles.formInput} required></input>
                    </div>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.formFieldIcon} />
                        <input type="text" placeholder='Email' className={styles.formInput} required></input>
                    </div>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faPhone} className={styles.formFieldIcon} />
                        <input type="text" placeholder='Phone' className={styles.formInput} required></input>
                    </div>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faMessage} className={styles.formFieldIcon} />
                        <input type="text" placeholder='Message' className={styles.formInput} required></input>
                    </div>
                    <button className={styles.submitButton}>Submit</button>
                </div>
            </div>
        </div>
    );
}