'use client'

import { User } from "@/lib/features/auth/authSlice";
import { getUsers } from "@/lib/features/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { useEffect, useState } from "react"
import Icon from "../Icon/Icon";
import { CustomInput } from "../Input/Input";


export default function SelectTeamMenu({onChange, value, error}: CustomInput) {

    const [chosenMembers, setChosenMembers] = useState<Array<User>>([]);
    const [members, setMembers] = useState<Array<User>>([]);
    const [show, setShow] = useState<boolean>(false);
    const dispatch = useAppDispatch()

    const users = useAppSelector( state => state.projects.teamMembers)
    const authUserId = useAppSelector( state => state.auth.credentials.user.id)

    const toggleShow = () => {
        setShow(!show)
    }

    useEffect( () => {
        (users.length <= 0) && dispatch( getUsers())
    }, [])

    useEffect( () => {

        const filteredUser: Array<any> = [];
        const defaultChosen: Array<any> = []
        users.forEach( user => {
            if(!value.includes(user.id)) filteredUser.push(user)
            else defaultChosen.push(user)
        })

        setMembers(filteredUser.filter( user => user.id !== authUserId))
        setChosenMembers(defaultChosen)
    }, [users])

    
    const handleAddMember = (user: User) => {
        const newMembers = chosenMembers.concat(user)
        setMembers( members.filter( member => member.id !== user.id))
        setChosenMembers(newMembers)
        onChange("teamMembers", newMembers)
    }

    const handleRemoveMember = (user: User) => {
        const newMembers = chosenMembers.filter( member => member.id !== user.id)
        setMembers( members.concat(user))
        setChosenMembers(newMembers)
        onChange("teamMembers", newMembers)
    }

    return (
        <div className="flex flex-col mb-3.5">

            <div className="flex">
                <Icon name="add" size="2x" onClick={toggleShow} iconContainerStyle="cursor-pointer text-primary self-start mr-3 hover:opacity-70"/>

                <div className="flex gap-3 overflow-scroll">
                { chosenMembers.length > 0 && chosenMembers.map( chosenMember => (
                <div key={chosenMember.id} className="w-[60px] flex flex-col items-center justify-center">
                    <div className="relative w-[50px] h-[50px] min-w-[50px] mb-1.5">
                        { chosenMember.image ? <img src={chosenMember.image} alt="member image" className="rounded-full object-cover w-[50px] h-[50px] min-w-[50px]"/>
                            : <Image 
                            fill 
                            src={'/noavatar.png'} 
                            alt="member image"
                            className="rounded-full object-cover"
                        />}

                        <Icon 
                            name="close" 
                            iconContainerStyle="absolute text-error opacity-70 cursor-pointer top-0 right-0 hover:opacity-100"
                            onClick={() => handleRemoveMember(chosenMember)}
                        />
                    </div>

                    <p className="text-xs text-body capitalize">{chosenMember.firstname}</p>
                    <p className="text-xs text-body capitalize">{chosenMember.lastname}</p>
                </div>
                ))}
                </div>
            </div>

            
            {show && <div className="bg-[#F5F7FA] rounded-md mt-2.5 p-2">

                <div className="flex justify-between mb-2.5">
                    <p className="text-xs text-body">Please Choose a Member:</p>
                    <Icon name="close" onClick={toggleShow} iconContainerStyle="text-body cursor-pointer hover:text-black"/>
                </div>

                <div className="flex gap-3 overflow-scroll">
            { members.length > 0 ? members.map( member => (
                <div key={member.id} className="w-[60px] mb-2.5 flex flex-col items-center justify-center cursor-pointer hover:opacity-70">
                    <div className="relative w-[50px] h-[50px] min-w-[50px] mb-1.5" onClick={() => handleAddMember(member)}>
                    { member.image ? <img src={member.image} alt="member image" className="rounded-full object-cover w-[50px] h-[50px] min-w-[50px]"/>
                            : <Image 
                            fill 
                            src={'/noavatar.png'} 
                            alt="member image"
                            className="rounded-full object-cover"
                        />}
                    </div>

                    <p className="text-xs text-body capitalize">{member.firstname}</p>
                    <p className="text-xs text-body capitalize">{member.lastname}</p>
                </div>
            )): <p className="text-body">No Members Found!</p>}
            </div>
            </div>}
        </div>
    )
}