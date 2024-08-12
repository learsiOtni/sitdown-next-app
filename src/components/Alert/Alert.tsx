import { useEffect } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setAlertMessage } from "@/lib/features/ui/uiSlice";

export default function Alert() {
    const alertMessage = useAppSelector( state => state.ui.alertMessage);
    const dispatch = useAppDispatch();

    useEffect( () => {

        if(alertMessage !== "") setTimeout( () => {
            dispatch(setAlertMessage(""))
        }, 2000)
    }, [alertMessage])
    
    if(alertMessage !== "") return (
        <div className={`p-2.5 flex items-center fixed bottom-10 left-10 z-10 text-sm text-white ease-in-out duration-300 rounded-md 
        ${/(deleted)/g.test(alertMessage) ? 'bg-error' : 'bg-primary'}`}>
            <FontAwesomeIcon icon={faCircleInfo} className="mr-2.5"/>
            <p>{alertMessage}</p>
        </div>
    )
}