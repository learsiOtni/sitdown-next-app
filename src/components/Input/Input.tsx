import { ChangeEvent, useEffect } from "react";
import Tiptap from "../Tiptap/Tiptap";
import SelectProjectMenu from "../SelectProjectMenu/SelectProjectMenu";
import { ElementType, InputConfig } from "../Form/Form";
import InputField from "../InputField/InputField";
import SelectTeamMenu from "../SelectTeamMenu/SelectTeamMenu";

export type onInputChange = (name: string, value: any) => void

export type CustomInput = {
  value: any
  onChange: onInputChange
  error?: string
}

export type Input = {
  config: InputConfig
  label?: string
  subLabel?: string
}

export type InputProps = {
  elementType?: ElementType
} & Input & CustomInput;

export default function Input({ elementType, config, value, onChange, error, label, subLabel }: InputProps) {
  
  let element = <InputField config={config} value={value} onChange={onChange} error={error} label={label}/>
  if (elementType === "editor") element = <Tiptap value={value} onChange={onChange} error={error}/>
  if (elementType === "projectMenu") element = <SelectProjectMenu value={value} onChange={onChange} error={error}/>
  if (elementType === "teamMenu") element = <SelectTeamMenu value={value} onChange={onChange} error={error}/>
  console.log(subLabel)
  return (
    <>
      { label && <p className="text-sm pb-1.5 text-body">{label}
      {subLabel && <span className="ml-[5px] text-xs text-body opacity-60">{subLabel}</span>}
      </p>}
      { error && <p className="text-xs text-error">{error}</p>}
    
      {element}
    </>
  );
}
