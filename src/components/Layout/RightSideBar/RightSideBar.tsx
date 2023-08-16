import Icon from "@/components/Icon/Icon"
import Text from "@/components/Text/Text"
import Card from "@/components/Card/Card"


const RightSideBar = () => {
  return (
    <div className="w-[266px] h-screen absolute right-0 top-0 bg-white px-4">
        <div className="mt-11 flex items-center"> 
            <div className="w-5 h-7 text-primary">
                <Icon name="notification"/>
            </div>
            
            <Text tag="h1" type="heading" className="ml-2.5">Today's Agenda</Text>
        </div>

        <div className="mt-9 border-b-[3px] border-[#4DA1FF] mb-5"/>

        <Card key={1} className="p-2.5 shadow-xl">
            <div className="flex items-center justify-between">
                <Text tag="p" type="caption">12.45</Text>
                
                <div className="flex">
                    <div className="w-4 h-4 text-primary"><Icon name="edit"/></div>
                    <div className="w-4 h-4 text-primary ml-5"><Icon name="delete"/></div>
                </div>
            </div>

            <Text tag="p" type="body" className="mt-2.5">New user interface</Text>
        </Card>
        
    </div>
  )
}

export default RightSideBar