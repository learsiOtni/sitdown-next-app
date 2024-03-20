"use client"

import React, { useState } from 'react';
import { redirect } from 'next/navigation';
import { statistics, statusUpdates, projects } from '../../../data'

import Button from '@/components/Button/Button'
import TriangleIcon from '@/components/Icon/TriangleIcon'
import Text from '@/components/Text/Text';

import CardUpdate, { StatusUpdate } from '@/components/CardUpdate/CardUpdate'
import CardStatistic from '@/components/CardStatistic/CardStatistic'
import CardProject from '@/components/CardProject/CardProject';

import { selectAllUpdates } from '@/store/updatesSlice'
import { selectAuthToken, selectAuthState } from '@/store/authSlice'
import { useSelector } from 'react-redux'

interface Update {
  id: string,
  createdAt: string,
  title: string,
  body: string,
  tags: string[],
  user: {
    id: string,
    firstname: string
  },
  project: {
    id: string,
    title: string,
  }
}


const Dashboard = () => {
  const updates = useSelector(selectAllUpdates);
  const token = useSelector(selectAuthToken);
  const isAuth = useSelector(selectAuthState);

  /*if(!isAuth) {
    redirect("/login")
  }*/

  return (
    <div className="p-11 w-full">

      {/* Header */}
      <header className="flex items-center justify-between">
        <Text tag="h1" type="heading">Overview Statistics</Text>

        <Button className="px-5 mr-1" dropdown onClick={ () => 'test'}>
          Last 30 days
        </Button>
      </header>
      

      <div className="flex gap-4 mt-2.5">
        {statistics.map((statistic) => (
          <CardStatistic data={statistic} />
        ))}
      </div>
      {/* End of Header */}

      <div className="mt-10 grid grid-cols-2 gap-4">
        {/* status updates */}
        <div className="col-span-1">

          <Text tag="h1" type="heading" className="mb-2.5">Status Updates</Text>

          {updates.updates && updates.updates.map((status) => (
            <CardUpdate data={status as StatusUpdate} />
          ))}

        </div>
        
        {/* projects */}
        <div className="col-span-1">

          <div className="mb-2.5 relative">
            <Text tag="h1" type="heading">Projects</Text>

            <div className="absolute bottom-[-3px] right-0">
              <Text tag="span" type="caption-underline" className="opacity-80">See All Projects</Text>
              <span className="text-primary text-2xl ml-5">&lt;</span>
              <span className="text-primary text-2xl ml-2.5">&gt;</span>
            </div>
          </div>

          <div className="min-w-[575px] flex flex-wrap gap-4">
            { projects.map( project => (
              <CardProject key={project.id} data={project} className="w-[48.5%]"/>
            ))}
          </div>

        </div>
      </div>
      
      
      
    </div>
  )
}

export default Dashboard