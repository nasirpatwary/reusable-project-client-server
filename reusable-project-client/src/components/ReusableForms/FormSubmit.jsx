import clsx from "clsx";
import useForms from "../../hooks/useForm";
import { TbFidgetSpinner } from 'react-icons/tb'
export const FormSubmit = ({isSubmitting}) => {
   const double = useForms()
  return (
    <div
      className={clsx("grid grid-cols-1 justify-items-center gap-4", {
        "md:grid-cols-2": double,
      })}
    >
      <div className="w-full  max-w-md mt-4 flex justify-end col-start-1 md:col-start-2">
        <button type="submit" className="w-full md:w-fit border text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold">
          {
            isSubmitting ?
            <span className="flex items-center">Submitting <TbFidgetSpinner size={20} className="animate-spin m-auto" /></span>
            :
            "Submit"
          }
        </button>
      </div>
    </div>
  );
};

