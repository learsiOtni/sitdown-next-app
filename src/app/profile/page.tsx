'use client'
import { ChangeEvent, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setProfileImage } from "@/lib/features/auth/authSlice"
import { setUpdates } from "@/lib/features/updates/updatesSlice"
import Button from "@/components/Button/Button"
import Card from "@/components/Card/Card"
import ProfileImage from "@/components/ProfileImage/ProfileImage"
import Spinner from "@/components/Spinner/Spinner"
import InputField from "@/components/InputField/InputField"

const Profile = () => {
    const [imageForm, setImageForm] = useState<File>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const imageFileRef = useRef<HTMLInputElement>(null);
    
    const router = useRouter();
    const token = getCookie('authToken');
    const dispatch = useAppDispatch();
    const user = useAppSelector( state => state.auth.credentials.user);
    const updates = useAppSelector( state => state.updates.updates)

    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && setImageForm(e.target.files[0])
    }

    const handleUpload = async () => {

        if (imageForm) {
          const formData = new FormData();
          imageForm && formData.append("image", imageForm, imageForm?.name);
          setIsLoading(true)
          const message = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}profile/upload`,
            {
              method: "POST",
              body: formData,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const data: {message: string, image: string} = await message.json();

          if(data.message) setIsLoading(false)

          // update all the current updates with the new users' image, 
          const updatedUpdates: any = []
          updates.forEach( update => {
            if(update.user.id === user.id) updatedUpdates.push({
                ...update, 
                user: {
                    ...update.user,
                    image: data.image
                }
            })
            else updatedUpdates.push(update)
          })
          
          dispatch( setUpdates(updatedUpdates))
          dispatch( setProfileImage(data.image))
          setImageForm(undefined);
          router.refresh()
        } else {
          imageFileRef.current && imageFileRef.current.click();
        }
    }

    const { firstname, lastname, image, email } = user;
    return (
        <div className="p-4 w-full mt-5 md:p-11 md:mt-0 md:h-screen">
            <Card key={1} className="p-2 md:p-10">
                <h1 className="text-heading">Settings</h1>

                <div className="mt-7 flex">
                    <div className="hidden md:block">
                        <Button 
                            className="text-base md:w-[210px] md:text-xl" 
                            icon="user"
                            iconStyle="text-xs md:text-base"
                        >
                            {/** todos
                             * iconStyle is not doing anything
                             */}
                            Profile
                        </Button>

                        <Button
                            className="text-base md:w-[210px] md:text-xl"
                            bgNone={true}
                            icon="settings"
                            iconStyle="text-[#B6B6B6] text-xs md:text-base"
                        >
                            Account Settings
                        </Button>
                    </div>
                    
                    {/** Start of Form */}
                    <div className="w-full md:ml-[108px]">
                        <div className="md:flex md:justify-between">

                            <div className="flex-col m:w-[414px]">
                                <p className="text-caption">First Name</p>
                                <input type="text" name="name" value={firstname} readOnly className="border border-[#B4B8BC80] p-1.5 rounded-md text-[10px] w-full mt-1.5 md:text-sm md:p-3" />

                                <p className="text-caption mt-5">Last Name</p>
                                <input type="text" name="surname" value={lastname} readOnly className="border border-[#B4B8BC80] p-1.5 rounded-md text-[10px] w-full mt-1.5 md:text-sm md:p-3" />
                            </div>

                            <div className="mt-5 flex-col-center md:mt-0">
                                <p className="text-body">Your Avatar</p>
                                <div className="w-[71px] h-[71px] min-w[71px] mt-3 relative">
                                    <ProfileImage image={image}/>
                                </div>
                                <input type="file" onChange={onImageChange} className="hidden" ref={imageFileRef}/>

                                <Button className="mt-5 w-[93px] text-[10px] md:text-[13px]" onClick={handleUpload}>
                                    {isLoading ? <Spinner className="w-3 h-3 text-white md:w-6 md:h-6"/> : imageForm ? 'Save' : 'Update'}
                                </Button>
                            </div>
                        </div>

                        <div className="my-10 border-b-2 border-b-[#E6E7E8] w-full h-min" />
                        <h6 className="text-body">Email address</h6>

                        <div className="mt-5 flex-between">
                            <p className="text-caption">Your email address is {email}</p>
                            <p className="text-caption-primary underline">Change</p>
                        </div>

                        <div className="my-10 border-b-2 border-b-[#E6E7E8] w-full h-min" />

                        <div className="mt-5 flex-between">
                            <h6 className="text-body">Password</h6>
                            <p className="text-caption-primary underline">Change</p>
                        </div>

                        <Button className="w-[160px] float-right mt-[70px] text-sm md:text-xl">Save Changes</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Profile