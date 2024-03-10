"use client";
import styles from '../ContactMe/style.module.css';
import Image from 'next/image';
import contactImg from '../../../public/contact1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeadset, faMessage, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect, useMemo } from 'react';


export default function ContactMe() {
    const imgRef = useRef<HTMLImageElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const submitButtonRef = useRef<HTMLButtonElement>(null);
    const refs = useMemo(() => [imgRef, formRef, submitButtonRef], [imgRef, formRef, submitButtonRef]);
    useEffect(() => {
        const formfields = formRef.current?.querySelectorAll<HTMLDivElement>('div');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry.target===submitButtonRef.current,entry.isIntersecting);
                if (entry.isIntersecting) {
                    if (entry.target === formRef.current) {
                        formfields!.forEach((formfield: Element, index: number) => {
                            const delay = (index) * 0.01; // Adjust delay as needed
                            formfield.setAttribute('style', `animation-delay: ${delay}s;`);
                            formfield.classList.add(styles.formFieldEnterAnimation);
                        });
                    } else if (entry.target === submitButtonRef.current) {
                        entry.target.classList.add(styles.submitButtonEnterAnimation);
                    } else if (entry.target === imgRef.current) {
                        entry.target.classList.add(styles.contactImageEnterAnimation);
                    }


                } else {
                    if (entry.target === formRef.current) {
                        formfields!.forEach((formfield: HTMLDivElement) => {
                            formfield.removeAttribute('style');
                            formfield.classList.remove(styles.formFieldEnterAnimation);
                        });
                    } else if (entry.target === submitButtonRef.current) {
                        entry.target.classList.remove(styles.submitButtonEnterAnimation);
                    } else if (entry.target === imgRef.current) {
                        entry.target.classList.remove(styles.contactImageEnterAnimation);
                    }
                }
            });
        },{
            root: null,
            rootMargin: '0px',
        });


        refs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            refs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [refs]);

    return (
        <div id="contactMe" className={styles.contactContainer}>
            <h1 className={styles.title}><span><FontAwesomeIcon icon={faHeadset} /></span> Get in Touch </h1>
            <div className={styles.contactImageAndFormContainer}>
                <div className={styles.contactImageContainer}>
                    <Image ref={imgRef} src={contactImg} alt="Contact Image" className={styles.contactImage} loading="lazy"></Image>
                </div>
                <form ref={formRef} autoComplete="off" action="https://formsubmit.co/d6ea074874fa4c9cbbd9e25cee936d63" method="POST" className={styles.contactFormContainer}>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faUser} className={styles.formFieldIcon} />
                        <input type="text" placeholder='Name' className={styles.formInput} name="name" required></input>
                    </div>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.formFieldIcon} />
                        <input type="email" placeholder='Email' className={styles.formInput} name="email" required></input>
                    </div>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faPhone} className={styles.formFieldIcon} />
                        <input type="tel" placeholder='Phone' className={styles.formInput} name="phone" required></input>
                    </div>
                    <div className={styles.formField}>
                        <FontAwesomeIcon icon={faMessage} className={styles.formFieldIcon} />
                        <input type="text" placeholder='Message' className={styles.formInput} name="message" required></input>
                    </div>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <button ref={submitButtonRef} className={styles.submitButton} type="submit">Submit</button>
                </form>
            </div>
        </div>

    );
}