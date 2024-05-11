"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../Input/Input";
import { checkValidity } from "@/util/formValidation";

export type InputConfig = {
    id: string
    type: string
    name: string
    placeholder?: string
}

export type InputValidation = {
  isRequired?: boolean
  minLength?: number
  maxLength?: number
}

export type ElementForm = {
  elementType?: string
  label?: string
  config: InputConfig
  value: string
  validation: InputValidation
  valid: boolean
};

type Forms = {
  [E in string]: ElementForm;
};

type FormProps = {
  formFile: Forms;
  className?: string;
  onSubmit?: any;
  children?: React.ReactNode;
  errors?: { [T in string]: string };
};

export default function Form({
  formFile,
  className,
  onSubmit,
  children,
  errors,
}: FormProps) {
  const [form, setForm] = useState(formFile);
  const formKeys = Object.keys(formFile);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let formData = {};

    formKeys.forEach((formKey) => {
      formData = { ...formData, [formKey]: form[formKey].value };
    });
    
    onSubmit(formData);
  };

  const handleInputChange = (inputName: string, inputValue: any) => {
    setForm({
      ...form,
      [inputName]: {
        ...form[inputName],
        value: inputValue
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {formKeys.map((formKey) => (
        <Input
          key={formKey}
          config={form[formKey].config}
          value={form[formKey].value}
          onChange={handleInputChange}
          error={errors && errors[formKey] && errors[formKey]}
          label={form[formKey].label}
          elementType={form[formKey].elementType}
        />
      ))}

      {children}
    </form>
  );
}
