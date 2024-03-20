import SearchBar from "@/components/SearchBar/SearchBar"
import Text from "@/components/Text/Text"
import { users } from "../../../data"
import CardUser from "@/components/CardUser/CardUser"


const Users = () => {

  return (
    <div className="p-11 w-full">
      <SearchBar placeholder="Find Users" buttonText="Filter by" buttonDropdown/>

      <div className="mt-[58px]">

        <div className="flex flex-row-reverse">
          <div className="flex gap-10 mr-8">
            <Text tag="h2" type="title">Updates</Text>
            <Text tag="h2" type="title">Teams</Text>
            <Text tag="h2" type="title">Projects</Text>
          </div>
        </div>

        { users.map( user => (
          <CardUser data={user} />
        ))}

      </div>
      
    </div>
  )
}

export default Users