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

const Profile = () => {
    const user = useAppSelector( state => state.auth.credentials.user);
    const token = getCookie('authToken');
    const router = useRouter();
    const updates = useAppSelector( state => state.updates.updates)
    const dispatch = useAppDispatch();
    const [imageForm, setImageForm] = useState<File>();
    const imageFileRef = useRef<HTMLInputElement>(null);

    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && setImageForm(e.target.files[0])
    }

    const handleUpload = async () => {

        if (imageForm) {
          const formData = new FormData();
          imageForm && formData.append("image", imageForm, imageForm?.name);
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
          // update the current updates with the new image, 
          const updatedUpdates: any = []
          updates.forEach( update => {
            console.log(update.user.id === user.id)
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
          setImageForm(undefined);
          dispatch( setProfileImage(data.image))
          router.refresh()
        } else {
          imageFileRef.current && imageFileRef.current.click();
        }
    }

    const { firstname, lastname, image, email } = user;
    return (
        <div className="w-full p-11 h-screen">
            <Card key={1} className="p-10">
                <h1 className="text-heading">Settings</h1>

                <div className="mt-7 flex">
                    <div>
                        <Button 
                            className="w-[210px] text-xl" 
                            icon="user" 
                            iconStyle="w-4 h-4"
                        >
                            {/** todos
                             * iconStyle is not doing anything
                             */}
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
                    
                    {/** Start of Form */}
                    <div className="ml-[108px] w-full">
                        <div className="flex justify-between">

                            <div className="flex-col w-[414px]">
                                <p className="text-caption">First Name</p>
                                <input type="text" name="name" value={firstname} readOnly className="border border-[#B4B8BC80] p-3 rounded-md text-sm w-full mt-1.5" />

                                <p className="text-caption mt-5">Last Name</p>
                                <input type="text" name="surname" value={lastname} readOnly className="border border-[#B4B8BC80] p-3 rounded-md text-sm w-full mt-1.5" />

                            </div>

                            <div className="flex-col-center">
                                <p className="text-body">Your Avatar</p>
                                <div className="w-[71px] h-[71px] min-w[71px] mt-3 relative">
                                    <ProfileImage image={image}/>
                                </div>
                                <input type="file" onChange={onImageChange} className="hidden" ref={imageFileRef}/>
                                <Button className="mt-5 w-[93px] text-[13px]" onClick={handleUpload}>{imageForm ? 'Save' : 'Update'}</Button>
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

                        <Button className="w-[160px] float-right mt-[70px] text-xl">Save Changes</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Profile