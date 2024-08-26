import { ElementType, InputConfig } from "../Form/Form";
import InputField from "../InputField/InputField";
import SelectProjectMenu from "../SelectProjectMenu/SelectProjectMenu";
import SelectTeamMenu from "../SelectTeamMenu/SelectTeamMenu";
import Tiptap from "../Tiptap/Tiptap";

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

  return (
    <>
      { label && <p className="pb-1.5 text-caption-2">{label}
      {subLabel && <span className="ml-[5px] text-xs text-body opacity-60">{subLabel}</span>}
      </p>}
      { error && <p className="text-[10px] text-error md:text-xs">{error}</p>}
    
      {element}
    </>
  );
}
