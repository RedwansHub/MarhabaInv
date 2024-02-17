import React from 'react'

type Props = {
    label: string, 
    name: string, 
    value: string, 
    onChange: (e: any) => void;
    required: boolean
}

const InputField = ({ label, name, value, onChange, required }: Props) => {
    return (
      <div className="mb-4">
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          placeholder={label}
          onChange={onChange}
          className="mt-1 p-3 w-full border border-green-400 bg-transparent rounded-md focus:outline-none focus:ring focus:ring-green-800"
          required={required}
        />
      </div>
    );
  };
  
  export default InputField;