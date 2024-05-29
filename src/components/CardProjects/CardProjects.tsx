'use client'

import { useAppSelector } from "@/lib/hooks";
import { Project } from "@/lib/features/projects/projectsSlice";
import CardProject from "./CardProject";

type CardProjectsProps = {
  className?: string;
  filterData?: "myProjects" | "otherProjects";
}

export default function CardProjects({ className, filterData}: CardProjectsProps) {

  const authUserId = useAppSelector((state) => state.auth.credentials.user.id);
  const projects = useAppSelector((state) => state.projects.projects);

  let filteredProjects: Array<Project> = [];
  if (filterData === "myProjects") {
    projects.forEach((project) => {
      if (project.user.id === authUserId) filteredProjects.push(project);
    });
  } else if(filterData === "otherProjects") {
    projects.forEach((project) => {
      if (project.user.id !== authUserId) filteredProjects.push(project);
    });
  } else {
    filteredProjects = projects
  }
  
  return (
    <>
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <CardProject key={project.id} data={project} className={className}/>
        ))
      ) : (
        <p className="p-2.5 mt-2.5 text-caption-2">
          No Projects yet! Please start adding projects!
        </p>
      )}
    </>
  );
}
