import Card from "@/components/Card/Card"
import Icon from "@/components/Icon/Icon"

const RightSideBar = () => {
  return (
    <div className="w-[266px] h-screen absolute right-0 top-0 bg-white px-4">
        <div className="mt-11 flex items-center"> 
            <div className="w-5 h-7 text-primary">
                <Icon name="notification"/>
            </div>
            
            <h1 className="ml-2.5 text-heading">Today's Agenda</h1>
        </div>

        <div className="mt-9 border-b-[3px] border-[#4DA1FF] mb-5"/>

        <Card key={1} className="p-2.5 shadow-xl">
            <div className="flex-between">
                <p className="text-caption">12.45</p>
                
                <div className="flex">
                    <div className="w-4 h-4 text-primary"><Icon name="edit"/></div>
                    <div className="w-4 h-4 text-primary ml-5"><Icon name="delete"/></div>
                </div>
            </div>

            <p className="mt-2.5 text-body">New user interface</p>
        </Card>
        
    </div>
  )
}

export default RightSideBar;