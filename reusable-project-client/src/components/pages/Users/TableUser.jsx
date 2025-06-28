import { useForm } from "react-hook-form";
import { FormInput } from "../../ReusableForms";
import clsx from "clsx";
import usePatchUser from "../../hooks/usePatchUser";
const TableUser = ({ email, name, image, status, _id }) => {
  const [mutateAsync] = usePatchUser()
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();
  const onSubmit = async (data) => {
    const updateDoc = {
      status: data.status,
      id: _id
    }
    await mutateAsync(updateDoc)
  };
  return (
    <tr className="border group relative border-indigo-200">
      <td>
        <img
          referrerPolicy="no-referrer"
          className="size-10 object-center rounded-full"
          src={image}
          alt={name}
        />
      </td>
      <td className="text-nowrap">{name}</td>
      <td className="text-nowrap">{email}</td>
      <td>
        <button
          className={clsx("text-nowrap w-20 border px-2 py-0.5 rounded-full", {
            "bg-sky-100 text-sky-600": status === "pending",
            "bg-green-100 text-green-600": status === "admin",
            "bg-yellow-100 text-yellow-600": status === "saler",
          })}
        >
          {status}
        </button>
      </td>
      <th onChange={handleSubmit(onSubmit)}>
        <FormInput
          id="status"
          name="status"
          type="text"
          variant="select"
          register={register("status")}
          options={[
            { value: "admin", label: "Admin" },
            { value: "saler", label: "Saler" },
            { value: "pending", label: "Pending" },
          ]}
        />
      </th>
    </tr>
  );
};

export default TableUser;
