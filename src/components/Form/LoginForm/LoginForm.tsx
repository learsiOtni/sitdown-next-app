"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Form from "../Form";
import loginForm from "./loginFormFile";
import { UserLogin, clearErrors, getAuthUser, login } from "@/lib/features/auth/authSlice";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Button from "@/components/Button/Button";

export default function LoginForm() {
  const errors = useAppSelector( state => state.auth.errors)
  const isAuth = useAppSelector( state => state.auth.isAuth)
  const authUserId = useAppSelector( state => state.auth.credentials.user.id)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearErrors());
  }, []);

  const handleSubmit = async (formData: UserLogin) => {
    const action = await dispatch(login(formData))
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

      <Button type="submit" className="text-xl">
        Login
      </Button>

      {errors.error && (
        <p className="self-center mt-2 text-sm text-error">
          {errors.error}
        </p>
      )}
    </Form>
  );
}
