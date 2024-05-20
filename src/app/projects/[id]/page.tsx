import CardProject from "@/components/CardProjects/CardProject"
import { redirect } from "next/navigation"

type ProjectPageParams = {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params: { id }}: ProjectPageParams) {

  const url = `${process.env.NEXT_PUBLIC_API_URL}projects/${id}`
  const response = await fetch(url, { cache: 'no-store' })
  const data = await response.json()
  
  if(data.error) redirect('/dashboard')
  return (
    <div className="w-full p-11">
      {data && <CardProject data={data} view="full" enableEdit/>}

      <div>
        <p>{}</p>
      </div>
    </div>
  );
}
