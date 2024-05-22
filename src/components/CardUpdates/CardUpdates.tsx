"use client";

import {  useAppSelector } from "@/lib/hooks";
import CardUpdate from "./CardUpdate";

export default function CardUpdates() {
  const updates = useAppSelector((state) => state.updates.updates);

  return (
    <>
      {updates.length > 0 ? (
        updates.map((update) => <CardUpdate key={update.id} data={update} />)
      ) : (
        <p className="p-2.5 mt-5 text-caption-2">
          No Status Updates yet! Please start adding status updates!
        </p>
      )}
    </>
  );
}
