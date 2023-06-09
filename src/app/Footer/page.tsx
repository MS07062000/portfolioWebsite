import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.css';
import { faEnvelope, faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (<div className={styles.footer}>
        <div className={styles.contactInfo}>
            <h4 >Contact Info</h4>
            <p><span><FontAwesomeIcon icon={faEnvelope} /></span><span>singhmurali.14@gmail.com</span></p>
            <p><span><FontAwesomeIcon icon={faLocationDot} /></span>NaviMumbai,India-410 209</p>
            <p>
                <a href="https://github.com/MS07062000"><span><FontAwesomeIcon icon={faGithub} /></span></a>
                <a href="https://www.linkedin.com/in/murali-singh/"><span><FontAwesomeIcon icon={faLinkedin} /></span></a>
            </p>
        </div>
        <p>Designed with By <span><FontAwesomeIcon icon={faHeart} beat style={{ color: "#ff0000", }} /></span><span>Murali Singh</span></p>
    </div>);
}