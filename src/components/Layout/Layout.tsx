"use client";

import { useEffect } from "react";
import { getCookie } from "cookies-next";
import RightSideBar from "./RightSideBar/RightSideBar";
import SideNav from "./SideNav/SideNav";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { getAuthUser } from "@/lib/features/auth/authSlice";
import ModalUpdateForm from "../ModalUpdateForm/ModalUpdateForm";
import { fetchProjects } from "@/lib/features/projects/projectsSlice";
import { fetchUpdates } from "@/lib/features/updates/updatesSlice";
//import { useGetAuthenticatedUserQuery } from "@/lib/services/auth/authService";

const Layout = ({ children }: { children: React.ReactNode }) => {

  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isModalOpen = useAppSelector( state => state.updates.isModalOpen);
  const dispatch = useAppDispatch();
  const updates = useAppSelector( state => state.updates.updates)
  const authUserId = useAppSelector( state => state.auth.credentials.user.id) 
  const rightSideBar = false;

  /*const {data, isFetching } = useGetAuthenticatedUserQuery('userDetails')
  useEffect( () => {
    //dispatch( getUserData())
    if (data) dispatch(setCredentials(data))
  }, [data, dispatch])*/

  const authCookie = getCookie("authToken");

  useEffect(() => {
    authCookie && dispatch(getAuthUser(authCookie));
  }, []);

  useEffect( () => {
    console.log(Object.keys(updates).length)
    if(isAuth && Object.keys(updates).length <= 0) {
      dispatch( fetchProjects());
      dispatch( fetchUpdates());
    }
  }, [isAuth])

  /*if(status === "postSucceeded" && !isModalOpen) {
    setStatus("idle")
    redirect('/dashboard');
  }*/
console.log(authUserId, isAuth)
  return (
    <div>
      {isAuth && authUserId ? (
        <>
          <ModalUpdateForm/>
          
          <SideNav />

          <div className="flex ml-[110px] bg-[#F5F7FA] h-full min-h-screen">
            {children}
          </div>

          {rightSideBar && <RightSideBar />}
        </>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Layout;
