'use client';

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Update, clearErrors as clearUpdateErrors } from "@/lib/features/updates/updatesSlice";
import { Project, clearErrors as clearProjectErrors } from "@/lib/features/projects/projectsSlice";
import Icon from "../Icon/Icon";
import ModalEditForm from "../ModalEditForm/ModalEditForm";
import { ReduxSlice } from "../CardUpdates/CardUpdate";

type ButtonEditProps = {
    data: Update | Project
    slice: ReduxSlice
}

export default function ButtonEdit({data, slice}: Readonly<ButtonEditProps>) {
    const authUserId = useAppSelector( state => state.auth.credentials.user.id) 
    const dispatch = useAppDispatch()
    const [show, setShow] = useState(false)

    const toggleModal = () => {
        setShow( !show)
    }

    const handleEdit = () => {
        dispatch(clearProjectErrors())
        dispatch(clearUpdateErrors())
        setShow(true)
    }

    if(authUserId === data?.user?.id) return (
        <>
            <ModalEditForm show={show} toggleModal={toggleModal} data={data as Update & Project} slice={slice}/>
            
            <div className="text-black cursor-pointer opacity-70 hover:opacity-90">  
                <Icon name="edit" onClick={handleEdit}/>
            </div>
        </>
    )
}