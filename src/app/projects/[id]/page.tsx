import { redirect } from "next/navigation"
import { Project } from "@/lib/features/projects/projectsSlice"
import CardProject from "@/components/CardProjects/CardProject"
import CardUpdate from "@/components/CardUpdates/CardUpdate"

type ProjectPageParams = {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params: { id }}: ProjectPageParams) {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}projects/${id}`,
    { cache: "no-store" }
  );

  const data: Project & { error: string } = await response.json();
  if(data.error) redirect('/dashboard')
  return (
    <div className="w-full p-11">
      {data && <CardProject data={data} view="full" enableEdit />}

      <div>
        <h4 className="text-lg text-black font-semibold p-2.5 mt-5">Status Updates:</h4>

        <div className="flex gap-3 flex-wrap">
          {/** Todo:
           * Make Card updates more reusable
           * props: updates, view, className,
           * 
           */}
          {data.updates &&
            data.updates.length > 0 ?
            data.updates.map((update) => (
              <CardUpdate data={update} view="card" key={update.id}/>
            )) : (
              <p className="text-body ml-2.5">No status updates yet!</p>
            )}
        </div>
      </div>
    </div>
  );
}
