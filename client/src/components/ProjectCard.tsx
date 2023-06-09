import { Project as ProjectModel } from "../model/project";
import styles from "../styles/modules/project.module.css";
import Image from "next/image";


interface ProjectProps {
  project: ProjectModel;
}

const ProjectCard = ({ project }: ProjectProps) => {
  const { title, type, url } = project;

  return (
     <div>
       <ul>
        <li>{title}</li>
        <li>{type}</li>
        <li>{url}</li>
       </ul>
     </div>
  );
};

export default ProjectCard;
