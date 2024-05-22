import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { NewUpdate, postUpdate, setStatus, toggleModal } from "@/lib/features/updates/updatesSlice";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import UpdateFormFile from "./updateFormFile";
import { validateTags } from "@/util/helper";


export default function ModalUpdateForm(){
    const authCookie = getCookie("authToken");
    const router = useRouter()
    const dispatch = useAppDispatch()

    const errors = useAppSelector( state => state.updates.errors)
    const isModalOpen = useAppSelector( state => state.updates.isModalOpen)
    const status = useAppSelector( state => state.updates.status)
    const user = useAppSelector( state => state.auth.credentials.user)

    const handleSubmit = (formData: NewUpdate) => {

        let filteredTags: Array<string> = [];
        if(typeof formData.tags === "string") filteredTags = validateTags(formData.tags)
        
        const { firstname, lastname, image } = user;
        const newData = {
            body: {...formData, tags: filteredTags},
            token: authCookie,
            userInfo: {
                firstname,
                lastname,
                image
            }
        }

        dispatch( postUpdate(newData))
    }

    useEffect(() => {
      if (status === "postSucceeded") {
        dispatch(setStatus("idle"));
        dispatch(toggleModal());
        router.push("/dashboard");
      }
    }, [status]);
    
    return (
        <Modal title={"Add new update"} isOpen={isModalOpen} toggle={ () => dispatch( toggleModal())}>
            {(status !== "postSucceeded") && <Form 
                formFile={UpdateFormFile}
                className="flex flex-col min-w-full"
                onSubmit={handleSubmit}
                errors={errors}
            >
                <Button type="submit" className="text-xl p-10 mb-7 place-self-end">Add</Button>
            </Form>}
        </Modal>
    )
}