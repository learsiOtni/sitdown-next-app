"use client";

import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { Project } from "@/lib/features/projects/projectsSlice";
import { CustomInput } from "../Input/Input";
import Icon from "../Icon/Icon";
import TriangleIcon from "../Icon/TriangleIcon";

export default function SelectProjectMenu({
  onChange,
  error,
  value,
}: Readonly<CustomInput>) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Project | undefined>();
  const [filteredProjects, setFilteredProjects] = useState<Array<Project>>([]);

  const projects = useAppSelector((state) => state.projects.projects);
  const authUserId = useAppSelector((state) => state.auth.credentials.user.id);
  const status = useAppSelector((state) => state.projects.status);

  useEffect(() => {
    setSelectedItem(projects.find((project) => project.id === value));
  }, [value]);

  useEffect(() => {
    // only show projects to users they belong to, meaning they are team members or author
    if (projects.length > 0 || status === "editSucceeded") {
      setFilteredProjects(
        projects.filter(
          (project) =>
            authUserId === project?.user?.id ||
            project?.teamMembers?.includes(authUserId)
        )
      );
    }
  }, [projects, status]);

  useEffect(() => {
    menuRef.current?.addEventListener("click", toggleMenu);
    return () => menuRef.current?.removeEventListener("click", toggleMenu);
  }, [isMenuOpen]);

  const handleMenuSelect = (
    e: React.MouseEvent<HTMLButtonElement>,
    project: Project
  ) => {
    const projectId = e.currentTarget.getAttribute("data-value");
    setSelectedItem(project);
    toggleMenu();
    onChange("projectId", projectId);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative mb-3">
      <div
        className={`mb-1 p-2 border rounded text-lg bg-[#FBFBFD] flex-between cursor-pointer ${
          error && "border-error"
        }`}
        ref={menuRef}
      >
        <p className="text-body h-7">{selectedItem?.title}</p>
        { isMenuOpen ? (
          <TriangleIcon direction="up" color="border-[#222222]" size="sm"/>
        ) : (
          <TriangleIcon direction="down" color="border-[#222222]" size="sm"/>
        )}
        
        
      </div>

      <div
        className={`bg-gray-100 absolute w-full z-10 border rounded ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-body cursor-pointer max-h-[180px] overflow-scroll">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <li key={project.id}>
                <button
                  className={`p-2 w-full flex-between hover:bg-body/10 ${
                    selectedItem?.id === project.id && "text-black"
                  }`}
                  type="button"
                  onClick={(e) => handleMenuSelect(e, project)}
                  data-value={project.id}
                >
                  <p>{project.title}</p>
                  {selectedItem?.id === project.id && <Icon name="check" />}
                </button>
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
