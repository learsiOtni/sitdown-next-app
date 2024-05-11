import { ChangeEvent } from "react";
import Tiptap from "../Tiptap/Tiptap";
import SelectProjectMenu from "../SelectProjectMenu/SelectProjectMenu";
import { InputConfig } from "../Form/Form";
import InputField from "../InputField/InputField";

export type onInputChange = (name: string, value: any) => void

export type Input = {
  config: InputConfig
  value: any
  onChange: onInputChange
  error?: string
  label?: string
}

type InputProps = {
  elementType?: string
} & Input;

export default function Input({ elementType, config, value, onChange, error, label }: InputProps) {
  
  let element = <InputField config={config} value={value} onChange={onChange} error={error} label={label}/>
  if (elementType === "editor") element = <Tiptap onChange={onChange} error={error}/>
  if (elementType === "projectMenu") element = <SelectProjectMenu onChange={onChange} error={error}/>

  return (
    <>
      { label && <p className="text-sm pb-1.5 text-body">{label}</p>}
      { error && <p className="text-xs text-error">{error}</p>}
    
      {element}
    </>
  );
}
