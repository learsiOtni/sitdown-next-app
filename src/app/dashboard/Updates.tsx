"use client";

import CardUpdates from "@/components/CardUpdates/CardUpdates";
import UpdatesSkeleton from "@/components/Skeleton/UpdatesSkeleton";
import { useAppSelector } from "@/lib/hooks";

export default function Updates() {
  const updates = useAppSelector((state) => state.updates.updates);

  return <> {updates.length > 0 ? <CardUpdates /> : <UpdatesSkeleton />}</>;
}
