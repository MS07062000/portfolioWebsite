import Image from 'next/image'
import styles from './page.module.css'
import { AboutMe } from './AboutMe/page'
import { ContactMe } from './ContactMe/page'

export default function Home() {
  return (
    <>
    <AboutMe></AboutMe>
    <ContactMe></ContactMe>
    </>
  )
}
