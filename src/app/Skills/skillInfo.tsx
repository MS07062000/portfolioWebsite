import { StaticImageData } from "next/image";

export default interface SkillInfo {
    skillIconImage: string | StaticImageData;
    skillName: string;
}