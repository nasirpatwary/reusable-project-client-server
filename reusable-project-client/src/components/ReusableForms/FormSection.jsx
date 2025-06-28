import clsx from "clsx";
import useForms from "../../hooks/useForm";
export const FormSection = ({ children }) => {
   const double = useForms()
  return (
    <div
      className={clsx("grid grid-cols-1 items-center gap-4", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
