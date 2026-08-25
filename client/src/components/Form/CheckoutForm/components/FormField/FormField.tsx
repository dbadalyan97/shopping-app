import { FC } from "react";
import { FormFieldProps } from "./types";

const FormField: FC<FormFieldProps> = ({
  id,
  label,
  placeholder,
  type = "text",
  error,
  ...inputProps
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs font-medium text-gray-500">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border-b border-gray-200 py-2 text-sm outline-none"
        {...inputProps}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;
