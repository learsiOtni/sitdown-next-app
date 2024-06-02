"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { UserSignup, clearErrors, getAuthUser, login } from "@/lib/features/auth/authSlice";
import Button from "@/components/Button/Button";
import Form from "../Form";
import signupForm from "./signupFormFile";

export default function SignupForm() {
  const dispatch = useAppDispatch()
  const errors = useAppSelector( state => state.auth.errors)
  const isAuth = useAppSelector( state => state.auth.isAuth)
  const authUserId = useAppSelector( state => state.auth.credentials.user.id)

  useEffect(() => {
    dispatch(clearErrors());
  }, [dispatch]);

  const handleSubmit = async (formData: UserSignup) => {
    const action = await dispatch(login({userData: formData, isSignup: true}));
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
