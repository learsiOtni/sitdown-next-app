'use client'

import { useState } from "react"
import { useAppSelector } from "@/lib/hooks"
import { formatDateTitle } from "@/util/helper"
import { CardView } from '@/components/CardUpdates/CardUpdate'
import { UpdatesPageSkeleton } from "@/components/Skeleton/UpdatesSkeleton"
import CardUpdates from "@/components/CardUpdates/CardUpdates"
import Divider from "@/components/Divider/Divider"
import SearchBar from "@/components/SearchBar/SearchBar"
import TableCardView from "@/components/TableCardView/TableCardView"

const Updates = () => {
    const [cardView, setCardView] = useState<CardView>("table");
    const dates = useAppSelector( state => state.updates.dates);

    const handleViewChange = (newView: CardView) => {
      if (cardView !== newView) setCardView(newView)
    }
  
    return (
      <div className="p-4 w-full mt-5 md:p-11 md:mt-0">
        {/** Search Bar */}
        <SearchBar
          placeholder="Find updates by tags"
          buttonText="Filter by"
          buttonDropdown
        />

        {/** Table Card options */}

        <TableCardView view={cardView} onChange={handleViewChange} />

        {/** Content */}
        <div>
        {dates.length > 0 ?
          dates.map((date) => date.updates.length > 0 && (
            <div className="mt-6" key={date.id}>
              <Divider title={formatDateTitle(date.id)} />

              <div className="mt-2.5 flex gap-3 flex-wrap">
                <CardUpdates data={[...date.updates]} view={cardView}/>
              </div>
            </div>
          )) : (
            <UpdatesPageSkeleton />
          )}
          </div>
      </div>
    );
  }
  
  export default Updates