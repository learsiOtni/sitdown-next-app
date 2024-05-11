"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Form from "../Form";
import signupForm from "./signupFormFile";
import { UserSignup, clearErrors, signup } from "@/lib/features/auth/authSlice";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Button from "@/components/Button/Button";

export default function SignupForm() {
  const errors = useAppSelector( state => state.auth.errors)
  const isAuth = useAppSelector( state => state.auth.isAuth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearErrors());
  }, []);

  const handleSubmit = (formData: UserSignup) => {
    dispatch(signup(formData));
  };

  if (isAuth) redirect('/dashboard')
  
  return (
    <Form
      formFile={signupForm}
      className="flex flex-col min-w-full"
      onSubmit={handleSubmit}
      errors={errors}
    >
      <Button type="submit" className="text-xl">Register</Button>
    </Form>
  );
}
