'use client'

import SearchBar from "@/components/SearchBar/SearchBar"
import TableIcon from "@/components/Icon/TableIcon"
import CardIcon from "@/components/Icon/CardIcon"
import Divider from "@/components/Divider/Divider"
import CardUpdate, { CardView } from '@/components/CardUpdates/CardUpdate'
import { statusUpdates } from '../../../data'
import { Update } from "@/lib/features/updates/updatesSlice"
import { useState } from "react"
import TableCardView from "@/components/TableCardView/TableCardView"
import { useAppSelector } from "@/lib/hooks"


const Updates = () => {
    const [cardView, setCardView] = useState<CardView>("table");
    const updates = useAppSelector( state => state.updates.updates);
    
    const object = {
      "today": [
        { update: 1},
        { update: 2}
      ],
      "yesterday": [
        { update: 1},
        { update: 2}
      ],
    }

    const handleViewChange = (newView: CardView) => {
      if (cardView !== newView) setCardView(newView)
    }

    return (
      <div className="p-11 w-full">
        {/** Search Bar */}
        <SearchBar
          placeholder="Find updates by tags"
          buttonText="Filter by"
          buttonDropdown
        />

        {/** Table Card options */}
        <TableCardView view={cardView} onChange={handleViewChange}/>

        {/** Content */}
        <div className="mt-6">
          <Divider title="Today" />

          <div className="mt-2.5">
            <CardUpdate
              data={statusUpdates[0] as any}
              view={cardView}
            />
          </div>
        </div>

        <div className="mt-8">
          <Divider title="Yesterday" />

          <div className="mt-2.5 flex gap-3 flex-wrap">
            {statusUpdates.slice(1, 4).map((status) => (
              <CardUpdate
                data={status as any}
                view={cardView}
                key={status.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Updates