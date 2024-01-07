import ExpenseItem from "./expenseitem";
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function ExpenseList() {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem expenses={expenses}></ExpenseItem>
      ))}
    </ul>
  );
}

export default ExpenseList;
