"use client";
import Image from 'next/image';
import profilePic from '../../../public/websitelogo.jpg'
import styles from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export function CustomNavbar() {
    const handleOnClick = (headerElementID: String, bodyElementID: String) => {
        document.body.querySelector(`[id=${headerElementID}]`)?.addEventListener("click", () => {
            const element = document.body.querySelector(`[id=${bodyElementID}]`);
            console.log(element);
            element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        });
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.bglight}`}>
                <div className="container">
                    {/* Logo */}
                    <Image src={profilePic} alt="Picture of the author"
                        width={200} height={100}></Image>
                    {/* Navbar Toggler (for mobile) */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <button id="Home" className={`nav-link ${styles.navtitleColor}`} onClick={() => handleOnClick("Home", "home")}>Home</button>
                            </li> */}
                            <li className="nav-item">
                                <button id="AboutMe" className={`nav-link ${styles.navtitleColor}`} onClick={() => handleOnClick("AboutMe", "aboutMe")}>About</button>
                            </li>
                            <li className="nav-item">
                                <button id="Education" className={`nav-link ${styles.navtitleColor}`} onClick={() => handleOnClick("Education", "education")}>Education</button>
                            </li>
                            <li className="nav-item">
                                <button id="Skills" className={`nav-link ${styles.navtitleColor}`} onClick={() => handleOnClick("Skills", "skills")}>Skills</button>
                            </li>
                            <li className="nav-item">
                                <button id="Projects" className={`nav-link ${styles.navtitleColor}`} onClick={() => handleOnClick("Projects", "projects")}>Projects</button>
                            </li>
                            <li className="nav-item">
                                <button id="ContactMe" className={`${styles.navtitleColor} nav-link`} onClick={() => handleOnClick("ContactMe", "contactMe")}>Contact Me</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};