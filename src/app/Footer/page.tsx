import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.css';
import { faEnvelope, faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (<div className={styles.footer}>
        <div className={styles.contactInfo}>
            <p>Contact Info</p>
            <p><span><FontAwesomeIcon icon={faEnvelope} /></span><span>singhmurali.14@gmail.com</span></p>
            <p><span><FontAwesomeIcon icon={faLocationDot} /></span>NaviMumbai,India-410 209</p>
            <p>
                <a href="https://github.com/MS07062000"><span><FontAwesomeIcon icon={faGithub} /></span></a>
                <a href="https://www.linkedin.com/in/murali-singh/"><span><FontAwesomeIcon icon={faLinkedin} /></span></a>
            </p>
        </div>
        <p>Designed with <span className={styles.heartIcon}><FontAwesomeIcon icon={faHeart} beat  /></span><span> By <span className={styles.ownerName}>Murali Singh</span></span></p>
    </div>);
}