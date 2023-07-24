import Link from 'next/link';
import Script from 'next/script'; // Import next/script to load scripts asynchronously
import Image from 'next/image';
import profilePic from '../../../public/murali.jpeg'
import Head from "next/head";
import styles from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function CustomNavbar(){
  return( 
    <>
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.bglight}`}>
    <div className="container">
        {/* Logo */}
        <Image src={profilePic} alt="Picture of the author" 
                width={50} height={50}></Image>
        {/* Navbar Toggler (for mobile) */}
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link href="/" className={styles.linktag}>
                <span className={`nav-link ${styles.navtitleColor}`}>Home</span>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/" className={styles.linktag}>
                <span className={`nav-link ${styles.navtitleColor}`}>About</span>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/" className={styles.linktag}>
                <span className={`nav-link ${styles.navtitleColor}`}>Skills</span>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/" className={styles.linktag}>
                <span className={`nav-link ${styles.navtitleColor}`}>Education</span>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/" className={styles.linktag}>
                <span className={`nav-link ${styles.navtitleColor}`}>Work</span>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/" className={styles.linktag}>
                <span className={`${styles.navtitleColor} nav-link`}>Contact Me</span>
            </Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    </>
    );
};