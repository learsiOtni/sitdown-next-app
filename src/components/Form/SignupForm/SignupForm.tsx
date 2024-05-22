"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Form from "../Form";
import signupForm from "./signupFormFile";
import { UserSignup, clearErrors, getAuthUser, signup } from "@/lib/features/auth/authSlice";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Button from "@/components/Button/Button";

export default function SignupForm() {
  const dispatch = useAppDispatch()
  const errors = useAppSelector( state => state.auth.errors)
  const isAuth = useAppSelector( state => state.auth.isAuth)
  const authUserId = useAppSelector( state => state.auth.credentials.user.id)
  

  useEffect(() => {
    dispatch(clearErrors());
  }, []);

  const handleSubmit = async (formData: UserSignup) => {
    const action = await dispatch(signup(formData));
    if(action.payload.token) dispatch(getAuthUser(action.payload.token))
  };

  if (isAuth && authUserId) redirect('/dashboard')
  
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
