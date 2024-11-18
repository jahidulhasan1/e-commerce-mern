import React, { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Link } from "react-router-dom";
type dataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};
const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Action",
    accessor: "action",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];
function Order() {
 
  const [rows, setRows] = useState<dataType[]>([
    {
      _id: "strijhgtyhng",
      amount: 3,
      quantity: 454,
      discount: 44,
      status: <span>processing</span>,
      action: <Link to="/order/44e4r">view</Link>,
    },
  ]);
  const table = TableHOC<dataType>(
    column,
    rows,
    "dashboard-product-box",
    "orders",
    true 
  )();

  return <div className="container">{table}</div>;
}

export default Order;
