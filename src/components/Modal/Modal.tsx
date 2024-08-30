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

export default function Modal({ title, isOpen, toggle, children }: Readonly<ModalProps>) {
  const outsideModalRef = useRef<HTMLDivElement>(null);

  useEffect( () => {
    if(isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"

    const handleOutsideModal= (e: MouseEvent) => {
      if(outsideModalRef && outsideModalRef.current === e.target) toggle()
    }

    const current = outsideModalRef.current;

    current?.addEventListener("click", handleOutsideModal)
    return () => current?.removeEventListener("click", handleOutsideModal)
  }, [isOpen, toggle])
  
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 overflow-hidden md:py-10`}
      ref={outsideModalRef}
    >
      <Card className="fixed w-full max-h-full bottom-0 overflow-scroll md:static md:w-[600px] md:mx-auto">
        <header className="py-2 px-2.5 bg-[#F4F8F9] flex-between md:py-4 md:px-5">
          <h3 className="text-title">{title}</h3>
          <button className="hover:opacity-80" onClick={toggle}>
            <Icon
              name="close"
              iconContainerStyle="w-3 h-3 text-white bg-body opacity-50 rounded-full cursor-pointer text-[8px] md:w-5 md:h-5 md:text-sm"
            />
          </button>
        </header>

        <div className="px-5 pt-5 h-full overflow-scroll md:max-h-[80vh]">{children}</div>
      </Card>
    </div>
  );
}
