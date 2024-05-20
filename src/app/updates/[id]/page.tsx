import CardUpdate from "@/components/CardUpdates/CardUpdate";
import { redirect } from "next/navigation";

type UpdatePageParams = {
  params: {
    id: string
  }
}

export default async function UpdatePage({ params: { id }}: UpdatePageParams) {

  const url = `${process.env.NEXT_PUBLIC_API_URL}updates/${id}`
  const response = await fetch(url, { cache: 'no-store' })
  const data = await response.json()

  if(data.error) redirect('/dashboard')
  return (
    <div className="w-full p-11">
      {data && <CardUpdate view="full" data={data} enableEdit/>}

      <div>
        <p>{}</p>
      </div>
    </div>
  );
}
