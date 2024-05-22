"use client";

import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { Project } from "@/lib/features/projects/projectsSlice";
import { CustomInput } from "../Input/Input";
import Icon from "../Icon/Icon";
import TriangleIcon from "../Icon/TriangleIcon";

export default function SelectProjectMenu({ onChange, error, value} : CustomInput) {
  const menu = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Project | undefined>();
  const [filteredProjects, setFilteredProjects] = useState<Array<Project>>([]);

  const projects = useAppSelector(state => state.projects.projects);
  const authUserId = useAppSelector( state => state.auth.credentials.user.id);
  const status = useAppSelector(state => state.projects.status);

  useEffect( () => {
    setSelectedItem(projects.find((project) => project.id === value))
  }, [value])

  useEffect( () => {
    // only show projects to users they belong to, meaning they are team members or author
    if(projects.length > 0 || status === "editSucceeded") {
      setFilteredProjects(projects.filter( project => authUserId === project?.user?.id || project?.teamMembers?.includes(authUserId)))
    }
      
  }, [projects, status])

  /* 
  once project is made, does not update the projects immediately to reflect the changes
  findings: the userId and user is separate, need to put userId to user { id: userId }
  */
  
  const handleMenuSelect = (e: MouseEvent, project: Project) => {
    const projectId = (e.currentTarget as HTMLButtonElement).getAttribute("data-value")
    setSelectedItem(project);
    toggleMenu();
    onChange("projectId", projectId)
  }

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="relative mb-3" ref={menu}>
      <div
        className={`mb-1 p-2 border rounded text-lg bg-[#FBFBFD] flex-between ${
          error && "border-error"
        }`}
        onClick={toggleMenu}
      >
        <p className="text-body h-7">{selectedItem && selectedItem.title}</p>
        <TriangleIcon direction="down" color="border-[#222222]" size="sm" />
      </div>

      <div
        className={`bg-gray-100 absolute w-full z-10 border rounded ${
          openMenu ? "block" : "hidden"
        }`}
      >
        <ul className="text-body cursor-pointer max-h-[180px] overflow-scroll">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <li
                key={project.id}
                className={`hover:bg-body/10 p-2 flex-between ${
                  selectedItem?.id === project.id && "text-black"
                }`}
                onClick={(e: any) => handleMenuSelect(e, project)}
                data-value={project.id}
              >
                {project.title}

                {selectedItem?.id === project.id && (
                  <span>
                    <Icon name="check" />
                  </span>
                )}
              </li>
            ))
          ) : (
            <li key="no-project" className="p-2.5 text-caption-2">
              No Project found!
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
