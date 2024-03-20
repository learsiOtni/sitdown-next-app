
import SearchBar from "@/components/SearchBar/SearchBar"
import TableIcon from "@/components/Icon/TableIcon"
import CardIcon from "@/components/Icon/CardIcon"
import Divider from "@/components/Divider/Divider"
import CardUpdate, { StatusUpdate } from '@/components/CardUpdate/CardUpdate'
import { statusUpdates } from '../../../data'


const Updates = () => {
    return (
      <div className="p-11 w-full">
        
        { /** Search Bar */}
        <SearchBar placeholder="Find updates by tags" buttonText="Filter by" buttonDropdown/>

        { /** Table Card options */}
        <div className="mt-10 flex justify-end">

          <div className="bg-[#EBEFF0] p-1.5 w-[177px] flex">

            <div className="p-2.5 bg-white flex items-center" >
              <TableIcon color="bg-primary" />
              <p className="ml-1.5 text-[#4F5761]">Table</p>
            </div>

            <div className="p-2.5 bg-[#EBEFF0] flex items-center opacity-50">
              <CardIcon color="bg-[#454D57]" />
              <p className="ml-1.5 text-[#454D57]">Card</p>
            </div>

          </div>
        </div>

        
        { /** Content */}
        <div className="mt-6">
          <Divider title="Today"/>

          <div className="mt-2.5">
            <CardUpdate data={statusUpdates[0] as StatusUpdate} view="table"/>
          </div>
        </div>

        <div className="mt-8">
          <Divider title="Yesterday"/>

          <div className="mt-2.5 flex gap-3 flex-wrap">
            {
              statusUpdates.slice(1,4).map( status => (
                <CardUpdate data={status as StatusUpdate} view="table" key={status.id}/>
              ))
            }
          </div>
        </div>

      </div>
    )
  }
  
  export default Updates