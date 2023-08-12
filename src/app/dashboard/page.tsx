import Card from '@/components/Card/Card'
import React from 'react'
import { statistics } from '../../../data'
import { calculatePercentageChange } from '@/util/helper'
import Button from '@/components/Button/Button'
import Triangle from '@/components/Icons/Triangle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Dashboard = () => {
  return (
    <div className="p-11">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl text-body text-opacity-80">Overview Statistics</h1>
        <Button className="px-5 mr-1">Last 30 days</Button>
      </header>
      

      <div className="flex gap-4 mt-2.5">
        {statistics.map(({id, currentValue, title, previousValue, icon}) => {

          const percValue = previousValue && calculatePercentageChange(currentValue, previousValue)
          const iconStyle = `bg-[${icon.bgColor}] w-7 h-7 p-1.5 ${icon.className}`
          
          return (
            <Card key={id} className="py-7 w-[280px] flex flex-col items-center">
              <div className={iconStyle}>
                <FontAwesomeIcon className={icon.className} icon={icon.name} />
              </div>
              <h2 className="text-black text-[65px]">{currentValue}</h2>
              <h6 className="text-body mt-[-15px]">{title}</h6>
              <div className="flex items-center">
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
            </Card>
        )})}
      </div>
      
      
      
    </div>
  )
}

export default Dashboard