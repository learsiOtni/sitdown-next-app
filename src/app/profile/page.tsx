import Button from "@/components/Button/Button"
import Card from "@/components/Card/Card"
import Text from "@/components/Text/Text"
import Icon from "@/components/Icon/Icon"
import Image from "next/image"


const Profile = () => {
    return (
        <div className="w-full p-11 h-screen">
            <Card key={1} className="p-10">
                <Text tag="h1" type="heading">Settings</Text>

                <div className="mt-7 flex">
                    <div>
                        <Button 
                            className="w-[210px] text-xl" 
                            icon="user" 
                            iconStyle="w-4 h-4"
                        >
                            Profile
                        </Button>

                        <Button
                            className="text-xl"
                            bgNone={true}
                            icon="settings"
                            iconStyle="w-5 h-5 text-[#B6B6B6]"
                        >
                            Account Settings
                        </Button>
                    </div>

                    <div className="ml-[108px] w-full">
                        <div className="flex justify-between">

                            <div className="flex-col w-[414px]">
                                <Text tag="p" type="caption">Name</Text>
                                <input type="text" name="name" value="Leo" className="border border-[#B4B8BC80] p-3 rounded-md text-sm w-full mt-1.5" />

                                <Text tag="p" type="caption" className="mt-5">Surname</Text>
                                <input type="text" name="surname" value="Jacob" className="border border-[#B4B8BC80] p-3 rounded-md text-sm w-full mt-1.5" />

                            </div>

                            <div className="mr-[153px] flex flex-col items-center">
                                <Text tag="p" type="body">Your Avatar</Text>
                                <Image width={71} height={71} src="/noavatar.png" alt="profile image" className="rounded-full mt-3" />
                                <Button className="mt-5 w-[93px] text-[13px]">Update</Button>
                            </div>
                        </div>

                        <div className="my-10 border-b-2 border-b-[#E6E7E8] w-full h-min" />

                        <Text tag="h6" type="body">Email address</Text>

                        <div className="mt-5 flex justify-between">
                            <Text tag="p" type="caption">Your email address is leojacob@gmail.com</Text>
                            <Text tag="p" type="caption-primary" className="underline">Change</Text>
                        </div>

                        <div className="my-10 border-b-2 border-b-[#E6E7E8] w-full h-min" />

                        <div className="mt-5 flex justify-between">
                            <Text tag="h6" type="body">Password</Text>
                            <Text tag="p" type="caption-primary" className="underline">Change</Text>
                        </div>

                        <Button className="w-[160px] float-right mt-[70px] text-xl">Save Changes</Button>

                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Profile