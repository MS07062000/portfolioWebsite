"use client"
import Image from 'next/image';
import websiteLogo from '../../../public/websitelogo.jpg'
import styles from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Script from 'next/script';

export default function CustomNavbar() {
    const handleOnClick = (bodyElementID: String) => {
        document.body.querySelector(`[id=${bodyElementID}]`)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.bglight}`}>
                <div className="container">
                    <Image src={websiteLogo} alt="WebsiteLogo"
                        width={200} height={100}></Image>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className={`nav-link ${styles.navtitleColor}`} onClick={() => handleOnClick("aboutMe")}>About</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${styles.navtitleColor}`} onClick={() => handleOnClick("education")}>Education</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${styles.navtitleColor}`} onClick={() => handleOnClick("skills")}>Skills</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${styles.navtitleColor}`} onClick={() => handleOnClick("projects")}>Projects</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${styles.navtitleColor}`} onClick={() => handleOnClick("experience")}>Experience</button>
                            </li>
                            <li className="nav-item">
                                <button className={`${styles.navtitleColor} nav-link`} onClick={() => handleOnClick("contactMe")}>Contact Me</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
        </>
    );
};