"use client"

import { useAppSelector } from "@/lib/hooks";
import CardProject from "./CardProject";

export default function CardProjects() {
  const projects = useAppSelector((state) => state.projects.projects);

  return (
    <>
      {projects.length > 0 ? (
        projects.map((project) => (
          <CardProject key={project.id} data={project} />
        ))
      ) : (
        <p className="p-2.5 mt-2.5 text-caption-2">No Projects yet! Please start adding projects!</p>
      )}
    </>
  );
}
