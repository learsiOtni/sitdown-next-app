import { redirect } from "next/navigation";
import { Project } from "@/lib/features/projects/projectsSlice";
import CardProject from "@/components/CardProjects/CardProject";
import CardUpdates from "@/components/CardUpdates/CardUpdates";

type ProjectPageParams = {
  params: {
    id: string;
  };
};

export default async function ProjectPage({
  params: { id },
}: Readonly<ProjectPageParams>) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}projects/${id}`,
    { cache: "no-store" }
  );

  const data: Project & { error: string } = await response.json();
  if (data.error) redirect("/dashboard");
  return (
    <div className="w-full p-11">
      <CardProject data={data} view="full" enableEdit />

      <div>
        <h4 className="text-title p-2.5 mt-5">
          Status Updates:
        </h4>

        <div className="flex gap-3 flex-wrap">
          <CardUpdates data={data.updates} view="card"/>
        </div>
      </div>
    </div>
  );
}
