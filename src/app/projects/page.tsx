import SearchBar from "@/components/SearchBar/SearchBar"
import Divider from "@/components/Divider/Divider"
import CardProject from '@/components/CardProject/CardProject';


import { projects } from '../../../data'

const Projects = () => {
  return (
    <div className="p-11 w-full">
      <SearchBar placeholder="Find Projects" buttonText="Add New Project" />

      <div className="mt-10">
        <Divider title="My Projects" />

        <div className="mt-2.5 flex flex-wrap gap-4">
          {projects.map(project => (
            <CardProject data={project} className="w-[24%]"/>
          ))}
          
        </div>
      </div>

      <div className="mt-10">
        <Divider title="Other Projects" />

        <div className="mt-2.5 flex flex-wrap gap-4">
          {projects.map(project => (
            <CardProject data={project} className="w-[24%]"/>
          ))}

          {projects.map(project => (
            <CardProject data={project} className="w-[24%]" />
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Projects