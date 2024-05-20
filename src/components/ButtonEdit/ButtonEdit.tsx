'use client';

import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { Update } from "@/lib/features/updates/updatesSlice";
import { Project } from "@/lib/features/projects/projectsSlice";
import Icon from "../Icon/Icon";
import ModalEditForm from "../ModalEditForm/ModalEditForm";
import { ReduxSlice } from "../CardUpdates/CardUpdate";


type ButtonEditProps = {
    data: Update & Project
    slice: ReduxSlice
}

export default function ButtonEdit({data, slice}: ButtonEditProps) {
    const authUserId = useAppSelector( state => state.auth.credentials.user.id) 
    const [show, setShow] = useState(false)

    const toggleModal = () => {
        setShow( !show)
    }

    const handleEdit = () => {
        setShow(true)
    }

    if(authUserId === data?.user?.id) return (
        <>
            <ModalEditForm show={show} toggleModal={toggleModal} data={data} slice={slice}/>
            
            <div className="text-black cursor-pointer opacity-70 hover:opacity-90"
                onClick={handleEdit}
            >  
                
                <Icon name="edit" />
            </div>
        </>
    )
}