import { format } from "date-fns";

const TableHistory = ({ email, price, category, date, status }) => {
  return (
    <tr className="border border-indigo-200">
      <td className="text-nowrap">{email}</td>
      <td className="text-nowrap">{category}</td>
      <td className="text-nowrap">{price}</td>
      <td className="text-nowrap">{status}</td>
      <td>{format(date, "P")}</td>
      <th className="space-x-2 text-nowrap"></th>
    </tr>
  );
};

export default TableHistory;
