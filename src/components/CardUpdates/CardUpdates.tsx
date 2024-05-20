"use client";

import {  useAppSelector } from "@/lib/hooks";
import CardUpdate from "./CardUpdate";

export default function CardUpdates() {
  const updates = useAppSelector((state) => state.updates.updates);
  
  return (
    <>
      {updates &&
        updates.map((update) => <CardUpdate key={update.id} data={update} />)}
    </>
  );
}
