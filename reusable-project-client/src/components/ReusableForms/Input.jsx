export const FormInput = ({
  label,
  type = "text",
  register,
  name,
  id,
  placeholder,
  options = [], 
  variant = "input",
}) => {
  return (
    <div className="w-full max-w-md">
      <label htmlFor={id} className="block mb-1">
        {label}
      </label>

      {variant === "select" ? (
        <select
          id={id}
          name={name}
          className="w-full appearance-none bg-white  px-3 py-2 border border-gray-300 rounded"
          {...register}
        >
          <option value="">Select {label}</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full px-3 py-2 border rounded"
          {...register}
        />
      )}
    </div>
  );
};

export const Input = ({ label, type, register, errors, name, id, defaultValue }) => {
  const isCheckbox = name === "checkbox";
  return (
    <div className={!isCheckbox ? "w-full max-w-md" : undefined}>
      {!isCheckbox && (
        <label htmlFor={id} className="block mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className={`${
          !isCheckbox ? "w-full px-3 py-2 border rounded" : ""
        }`}
        {...register}
      />
      {errors?.[name] && (
        <p className="text-red-500 text-sm absolute">{errors[name]?.message}</p>
      )}
    </div>
  );
};

