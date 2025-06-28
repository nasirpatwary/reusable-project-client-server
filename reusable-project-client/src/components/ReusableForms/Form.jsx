import clsx from "clsx";
import { createContext } from "react";

export const FormElementContext = createContext(null);
export const Form = ({ children, onSubmit, double }) => {
  return (
    <FormElementContext.Provider value={double}>
      <form
        onSubmit={onSubmit}
        className={clsx("border border-gray-300 p-4 w-full mx-auto", {
          "max-w-3xl": double,
          "max-w-md": !double,
        })}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
