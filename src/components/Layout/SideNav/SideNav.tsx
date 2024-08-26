import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { logout } from "@/lib/features/auth/authSlice";
import {
  clearErrors,
  setStatus,
  toggleModal,
} from "@/lib/features/updates/updatesSlice";
import links from "./links";
import Icon, { CustomIcons } from "@/components/Icon/Icon";
import Logo from "@/components/Logo/Logo";
import ProfileImage from "@/components/ProfileImage/ProfileImage";


type Link = {
  id: number;
  title: string;
  url: string;
};

const SideNav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const outsideNavRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.updates.status);
  const user = useAppSelector((state) => state.auth.credentials.user);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const handleAddUpdate = () => {
    if (status !== "failed" && status !== "idle") dispatch(setStatus("idle"));
    dispatch(clearErrors());
    dispatch(toggleModal());
  };

  const toggleNav = () => {
    setShowNav(!showNav)
  } 

  useEffect( () => {

    if(showNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    
    const handleOutsideNav = (e: MouseEvent) => {
      if (outsideNavRef && outsideNavRef.current === e.target) setShowNav(false);
    }

    const handleResize = () => {
      if(window.innerWidth > 576 && showNav) {
        document.body.style.overflow = "auto"
        setShowNav(false)
      }
    }

    const current = outsideNavRef.current;
    current?.addEventListener("click", handleOutsideNav);

    window.addEventListener("resize", handleResize);
    return () => {
      current?.removeEventListener("click", handleOutsideNav)
      window.removeEventListener("resize", handleResize)
    }
  }, [showNav])

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
          className="fixed top-0 left-0 w-full h-full bg-slate-100/20 z-10 overflow-hidden md:hidden"
          ref={outsideNavRef}
        >
        <header className="h-screen w-28 flex flex-col items-center fixed z-10 bg-[#F5F7FA] md:fixed md:flex">
          <button className="p-1 fixed text-caption w-28 hover:opacity-70 md:hidden" onClick={toggleNav}>
            X Close
          </button>

          <div className="mt-11">
            <Logo smallLogo />
          </div>

          <div className="h-7 mt-20 cursor-pointer hover:text-lg hover:opacity-90">
            <Icon name="add" background iconContainerStyle="text-2xl md:text-4xl" onClick={handleAddUpdate} />
          </div>

          <nav className="w-5 mt-8">
            <ul>
              {links.map((link: Link) => (
                <li
                  className={`pt-7 transition 
                                ${
                                  pathname === link.url
                                    ? "text-primary"
                                    : "text-[#B6B6B6]"
                                }
                                hover:text-primary hover:text-opacity-80`}
                  key={link.id}
                >
                  <Link href={link.url} onClick={toggleNav}>
                    <Icon name={link.title as CustomIcons} iconContainerStyle="text-xs md:text-base"/>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-7 h-7 mt-[190px] relative md:w-9 md:h-9">
            <div className="w-2 h-2 rounded-full bg-brand z-10 absolute left-5 md:left-6 md:top-[-5px] md:w-4 md:h-4" />
            <Link href="/profile">
              <div
                className={`w-full h-full rounded-full border relative ${
                  pathname === "/profile" && "border-brand"
                } hover:opacity-70 hover:border-brand`}
              >
                <ProfileImage image={user.image} />
              </div>
            </Link>
          </div>

          <button className="text-body hover:opacity-50" onClick={handleLogout}>
            Logout
          </button>
        </header>
        </div>
      )}
    </>
  );
};

export default SideNav;
