// import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Form, FormSection } from "../ReusableForms";
// import { bn } from "date-fns/locale"; // 🌍 Localization
// import DatePicker from "react-datepicker";
// import { ModalUpdate } from "../ReusableForms/ModalUpate";
// import usePatchCart from "../hooks/usePatchCart";
// import { warningToast } from "../shard/Toastify";
// export default function MyModal({ id, userName, price, date, quantity, name }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [startDate, setStartDate] = useState(() => {
//     const parsed = new Date(date); // 'date' from props
//     return isNaN(parsed) ? new Date() : parsed;
//   });
//   function open() {
//     setIsOpen(true);
//   }
//   function close() {
//     setIsOpen(false);
//   }
//   const [mutateAsync, isPending] = usePatchCart();
//   const {
//     register,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = useForm();
//   const onSubmit = async (data) => {
//     const quantity = Number(data.quantity);

//     if (quantity < 1) {
//       return warningToast("Please enter at least 1 for both kilo and quantity");
//     }
//     const updateDoc = {
//       id,
//       date: startDate,
//       price: data.price,
//       quantity: data.quantity,
//     };
//     try {
//       await mutateAsync(updateDoc);
//     } catch (error) {
//       warningToast(error.message);
//     }
//   };

//   return (
//     <>
//       <Button
//         onClick={open}
//         className="border text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold"
//       >
//         Edite
//       </Button>
//       <Dialog
//         open={isOpen}
//         as="div"
//         className="relative z-10 focus:outline-none"
//         onClose={close}
//       >
//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4">
//             <DialogPanel
//               transition
//               className="w-full max-w-md rounded-xl border p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
//             >
//               <DialogTitle
//                 as="h3"
//                 className="text-base/7 text-center font-medium"
//               >
//                 Well Come {userName}
//               </DialogTitle>
//               <Form double={true} onSubmit={handleSubmit(onSubmit)}>
//                 <FormSection>
//                   <label>
//                     Name
//                     <input
//                       className="w-full"
//                       type="text"
//                       id="name"
//                       {...register("name")}
//                       readOnly
//                       defaultValue={name}
//                     />
//                   </label>
//                   <label>
//                     Quantity
//                     <input
//                       className="w-full"
//                       type="text"
//                       id="quantity"
//                       {...register("quantity")}
//                       defaultValue={quantity}
//                     />
//                   </label>
//                   <label>
//                     Price
//                     <input
//                       className="w-full"
//                       type="text"
//                       id="price"
//                       {...register("price")}
//                       defaultValue={price}
//                     />
//                   </label>
//                   <label>
//                     Date
//                     <DatePicker
//                       className="w-full"
//                       selected={startDate}
//                       onChange={(d) => setStartDate(d)}
//                       selectsStart
//                       dateFormat="yyyy-MM-dd"
//                       startDate={startDate}
//                       placeholderText="Start Date"
//                       locale={bn} // 🌍 Bengali Localization (optional)
//                       minDate={new Date()} // ⛔ Disable past dates
//                       isClearable // 🔄 Clear Button
//                     />
//                   </label>
//                 </FormSection>
//                 <ModalUpdate close={close} isSubmitting={isSubmitting} />
//               </Form>
//               <div className="mt-4"></div>
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//     </>
//   );
// }
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { bn } from "date-fns/locale";
import DatePicker from "react-datepicker";
import usePatchCart from "../hooks/usePatchCart";
import { warningToast } from "../shard/Toastify";

export default function MyModal({ id, userName, price, date, quantity, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(() => {
    const parsed = new Date(date);
    return isNaN(parsed) ? new Date() : parsed;
  });

  const [quantityValue, setQuantityValue] = useState(Number(quantity) || 1);

  const totalPrice = parseFloat(price) * quantityValue;
  const [mutateAsync] = usePatchCart();

  const handleUpdate = async () => {
    if (quantityValue < 1) {
      return warningToast("Please enter at least 1 quantity.");
    }
    const updateDoc = {
      id,
      date: startDate,
      price: totalPrice, // 🟢 fixed base price
      quantity: quantityValue, // 🟢 user-adjusted quantity
    };

    try {
      await mutateAsync(updateDoc);
    } catch (error) {
      warningToast(error.message);
    }
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleIncrement = () => setQuantityValue((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantityValue((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <Button
        onClick={open}
        className="border text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold"
      >
        Edit
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md rounded-xl border p-6 backdrop-blur-2xl">
              <DialogTitle
                as="h3"
                className="text-base text-center font-medium"
              >
                Welcome, {userName}
              </DialogTitle>
              <div>
              <div>
                <div className="flex gap-2">
                  <label>
                    Name
                    <input
                      className="w-full"
                      type="text"
                      readOnly
                      defaultValue={name}
                    />
                  </label>
                  <label>
                    Quantity
                    <div className="flex gap-2 items-center">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="border text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        className="w-full text-center"
                        value={quantityValue}
                        readOnly
                      />
                      <button
                        type="button"
                        onClick={handleIncrement}
                        className="border text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold"
                      >
                        +
                      </button>
                    </div>
                  </label>
                    </div>  
                    <div className="flex gap-2">
                  <label>
                    Price
                    <input
                      className="w-full"
                      type="number"
                      readOnly
                      value={isNaN(totalPrice) ? 0 : totalPrice}
                    />
                  </label>
                  <label>
                    Date
                    <DatePicker
                      className="w-full"
                      selected={startDate}
                      onChange={(d) => setStartDate(d)}
                      dateFormat="yyyy-MM-dd"
                      locale={bn}
                      minDate={new Date()}
                      isClearable
                    />
                  </label>
                  </div>
                 <div className="text-end mt-4">
                   <button
                    onClick={() => {
                      close();
                      handleUpdate();
                    }}
                    type="submit"
                    className="w-full md:w-fit border text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold"
                  >
                    Got it, thanks!
                  </button>
                 </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
