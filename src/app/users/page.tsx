import { users } from "../../../data"
import CardUser from "@/components/CardUser/CardUser"
import SearchBar from "@/components/SearchBar/SearchBar"

const Users = () => {

  return (
    <div className="p-4 w-full mt-5 md:p-11 md:mt-0">
      <SearchBar placeholder="Find Users" buttonText="Filter by" buttonDropdown/>

      <div className="mt-[58px]">

        <div className="flex flex-row-reverse">
          <div className="flex gap-10 mr-8">
            <h2 className="text-title">Updates</h2>
            <h2 className="text-title">Teams</h2>
            <h2 className="text-title">Projects</h2>
          </div>
        </div>

        { users.map( user => (
          <CardUser key={user.id} data={user} />
        ))}

      </div>
    </div>
  )
}

export default Users