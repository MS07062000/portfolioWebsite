import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.css';
import { faEnvelope, faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
import Image from "next/image";
import topmateLogo from '../../../public/topmate.png'

export default function Footer() {
    return (<div className={styles.footer}>
        <div className={styles.contactInfo}>
            <p>Contact Info</p>
            <p><span><FontAwesomeIcon icon={faEnvelope} /></span><span>singhmurali.14@gmail.com</span></p>
            <p><span><FontAwesomeIcon icon={faLocationDot} /></span>Navi Mumbai,India-410 209</p>
            <p>
                <Link href="https://github.com/MS07062000"><span><FontAwesomeIcon icon={faGithub} /></span></Link>
                <Link href="https://www.linkedin.com/in/murali-singh/"><span><FontAwesomeIcon icon={faLinkedin} /></span></Link>
                <Link href="https://twitter.com/Murali070600"><span><FontAwesomeIcon icon={faTwitter} /></span></Link>
                <Link href="https://www.youtube.com/@MuraliSingh07/videos"><span><FontAwesomeIcon icon={faYoutube} /></span></Link>
                <Link href="https://topmate.io/murali_singh/389479"><Image src={topmateLogo} width={32} height={32} alt={"Topmate"} className={styles.img} /></Link>
            </p>
        </div>
        <p>Designed with <span className={styles.heartIcon}><FontAwesomeIcon icon={faHeart} beat /></span><span> By <span className={styles.ownerName}>Murali Singh</span></span></p>
    </div>);
}