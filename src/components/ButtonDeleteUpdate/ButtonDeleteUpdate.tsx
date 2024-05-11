'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Icon from "../Icon/Icon";
import { Update, deleteUpdate } from "@/lib/features/updates/updatesSlice";
import { getCookie } from "cookies-next";

type ButtonDeleteUpdateProps = {
    data: Update
}

export default function ButtonDeleteUpdate({data}: ButtonDeleteUpdateProps) {
    
    const authUserId = useAppSelector( state => state.auth.credentials.user.id) 
    const dispatch = useAppDispatch();
    const token = getCookie("authToken")

    const handleDelete = () => {
        const updateId = data.id;

        dispatch( deleteUpdate({updateId, token}))
    }

    if (authUserId === data.user.id) return (
        <div 
            className="ml-2.5 text-error cursor-pointer opacity-70 hover:opacity-90 absolute bottom-[20px] right-[30px]" 
            onClick={handleDelete}
        >
          <Icon name="delete"/>
        </div>
    )
}