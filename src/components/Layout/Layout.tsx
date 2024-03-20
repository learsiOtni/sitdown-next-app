'use client';

import RightSideBar from "./RightSideBar/RightSideBar";
import SideNav from "./SideNav/SideNav";

import type { NextPage } from "next";
import { selectAuthState } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { getCookie, deleteCookie } from 'cookies-next';


const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
  //const isLoggedIn = true;
  const rightSideBar = false;

  const isAuth = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const router = useRouter();

  
  if(!isAuth) router.push('/login');

  return (
    <div>

        { isAuth ? (
          <>
            <SideNav />

            <div className="flex ml-[110px] bg-[#F5F7FA] h-full min-h-screen">
              {children}
            </div>

            { rightSideBar && <RightSideBar /> }
          </>
        ) : (
          <div>{children}</div>
        )}
    </div>
  )
}

export default Layout;