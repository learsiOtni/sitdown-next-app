import CardProjects from "@/components/CardProjects/CardProjects";
import Divider from "@/components/Divider/Divider"
import ModalProjectForm from "@/components/ModalProjectForm/ModalProjectForm";

const Projects = () => {
  return (
    <div className="p-11 w-full">

      <ModalProjectForm />

      <div className="mt-10">
        <Divider title="My Projects" />

        <div className="mt-2.5 flex flex-wrap gap-4">
          <CardProjects filterData="myProjects" className="w-[24%]"/>
        </div>
      </div>

      <div className="mt-10">
        <Divider title="Other Projects" />

        <div className="mt-2.5 flex flex-wrap gap-4">
          <CardProjects filterData="otherProjects" className="w-[24%]"/>
        </div>
      </div>
    </div>
  )
}

export default Projects