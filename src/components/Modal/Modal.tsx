"use client";

import { useEffect, useRef } from "react";
import Card from "../Card/Card";
import Icon from "../Icon/Icon";

type ModalProps = {
    title: string
    isOpen: boolean
    toggle: () => void
    children: React.ReactNode
}

export default function Modal({ title, isOpen, toggle, children }: ModalProps) {
  const outsideModalRef = useRef<HTMLDivElement>(null);

  const handleOutsideModal = (e: React.MouseEvent<HTMLElement>) => {
    if (outsideModalRef && outsideModalRef.current === e.target) toggle()
  };

  const handleCloseButton = () => toggle()

  useEffect( () => {
    if(isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }, [isOpen])

  
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 py-10 overflow-hidden`}
      onClick={handleOutsideModal}
      ref={outsideModalRef}
    >
      <Card className="bg-red-500 w-[600px] my-0 mx-auto">
        <header className="py-4 px-5 bg-[#F4F8F9] flex-between">
          <h3 className="text-title">{title}</h3>
          <div onClick={handleCloseButton} className="hover:opacity-80">
            <Icon
              name="close"
              iconContainerStyle="w-5 h-5 bg-body opacity-50 rounded-full text-white cursor-pointer"
              size="xs"
            />
          </div>
        </header>

        <div className="px-5 pt-5 max-h-[80vh] overflow-scroll">{children}</div>
      </Card>
    </div>
  );
}
