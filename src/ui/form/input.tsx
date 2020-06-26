import React from 'react';
import { camelCaseOf } from 'helper/common-helper';

interface Options {
  name: string;
  value: string;
}

interface InputProps {
  id?: string;
  name: string;
  type?: string;
  checked?: boolean;
  className?: string;
  required?: boolean;
  hideLabel?: boolean;
  placeholder?: string;
  value?: string | number;
  options?: Array<Options>;
  onChange?: (e: any) => any;
}

export const Input = (props: InputProps) => {
  const { id, type, name, className, onChange, required, placeholder } = props;

  return (
    <div className="col-12 form-group p-0">
      <input
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`${className} form-control`}
      />
    </div>
  );
};

export const TextArea = (props: InputProps) => {
  const { name, className, required, placeholder } = props;

  return (
    <div className="col-12 form-group p-0">
      <textarea
        name={name}
        rows={Number(4)}
        required={required}
        placeholder={placeholder}
        className={`${className} form-control`}
      ></textarea>
    </div>
  );
};

export const RadioButton = (props: InputProps) => {
  const { id, name, value, hideLabel, required, onChange, checked } = props;

  return (
    <p>
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        required={required}
        onChange={onChange ? (e) => onChange(e.target.value) : () => {}}
      />
      <label htmlFor={id}>
        {!hideLabel && typeof value === 'string' ? camelCaseOf(value) : value}
      </label>
    </p>
  );
};

export const Select = (props: InputProps) => {
  const { name, placeholder, options = [], required, className } = props;

  return (
    <select
      name={name}
      required={required}
      className={`custom-select ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map((option, key) => (
        <option key={key} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
