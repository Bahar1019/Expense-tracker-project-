import { TiDelete } from "react-icons/ti";

function ExpenseItem({ expenses }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {expenses.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          £{expenses.cost}
        </span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
}
export default ExpenseItem;
