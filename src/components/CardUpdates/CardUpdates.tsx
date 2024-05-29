import { Update } from "@/lib/features/updates/updatesSlice";
import CardUpdate, { CardView } from "./CardUpdate";

type CardUpdatesProps = {
  data: Array<Update>;
  className?: string;
  view?: CardView
}

export default function CardUpdates({ data, className, view }: CardUpdatesProps) {
  return (
    <>
      {data.length > 0 ? (
        data.map((update) => <CardUpdate key={update.id} data={update} view={view}/>)
      ) : (
        <p className="p-2.5 mt-5 text-caption-2">
          No Status Updates yet! Please start adding status updates!
        </p>
      )}
    </>
  );
}
