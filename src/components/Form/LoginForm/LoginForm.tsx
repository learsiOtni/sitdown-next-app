"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Form from "../Form";
import loginForm from "./loginFormFile";
import { UserLogin, clearErrors, login } from "@/lib/features/auth/authSlice";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Button from "@/components/Button/Button";
import { fetchProjects } from "@/lib/features/projects/projectsSlice";
import { fetchUpdates } from "@/lib/features/updates/updatesSlice";

export default function LoginForm() {
  const errors = useAppSelector( state => state.auth.errors)
  const isAuth = useAppSelector( state => state.auth.isAuth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearErrors());
  }, []);

  const handleSubmit = (formData: UserLogin) => {
    dispatch(login(formData));
  };

  if (isAuth) redirect('/dashboard');

  return (
    <Form
      formFile={loginForm}
      className="flex flex-col min-w-full"
      onSubmit={handleSubmit}
      errors={errors}
    >
      <p className="self-end underline text-body text-sm mb-4 mt-1 ">
        Forgotten Password?
      </p>

      <Button type="submit" className="text-xl">
        Login
      </Button>

      {errors.error && (
        <p className="self-center text-sm text-error mt-2">
          {errors.error}
        </p>
      )}
    </Form>
  );
}
