export class ExperienceInfo {
    companyName: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    constructor(companyName: string,
        jobTitle: string,
        startDate: string,
        endDate: string) {
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}