"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { UserLogin, clearErrors, getAuthUser, login } from "@/lib/features/auth/authSlice";
import Button from "@/components/Button/Button";
import Form from "../Form";
import Spinner from "@/components/Spinner/Spinner";
import loginForm from "./loginFormFile";

export default function LoginForm() {
  const dispatch = useAppDispatch()
  const errors = useAppSelector( state => state.auth.errors)
  const isAuth = useAppSelector( state => state.auth.isAuth)
  const authUserId = useAppSelector( state => state.auth.credentials.user.id)
  const authStatus = useAppSelector( state => state.auth.status)
  const updatesStatus = useAppSelector(state => state.updates.status)
  

  useEffect(() => {
    dispatch(clearErrors());
  }, [dispatch]);

  const handleSubmit = async (formData: UserLogin) => {
    const action = await dispatch(login({ userData: formData }));
    if(action.payload.token) dispatch(getAuthUser(action.payload.token))
  };

  if (isAuth && authUserId) redirect('/dashboard');

  return (
    <Form
      formFile={loginForm}
      className="flex flex-col min-w-full"
      onSubmit={handleSubmit}
      errors={errors}
    >
      <p className="self-end mb-4 mt-1 text-caption-2 underline">
        Forgotten Password?
      </p>

      <Button type="submit" className="text-sm md:text-xl">
        {authStatus === "loading" || updatesStatus === "loading" ? <Spinner className="w-3 h-3 text-white md:w-6 md:h-6"/> : "Login"}
      </Button>

      {errors.error && (
        <p className="self-center mt-2 text-[10px] text-error md:text-xs">
          {errors.error}
        </p>
      )}
    </Form>
  );
}
