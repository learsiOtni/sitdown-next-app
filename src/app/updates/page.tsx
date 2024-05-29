'use client'

import { useEffect, useState } from "react"

import { fetchWrapper } from "@/util/fetchWrapper"
import { Update } from "@/lib/features/updates/updatesSlice"
import { CardView } from '@/components/CardUpdates/CardUpdate'
import CardUpdates from "@/components/CardUpdates/CardUpdates"
import Divider from "@/components/Divider/Divider"
import SearchBar from "@/components/SearchBar/SearchBar"
import TableCardView from "@/components/TableCardView/TableCardView"

import { formatDateTitle } from "@/util/helper"

type Dates = {
  id: "string";
  updates: Array<Update>
}

const Updates = () => {
    const [cardView, setCardView] = useState<CardView>("table");
    const [dates, setDates] = useState<Array<Dates>>([]);
    
    useEffect(() => {
      const fetch = async () => {
        const dates = await fetchWrapper.get(
          `${process.env.NEXT_PUBLIC_API_URL}dates`
        );
        setDates(dates);
      };

      fetch();
    }, []);

    const sort = (array: Array<any>) => {
      
      //return array
      //array.sort( (a, b) => new Date(a).getTime() - new Date(b).getTime())

      /** TODO: create a sort function to sort updates from desc */
    }
    

    const handleViewChange = (newView: CardView) => {
      if (cardView !== newView) setCardView(newView)
    }

    dates && console.log(sort(dates[0]?.updates))

    return (
      <div className="p-11 w-full">
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
        {dates.length > 0 &&
          dates.map((date) => (
            <div className="mt-6" key={date.id}>
              <Divider title={formatDateTitle(date.id)} />

              <div className="mt-2.5 flex gap-3 flex-wrap">
                <CardUpdates data={date.updates} view={cardView}/>
              </div>
            </div>
          ))}
          </div>
      </div>
    );
  }
  
  export default Updates