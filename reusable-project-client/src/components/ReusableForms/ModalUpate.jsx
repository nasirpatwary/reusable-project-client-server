import clsx from "clsx";
import useForms from "../../hooks/useForm";
import { TbFidgetSpinner } from "react-icons/tb";
export const ModalUpdate = ({isSubmitting, close}) => {
   const double = useForms()
  return (
    <div
      className={clsx("grid grid-cols-1 justify-items-center gap-4", {
        "md:grid-cols-2": double,
      })}
    >
      <div className="w-full  max-w-md mt-6 flex justify-end col-start-1 md:col-start-2">
        <button onClick={close} type="submit" className="w-full md:w-fit border text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold">
          {
            isSubmitting ?
            <span className="flex items-center">Submitting <TbFidgetSpinner size={20} className="animate-spin m-auto" /></span>
            :
            "Got it, thanks!"
          }
        </button>
      </div>
    </div>
  );
};