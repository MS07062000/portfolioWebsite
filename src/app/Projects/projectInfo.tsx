import { StaticImageData } from "next/dist/client/image";

export class ProjectInfo {
    projectName: string;
    projectDescription: string;
    codeLink: string;
    videoLink: string;
    srcImage: string | StaticImageData;
    deployedLink: string;
    constructor(projectName: string,
        projectDescription: string,
        codeLink: string,
        videoLink: string,
        srcImage: string | StaticImageData,
        deployedLink: string) {
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.codeLink = codeLink;
        this.videoLink = videoLink;
        this.srcImage = srcImage;
        this.deployedLink = deployedLink;
    }
}
