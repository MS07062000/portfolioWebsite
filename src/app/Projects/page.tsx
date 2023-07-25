"use client";
import styles from './style.module.css';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';

const ProjectCard = dynamic(() => import('../Projects/components/projectCard/projectCard'), {
    ssr: false,
});

class ProjectInfo {
    projectName: string;
    projectDescription: string;
    codeLink: string;
    videoLink: string;
    srcImage: string;
    deployedLink: string;
    constructor(projectName: string,
        projectDescription: string,
        codeLink: string,
        videoLink: string,
        srcImage: string,
        deployedLink: string) {
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.codeLink = codeLink;
        this.videoLink = videoLink;
        this.srcImage = srcImage;
        this.deployedLink = deployedLink;
    }
}

export function Projects() {
    const spence: ProjectInfo = new ProjectInfo('Spence',
        'Spence is a Flutter-based mobile app for tracking the shelf life of pantry items, medicines, cosmetics, and more by storing expiry dates in Firebase.',
        'https://github.com/MS07062000/spence',
        'https://www.youtube.com/watch?v=uA8kV7FX8Gw',
        'https://img.youtube.com/vi/uA8kV7FX8Gw/mqdefault.jpg',
        '');

    const flightSearch: ProjectInfo = new ProjectInfo('FlightSearch',
        'The Flight Search Application is developed using HTML, CSS, JS, Node.js, and Express.js, enabling users to search for one-way, multi-way, and round-trip flights based on their criteria.',
        'https://github.com/MS07062000/toursandtravels',
        'https://www.youtube.com/watch?v=Uk5gadtpViQ',
        'https://img.youtube.com/vi/Uk5gadtpViQ/mqdefault.jpg',
        'https://toursandtravels-7sng.onrender.com/flights');

    const yelpCamp: ProjectInfo = new ProjectInfo('YelpCamp',
        'Explore camping grounds, read reviews, and connect with outdoor enthusiasts on this user-friendly website. Share your experiences and discover the best spots for your next adventure',
        'https://github.com/MS07062000/campingWebsite',
        'https://www.youtube.com/watch?v=gGzljDgcpz0',
        'https://img.youtube.com/vi/gGzljDgcpz0/mqdefault.jpg',
        'https://yelpcamp-9gsq.onrender.com/landing');

    const locationNotes: ProjectInfo = new ProjectInfo('Location Notes',
        'Location-based to-do list app powered by Flutter & Google Maps API. Create tasks for specific spots, simplifying task management.',
        'https://github.com/MS07062000/To_Do_List_App',
        'https://www.youtube.com/watch?v=w9pjKrxJUCg',
        'https://img.youtube.com/vi/w9pjKrxJUCg/mqdefault.jpg',
        '');

    return (
        <div id="projects" className={styles.container}>
            <h1 className={styles.title}>
                <FontAwesomeIcon icon={faLaptopCode} />
                <span> Projects</span>
            </h1>
            <div className={styles.projects}>
                <ProjectCard projectName={spence.projectName} projectDescription={spence.projectDescription} codeLink={spence.codeLink} videoLink={spence.videoLink} srcImage={spence.srcImage}></ProjectCard>
                <ProjectCard projectName={flightSearch.projectName} projectDescription={flightSearch.projectDescription} codeLink={flightSearch.codeLink} videoLink={flightSearch.videoLink} srcImage={flightSearch.srcImage} deployedLink={flightSearch.deployedLink}></ProjectCard>
                <ProjectCard projectName={yelpCamp.projectName} projectDescription={yelpCamp.projectDescription} codeLink={yelpCamp.codeLink} videoLink={yelpCamp.videoLink} srcImage={yelpCamp.srcImage} deployedLink={yelpCamp.deployedLink}></ProjectCard>
                <ProjectCard projectName={locationNotes.projectName} projectDescription={locationNotes.projectDescription} codeLink={locationNotes.codeLink} videoLink={locationNotes.videoLink} srcImage={locationNotes.srcImage}></ProjectCard>
            </div>
        </div>
    )
}
