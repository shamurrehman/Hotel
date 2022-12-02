import React from "react";

const Input = ({ label, id, type, placeholder, value, setValue }) => {
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="font-bold block text-xs mt-3 mb-2">
        {label}
      </label>
      <input
        value={value}
        className="border-0 bg-white outline-1 outline outline-slate-400 focus:outline-2 focus:outline-[#d97e4a] w-full border-slate-200 p-3  rounded-md"
        id={id}
        type={type}
        placeholder={placeholder}
        required
        onChange={changeHandler}
      />
    </div>
  );
};

export default Input;
