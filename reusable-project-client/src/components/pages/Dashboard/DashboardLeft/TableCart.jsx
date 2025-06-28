import { format } from "date-fns";
import useDeleteCart from "../../../hooks/useDeleteCart";
import { toast } from "react-toastify";
import MyModal from "../../../Model/MyModal";
const TableCart = ({
  _id,
  email,
  name,
  userName,
  image,
  price,
  date,
  quantity,
}) => {
  const [isPending, mutateAsync] = useDeleteCart();
  const handleDelete = (id) => {
    toast((t) => (
      <span className="space-x-30">
        Are you sure you want to delete?
        <button
          onClick={async () => {
            toast.dismiss(t.id);
            await mutateAsync(id);
          }}
          className="border duration-500 border-red-500 cursor-pointer px-4 rounded font-semibold text-red-600"
        >
          Yes
        </button>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="border text-green-600 duration-500 border-green-600 cursor-pointer px-4 rounded font-semibold"
        >
          No
        </button>
      </span>
    ));
  };

  return (
    <tr className="border border-indigo-200">
      <td>
        <div className="flex items-center gap-3">
          <img
            className="rounded-full h-10 w-10"
            src={image}
            alt={name}
          />
          <div>
            <div className="font-bold text-nowrap">{userName}</div>
            <div className="text-sm opacity-50 text-nowrap">{email}</div>
          </div>
        </div>
      </td>
      <td className="text-nowrap">
        Price:{" "}
        <span className="text-indigo-500">{price}</span>
      </td>
      <td className="text-nowrap">
          Quantity:{" "} <span className="text-indigo-500">{quantity}</span>
      </td>
      <td>{format(date, "P")}</td>
      <th className="space-x-2 text-nowrap">
        <MyModal
          id={_id}
          name={name}
          userName={userName}
          price={price}
          date={date}
          quantity={quantity}
        />
        <button
          disabled={isPending}
          onClick={() => handleDelete(_id)}
          className="border text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold"
        >
          {isPending ? "Deleting..." : "Delete"}
        </button>
      </th>
    </tr>
  );
};

export default TableCart;
