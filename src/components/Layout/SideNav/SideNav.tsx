import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon/Icon";
import SideNavLinks from "./SideNavLinks";

const SideNav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const outsideNavRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => {
    if(window.innerWidth < 768) setShowNav(!showNav);
  };

  useEffect(() => {
    if (showNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const handleOutsideNav = (e: MouseEvent) => {
      if (outsideNavRef && outsideNavRef.current === e.target)
        setShowNav(false);
    };

    const handleResize = () => {
      if (window.innerWidth > 576 && showNav) {
        document.body.style.overflow = "auto";
        setShowNav(false);
      }
    };

    const current = outsideNavRef.current;
    current?.addEventListener("click", handleOutsideNav);

    window.addEventListener("resize", handleResize);
    return () => {
      current?.removeEventListener("click", handleOutsideNav);
      window.removeEventListener("resize", handleResize);
    };
  }, [showNav]);

  return (
    <>
      {!showNav && (
        <Icon
          name="menu"
          iconContainerStyle="p-3 text-black/70 fixed cursor-pointer z-10 md:hidden"
          onClick={toggleNav}
        />
      )}

      {showNav && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-slate-100/20 z-10 overflow-hidden md:hidden"
          ref={outsideNavRef}
        >
          <button
            className="p-1 text-caption w-28 absolute top-0 hover:opacity-70"
            onClick={toggleNav}
          >
            X Close
          </button>

          <SideNavLinks toggleNav={toggleNav}/>
        </div>
      )}

      
        <header className="fixed z-10 hidden md:flex">
          <SideNavLinks toggleNav={toggleNav}/>
        </header>
    </>
  );
};

export default SideNav;
