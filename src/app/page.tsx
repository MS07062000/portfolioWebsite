import Image from 'next/image'
import styles from './page.module.css'
import { AboutMe } from './AboutMe/page';
import { ContactMe } from './ContactMe/page';
import { Education } from './Education/page';
import { Skills } from './Skills/page';
import { Footer } from './Footer/page';

export default function Home() {
  return (
    <>
    <AboutMe></AboutMe>
    <Education></Education>
    <Skills></Skills>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </>
  )
}
