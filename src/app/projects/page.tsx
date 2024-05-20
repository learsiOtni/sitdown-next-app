import SearchBar from "@/components/SearchBar/SearchBar"
import Divider from "@/components/Divider/Divider"
import CardProject from '@/components/CardProjects/CardProject';


import { projects } from '../../../data'
import CardProjects from "@/components/CardProjects/CardProjects";
import { Project } from "@/lib/features/projects/projectsSlice";
import ModalProjectForm from "@/components/ModalProjectForm/ModalProjectForm";

const Projects = () => {
  return (
    <div className="p-11 w-full">

      <ModalProjectForm />

      <div className="mt-10">
        <Divider title="My Projects" />

        <div className="mt-2.5 flex flex-wrap gap-4">
          <CardProjects />
        </div>
      </div>

      <div className="mt-10">
        <Divider title="Other Projects" />

        <div className="mt-2.5 flex flex-wrap gap-4">
          {projects.map(project => (
            <CardProject data={project as Project} className="w-[24%]"/>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Projects