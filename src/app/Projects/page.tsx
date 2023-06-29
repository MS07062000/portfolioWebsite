import styles from './style.module.css';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectCard } from './components/projectCard/projectCard';

export function Projects(){
    return(
        <div className={styles.projects}>
            <h1 className={styles.title}>
            <FontAwesomeIcon icon={faLaptopCode} />
                <span>Projects</span>
            </h1>
            <ProjectCard projectName="Spence" projectDescription='' codeLink='https://github.com/MS07062000/spence' videoLink='https://www.youtube.com/watch?v=uA8kV7FX8Gw' srcImage=''></ProjectCard>
            <ProjectCard projectName="FlightSearch" projectDescription=''  codeLink='https://github.com/MS07062000/toursandtravels' videoLink='https://www.youtube.com/watch?v=Uk5gadtpViQ' srcImage='https://img.youtube.com/vi/Uk5gadtpViQ/0.jpg'></ProjectCard>
            <ProjectCard projectName="YelpCamp" projectDescription='' codeLink='https://github.com/MS07062000/campingWebsite' videoLink='' srcImage=''></ProjectCard>
            <ProjectCard projectName="LocationNotes" projectDescription='' codeLink='https://github.com/MS07062000/To_Do_List_App' videoLink='' srcImage=''></ProjectCard>
        </div>
    )
}