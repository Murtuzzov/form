import React from "react";
import { Field, ErrorMessage } from "formik";

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  isSelect?: boolean;
  options?: string[];
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  isSelect = false,
  options = [],
}) => (
  <div>
    <label className="block text-labelColor font-medium text-sm">{label}</label>
    <div className="relative mt-1">
      {isSelect ? (
        <Field
          as="select"
          name={name}
          className="p-3 border rounded-lg focus:outline-none w-full max-w-[498px] text-sm text-black placeholder:text-gray-400 focus:text-black"
        >
          <option value="" disabled className="text-gray-400">
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option} className="text-black">
              {option}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className="p-3 border rounded-lg focus:outline-none w-full max-w-[498px] text-sm text-black placeholder:text-gray-400 focus:text-black"
        />
      )}
      <ErrorMessage
        name={name}
        component="span"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm"
      />
    </div>
  </div>
);

export default FormField;
