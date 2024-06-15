"use client";

import { useCallback, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Project, clearErrors, postProject, setStatus } from "@/lib/features/projects/projectsSlice";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import SearchBar from "../SearchBar/SearchBar";
import ProjectFormFile from "./projectFormFile";
import Spinner from "../Spinner/Spinner";

export default function ModalProjectForm() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const authCookie = getCookie("authToken");
  const dispatch = useAppDispatch();

  const errors = useAppSelector( state => state.projects.errors)
  const user = useAppSelector( state => state.auth.credentials.user)
  const status = useAppSelector( state => state.projects.status)

  const handleSubmit = (formData: Project) => {

    const minTeamMembers: Array<string> = [];
    formData.teamMembers.length > 0 &&
      formData.teamMembers.forEach( (member: any) => {
        minTeamMembers.push(member.id);
      });

    const { id, firstname, lastname, image } = user;
    const newData = {
      body: { ...formData, teamMembers: minTeamMembers },
      token: authCookie,
      userInfo: {
        id,
        firstname,
        lastname,
        image,
      },
    };

    dispatch(postProject(newData));
  };

  const toggleModal = useCallback(() => setIsModalOpen(!isModalOpen), [isModalOpen]);

  const handleAddProject = () => {
    toggleModal()
    dispatch( clearErrors())
  }

  useEffect(() => {
    if (status === "postSucceeded") {
      dispatch(setStatus("idle"));
      toggleModal();
    }
  }, [status, dispatch, toggleModal]);

  return (
    <>
      <SearchBar
        placeholder="Find Projects"
        buttonText="Add New Project"
        addProjectClicked={handleAddProject}
      />

      <Modal title="Add new project" isOpen={isModalOpen} toggle={toggleModal}>
        {isModalOpen && <Form
          formFile={ProjectFormFile}
          className="flex flex-col min-w-full"
          onSubmit={handleSubmit}
          errors={errors}
        >
          
          
          <Button type="submit" className="text-xl p-10 mb-7 place-self-end">
            {status === "loading" ? <Spinner className="w-6 h-6 text-white"/> : "Add"}
          </Button>
        </Form>}
        
      </Modal>
    </>
  );
}
