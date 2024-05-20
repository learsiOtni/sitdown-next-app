"use client";

import { Project } from "@/lib/features/projects/projectsSlice";
import { useAppSelector } from "@/lib/hooks";
import { useRef, useState } from "react";
import TriangleIcon from "../Icon/TriangleIcon";
import Icon from "../Icon/Icon";
import { CustomInput } from "../Input/Input";


export default function SelectProjectMenu({ onChange, error, value} : CustomInput) {
  const projects = useAppSelector((state) => state.projects.projects);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Project | undefined>(projects.find( (project) => project.id === value));
  const menu = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  console.log(projects)
  const handleMenuSelect = (e: MouseEvent, project: Project) => {
    const projectId = (e.currentTarget as HTMLButtonElement).getAttribute("data-value")
    console.log(projectId)
    
    setSelectedItem(project);
    toggleMenu();

    onChange("projectId", projectId)
  }


  return (
    <div className="relative mb-3" ref={menu}>
      <div
        className={`p-2 border rounded text-lg bg-[#FBFBFD] flex items-center justify-between mb-1 ${error && "border-error"}`}
        onClick={toggleMenu}
      >
        <p className="text-body h-7">{selectedItem && selectedItem.title}</p>
        <TriangleIcon direction="down" color="border-[#222222]" size="sm" />
      </div>

      <div
        className={`bg-[#FBFBFD] absolute w-full z-10 border rounded ${
          openMenu ? "block" : "hidden"
        }`}
      >
        <ul className="text-body cursor-pointer max-h-[180px] overflow-scroll">
          {projects &&
            projects.map((project) => (
              <li
                key={project.id}
                className={`hover:bg-body/10 p-2 flex justify-between items-center ${
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
            ))}
        </ul>
      </div>
    </div>
  );
}
