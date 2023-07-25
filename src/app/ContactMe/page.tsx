import styles from '../ContactMe/style.module.css';
import Image from 'next/image';
import contactImg from '../../../public/contact1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeadset, faMessage, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';


export default function ContactMe() {
    return (
        <div id="contactMe" className={styles.contactContainer}>
            <h1 className={styles.title}><span><FontAwesomeIcon icon={faHeadset} /></span> Get in Touch </h1>
            <div className={styles.contactImageAndFormContainer}>
                <Image src={contactImg} alt="Contact Image" className={styles.contactImage}></Image>
                <form autoComplete="off" action="https://formsubmit.co/singhmurali.14@gmail.com" method="POST" className={styles.contactFormContainer}>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faUser} className={styles.formFieldIcon} />
                        <input type="text" placeholder='Name' className={styles.formInput} name="name" required></input>
                    </div>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.formFieldIcon} />
                        <input type="text" placeholder='Email' className={styles.formInput} name="email" required></input>
                    </div>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faPhone} className={styles.formFieldIcon} />
                        <input type="text" placeholder='Phone' className={styles.formInput} name="phone" required></input>
                    </div>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faMessage} className={styles.formFieldIcon} />
                        <input type="text" placeholder='Message' className={styles.formInput} name="message" required></input>
                    </div>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <button className={styles.submitButton} type="submit">Submit</button>
                </form>
            </div>
        </div>

    );
}