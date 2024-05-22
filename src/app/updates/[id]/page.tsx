import CardUpdate from "@/components/CardUpdates/CardUpdate";
import { redirect } from "next/navigation";

type UpdatePageParams = {
  params: {
    id: string
  }
}

export interface Update {
  id: string;
  createdAt: string;
  title: string;
  body: string;
  tags: string[];
  user: {
    id: string;
    firstname: string;
    lastname: string;
    image?: string;
  };
  project?: {
    id: string;
    title: string;
  };
  lastUpdated?: string;
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
        {/** TODOS
         * show author details,
         * show project name that it belongs to
         * 
         * maybe a user dynamic page, that shows the user, showing all the status updates
         */}
        <p>{}</p>
      </div>
    </div>
  );
}
