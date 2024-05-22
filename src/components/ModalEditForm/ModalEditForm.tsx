"use client"

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {  NewUpdate, Update, editUpdate, setStatus as setUpdatesStatus } from "@/lib/features/updates/updatesSlice";
import Button from "@/components/Button/Button";
import Form from "@/components/Form/Form";
import Modal from "@/components/Modal/Modal";
import EditUpdateFormFile from "./editUpdateFormFile";
import EditProjectFormFile from "./editProjectFormFile";
import { NewProject, Project, editProject, setStatus as setProjectsStatus } from "@/lib/features/projects/projectsSlice";
import { ReduxSlice } from "../CardUpdates/CardUpdate";
import { validateTags } from "@/util/helper";

type ModalEditFormProps = {
    show: boolean,
    toggleModal: () => void,
    data: Update & Project,
    slice: ReduxSlice
}

export default function ModalEditForm({show, toggleModal, data, slice}: Readonly<ModalEditFormProps>) {
    const [file, setFile] = useState({});
    const authCookie = getCookie("authToken");
    const router = useRouter()
    const params: {id?: string} = useParams();
    const dispatch = useAppDispatch()
    
    const errors = useAppSelector( state => state.updates.errors)
    const updatesStatus = useAppSelector( state => state.updates.status)
    const projectsStatus = useAppSelector( state => state.projects.status)
    const user = useAppSelector( state => state.auth.credentials.user)

    const handleSubmit = (formData: NewUpdate & NewProject) => {

      if (formData.tags && typeof formData.tags === "string")
        formData = { ...formData, tags: validateTags(formData.tags)};

      if (formData.teamMembers) {
        const teamMembersId: Array<String> = []
        formData.teamMembers.forEach( member => teamMembersId.push(member.id))
        formData = { ...formData, teamMembers: teamMembersId}
      }

      const { firstname, lastname, image } = user;
      const newData = {
        body: { ...formData },
        token: authCookie,
        userInfo: {
          firstname,
          lastname,
          image,
        },
        id: params.id,
      };

      console.log(formData)

      if(slice === "projects") dispatch( editProject(newData));
      if (slice === "updates") dispatch( editUpdate(newData))
    };

    useEffect(() => {
      let file: any;
      if (slice === "projects") file = { ...EditProjectFormFile };
      if (slice === "updates") file = { ...EditUpdateFormFile };

      const formKeys = Object.keys(file);

      data &&
        formKeys.forEach((formKey) => {
          if (formKey === "projectId") {
            file[formKey].value = data?.project?.id; //{id: data.project.id, title: data.project.title}
          } else if (formKey === "tags") {
            let tagsString = "";
            data.tags.forEach((tag, index) => {
              if (index === 0) tagsString = tag;
              else tagsString = tagsString + " " + tag;
            });
            file[formKey].value = tagsString;
          } else {
            file[formKey].value = data[formKey as keyof (Update | Project)];
          }
        });

      setFile(file);
    }, [slice]);

    useEffect(() => {
        if (updatesStatus === "editSucceeded" || projectsStatus === "editSucceeded") {
        if(slice === "updates") dispatch(setUpdatesStatus("idle"));
        if(slice === "projects") dispatch(setProjectsStatus("idle"));
          toggleModal();
          router.refresh();
          router.push('/dashboard');
        }
      }, [updatesStatus, projectsStatus]);

    
    return (
        <Modal title={"Edit update"} isOpen={show} toggle={toggleModal}>
            {(Object.keys(file).length > 0 && show) && <Form 
                formFile={file}
                className="flex flex-col min-w-full"
                onSubmit={handleSubmit}
                errors={errors}
            >
                <Button type="submit" className="text-xl p-10 mb-7 place-self-end">Edit</Button>
            </Form>}
        </Modal>
    )
}