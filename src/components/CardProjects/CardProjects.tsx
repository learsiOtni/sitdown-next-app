"use client"

import { useAppSelector } from "@/lib/hooks";
import CardProject from "./CardProject";

export default function CardProjects() {
  const projects = useAppSelector((state) => state.projects.projects);

  return (
    <>
      {projects &&
        projects.map((project) => (
          <CardProject
            key={`${project.id} ${project.createdAt}`}
            data={project}
            className="w-[48.5%]"
          />
        ))}
    </>
  );
}
