"use client";

import { useAppSelector } from "@/lib/hooks";
import { Update } from "@/lib/features/updates/updatesSlice";
import { sortDates } from "@/util/helper";
import CardUpdate, { CardView } from "./CardUpdate";

type CardUpdatesProps = {
  data?: Array<Update>;
  className?: string;
  view?: CardView;
};

export default function CardUpdates({
  data,
  className,
  view,
}: Readonly<CardUpdatesProps>) {
  let filteredUpdates = useAppSelector((state) => state.updates.updates); // Updates already in order
  if (data) filteredUpdates = sortDates(data);

  return (
    <>
      {filteredUpdates.length > 0 ? (
        filteredUpdates.map((update) => (
          <CardUpdate
            key={update.id}
            data={update}
            view={view}
            className={className}
          />
        ))
      ) : (
        <p className="p-2.5 mt-5 text-caption-2">
          No Status Updates yet! Please start adding status updates!
        </p>
      )}
    </>
  );
}
