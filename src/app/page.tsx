import dynamic from 'next/dynamic';
import styles from './page.module.css'
import { AboutMe } from './AboutMe/page';
import { ContactMe } from './ContactMe/page';
import { Education } from './Education/page';
import { Skills } from './Skills/page';
import { Footer } from './Footer/page';
import { CustomNavbar } from './Header/page';
import { Projects } from './Projects/page';

export default function Home() {
  return (
    <>
    <CustomNavbar></CustomNavbar>
    <AboutMe></AboutMe>
    <Education></Education>
    <Skills></Skills>
    <Projects></Projects>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </>
  )
}
