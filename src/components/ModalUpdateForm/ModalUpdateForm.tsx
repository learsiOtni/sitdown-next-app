import { NewUpdate, postUpdate, toggleModal } from "@/lib/features/updates/updatesSlice";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import UpdateFormFile from "./updateFormFile";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getCookie } from "cookies-next";



export default function ModalUpdateForm(){

    const dispatch = useAppDispatch()
    const authCookie = getCookie("authToken");
    const errors = useAppSelector( state => state.updates.errors)
    const isModalOpen = useAppSelector( state => state.updates.isModalOpen)

    const handleSubmit = (formData: NewUpdate) => {
        const tagsToArray = formData.tags.split(' ')

        const newData = {
            body: {...formData, tags: tagsToArray},
            token: authCookie
        }
        
        dispatch( postUpdate(newData))
    }

    return (
        <Modal title="Add new update" isOpen={isModalOpen} toggle={ () => dispatch( toggleModal())}>
            <Form 
                formFile={UpdateFormFile}
                className="flex flex-col min-w-full"
                onSubmit={handleSubmit}
                errors={errors}
            >
                <Button type="submit" className="text-xl p-10 mb-7 place-self-end">Add</Button>
            </Form>
        </Modal>
    )
}