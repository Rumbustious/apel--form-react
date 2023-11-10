import React from "react";

function InputField({
  name,
  type,
  placeholderMsg,
  formData,
  handleChange,
  validationErrors,
  focusedFields,
  options, // An array of options for the select element
  max = undefined,
}) {
  return (
    <>
      {type === "select" ? (
        <select
          name={name}
          required
          value={formData[name]}
          onChange={handleChange}
          className={
            validationErrors[name] && focusedFields.includes(name)
              ? "error"
              : ""
          }
        >
          <option value="" disabled>
            {placeholderMsg}
          </option>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholderMsg}
          required
          maxLength={max}
          value={formData[name]}
          onChange={handleChange}
          className={
            validationErrors[name] && focusedFields.includes(name)
              ? "error"
              : ""
          }
        />
      )}
    </>
  );
}

export default InputField;
