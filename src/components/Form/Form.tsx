"use client";

import { FormEvent, useState } from "react";
import Input from "../Input/Input";

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
  subLabel?: string 
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

export type ElementType = "input" | "editor" | "projectMenu" | "teamMenu";

export default function Form({
  formFile,
  className,
  onSubmit,
  children,
  errors,
}: Readonly<FormProps>) {
  const [form, setForm] = useState<Forms>(formFile);
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
      {Object.keys(form).length > 0 && formKeys.map((formKey) => (
        <Input
          key={formKey}
          config={form[formKey].config}
          value={form[formKey].value}
          onChange={handleInputChange}
          error={errors && errors[formKey] && errors[formKey]}
          label={form[formKey].label}
          subLabel={form[formKey].subLabel}
          elementType={form[formKey].elementType as ElementType}
        />
      ))}

      {children}
    </form>
  );
}
