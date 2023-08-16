"use client"

import SearchBar from "@/components/SearchBar/SearchBar"
import Card from "@/components/Card/Card"
import Text from "@/components/Text/Text"
import Image from "next/image"

const Users = () => {
  return (
    <div className="p-11 w-full">
      <SearchBar placeholder="Find Users" buttonText="Filter by"/>

      <div className="mt-[58px]">
        <Card key={1} className="flex items-center">
          <Image
            className="rounded-full"
            width={65}
            height={65}
            src="/noavatar.png"
            alt="profile image"
          />

          <div className="ml-7">
            <Text tag="h6" type="title">Isaac Newton</Text>
            <Text tag="p" type="body">Senior Project Leader</Text>
          </div>

          <div>

          </div>
        </Card>

      </div>
      

      <table className="w-full mt-[58px]">
        <thead className="p-5">
          <tr>
            <th className="mb-2.5"></th>
            <th className="mb-2.5">Updates</th>
            <th className="mb-2.5">Teams</th>
            <th className="mb-2.5">Projects</th>
          </tr>
        </thead>
        <tbody className="w-full mt-10">
          <tr className="border bg-[#FFFFFF] ">
              <td className="flex items-center">
                <Image 
                  className="rounded-full"
                  width={65} 
                  height={65} 
                  src="/noavatar.png" 
                  alt="profile image"
                />

                <div className="ml-7">
                  <Text tag="h6" type="title">Isaac Newton</Text> 
                  <Text tag="p" type="body">Senior Project Leader</Text> 
                </div>
              </td>
              <td>0</td>
              <td>4</td>
              <td>4</td>
           
          </tr>
          <tr className="py-2.5 px-5 mt-2.5 border bg-[#FFFFFF]">
              <td className="flex items-center">
                <Image 
                  className="rounded-full"
                  width={65} 
                  height={65} 
                  src="/noavatar.png" 
                  alt="profile image"
                />

                <div className="ml-7">
                  <Text tag="h6" type="title">Isaac Newton</Text> 
                  <Text tag="p" type="body">Senior Project Leader</Text> 
                </div>
              </td>
              <td>0</td>
              <td>4</td>
              <td>4</td>
           
          </tr>
          <tr className="border bg-[#FFFFFF] text-center">
              <td className="flex items-center py-2.5 px-5 text-left">
                <Image 
                  className="rounded-full"
                  width={65} 
                  height={65} 
                  src="/noavatar.png" 
                  alt="profile image"
                />

                <div className="ml-7">
                  <Text tag="h6" type="title">Isaac Newton</Text> 
                  <Text tag="p" type="body">Senior Project Leader</Text> 
                </div>
              </td>
              <td>0</td>
              <td>4</td>
              <td>4</td>
           
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Users