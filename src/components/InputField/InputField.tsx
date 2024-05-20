"use client";

import { ChangeEvent, useState } from "react";
import { InputProps } from "../Input/Input";

export default function InputField({ label, error, config, value, onChange}: InputProps) {

    const [data, setData] = useState(value)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value)
        onChange(e.target.name, e.target.value)
    }

  return (
    <input
      className={`p-2 ${
        label ? "mb-5" : "mb-3"
      } border rounded text-lg bg-[#FBFBFD] ${
        error && "border-error"
      } last:mb-0`}
      {...config}
      value={data}
      onChange={handleInputChange}
    />
  );
}
