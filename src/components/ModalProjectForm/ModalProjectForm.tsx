"use client";

import { useState } from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import ProjectFormFile from "./projectFormFile";
import SearchBar from "../SearchBar/SearchBar";

export default function ModalProjectForm() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <SearchBar
        placeholder="Find Projects"
        buttonText="Add New Project"
        addProjectClicked={toggleModal}
      />

      <Modal title="Add new project" isOpen={isModalOpen} toggle={toggleModal}>
        <Form
          formFile={ProjectFormFile}
          className="flex flex-col min-w-full"
          onSubmit={() => {}}
          errors={{}}
        >
          <Button type="submit" className="text-xl p-10 mb-7 place-self-end">
            Add
          </Button>
        </Form>
      </Modal>
    </>
  );
}
