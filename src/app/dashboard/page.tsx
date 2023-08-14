import Card from '@/components/Card/Card'
import React from 'react'
import Image from 'next/image'
import { statistics, statusUpdates, projects } from '../../../data'
import { calculatePercentageChange } from '@/util/helper'
import Button from '@/components/Button/Button'
import Triangle from '@/components/Icon/Triangle'
import Icon, { CustomIcons } from '@/components/Icon/Icon'




const Dashboard = () => {
  return (
    <div className="p-11 w-min">

      {/* Header */}
      <header className="flex items-center justify-between">
        <h1 className="text-2xl text-body text-opacity-80">Overview Statistics</h1>
        <Button className="px-5 mr-1">Last 30 days</Button>
      </header>
      

      <div className="flex gap-4 mt-2.5">
        {statistics.map(({ id, currentValue, name, title, previousValue }) => {

          const percValue = previousValue && calculatePercentageChange(currentValue, previousValue)
          
          return (
            <Card key={id} className="py-7 w-[280px] flex flex-col items-center relative">
              <Icon
                name={name as CustomIcons}
                iconContainerStyle="w-7 h-7 p-[7px] rounded-full flex items-center justify-center text-white"
                background
              />

              <h2 className="text-black text-[65px]">{currentValue}</h2>
              <h6 className="text-body mt-[-15px]">{title}</h6>
              <div className="flex items-center mt-5">
                {percValue && (percValue > 0 ? (
                  <>
                    <Triangle direction="up"/>
                    <p className="ml-1.5 text-success">{`${percValue}%`}</p>
                  </>
                ) : (
                  <>
                    <Triangle direction="down" />
                    <p className="ml-1.5 text-error">{`${Math.abs(percValue)}%`}</p>
                  </>
                ))}
              </div>

              { name === "users" && <Icon name="add" iconContainerStyle="w-5 h-5 absolute bottom-3 right-3" background/>}
            </Card>
        )})}
      </div>
      {/* End of Header */}

      <div className="mt-10 grid grid-cols-2 gap-4">
        {/* status updates */}
        <div className="col-span-1">

          <h1 className="text-2xl text-black text-opacity-80 mb-2.5">Status Updates</h1>

          {
            statusUpdates.slice(0, 2).map( (status) => (
              <Card key={status.statusId} className="p-5 border flex border-[#E2E5E6]">
                <div>
                  <Image src="/noavatar.png" width={52} height={52} alt="profile image" className="rounded-full"/>
                </div>

                <div className="ml-2.5">
                  <p className="text-[#3F95FF] text-sm">
                    {status.user.name} <span className="text-black">updated his status</span> 5 mins ago
                  </p>

                  <h5 className="mt-4 text-black font-semibold">{status.title}</h5>

                  <p className="text-body text-sm mt-1.5">{status.body}</p>

                  <div className="flex mt-4">
                    <div className="w-4 h-4 text-primary">
                      <Icon name="tags" />
                    </div>
                    {status.tags.map(tag => (
                      <p className="text-black underline text-sm ml-2.5">
                        {tag}
                      </p>
                    ))}
                  </div>

                </div>
              </Card>
            ))
          }

        </div>
        
        {/* projects */}
        <div className="col-span-1">

          <div className="mb-2.5 relative">
            <h1 className="text-2xl text-black text-opacity-80">Projects</h1>

            <div className="absolute bottom-[-3px] right-0">
              <span className="text-sm text-black text-opacity-80 underline">See All Projects</span>
              <span className="text-primary text-2xl ml-5">&lt;</span>
              <span className="text-primary text-2xl ml-2.5">&gt;</span>
            </div>
          </div>

          <div className="flex min-w-[575px] flex-wrap gap-4">
            { projects.slice(0, 2).map( project => (
              <Card key={project.id} className="max-w-[280px]">

                <div className="p-5">
                  <h2 className="text-lg text-black">{project.title}</h2>
                  <p className="mt-4 text-body">{project.body}</p>
                </div>

                <div className="border-t border-t-[#E6E7E8] p-5 flex">
                  <div className="text-[#707070] w-6 h-5 text-opacity-50">
                    <Icon name="users" />
                  </div>

                  <div className="w-6 h-6 bg-primary text-center ml-2.5 rounded-full pt-1">
                    <p className="text-white text-xs">2</p>
                  </div>

                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
      
      
      
    </div>
  )
}

export default Dashboard