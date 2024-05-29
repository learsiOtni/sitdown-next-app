"use client"

import { useAppSelector } from "@/lib/hooks";
import CardUpdates from "@/components/CardUpdates/CardUpdates";

export default function Updates() {
    const updates = useAppSelector((state) => state.updates.updates);

    return <CardUpdates data={updates} />
}