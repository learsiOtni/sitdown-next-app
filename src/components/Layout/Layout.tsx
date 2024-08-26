"use client";

import { useEffect } from "react";
import { getCookie } from "cookies-next";
import RightSideBar from "./RightSideBar/RightSideBar";
import SideNav from "./SideNav/SideNav";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { getAuthUser } from "@/lib/features/auth/authSlice";
import ModalUpdateForm from "../ModalUpdateForm/ModalUpdateForm";
import { fetchProjects } from "@/lib/features/projects/projectsSlice";
import { fetchTags, fetchUpdates, fetchUpdatesByDates } from "@/lib/features/updates/updatesSlice";
import Alert from "../Alert/Alert";
//import { useGetAuthenticatedUserQuery } from "@/lib/services/auth/authService";

const Layout = ({ children }: { children: React.ReactNode }) => {

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const authUserId = useAppSelector( state => state.auth.credentials.user.id) 
  const updates = useAppSelector( state => state.updates.updates)
  const rightSideBar = false;

  /*const {data, isFetching } = useGetAuthenticatedUserQuery('userDetails')
  useEffect( () => {
    //dispatch( getUserData())
    if (data) dispatch(setCredentials(data))
  }, [data, dispatch])*/

  useEffect(() => {
    const authCookie = getCookie("authToken");
    authCookie && dispatch(getAuthUser(authCookie));
  }, [dispatch]);

  useEffect( () => {
    if(isAuth && Object.keys(updates).length <= 0) {
      dispatch( fetchProjects());
      dispatch( fetchUpdates());
      dispatch( fetchUpdatesByDates());
      dispatch( fetchTags());
    }
  }, [isAuth, updates, dispatch])

  return (
    <div>
      {isAuth && authUserId ? (
        <>
          <Alert/>
          <ModalUpdateForm/>
          <SideNav />

          <div className="flex bg-[#F5F7FA] h-full min-h-screen md:ml-[110px]">
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
