import { AppContext } from "../contexts/AppContext";
import React, { useContext } from "react";

function Budget() {
  const { budget } = useContext(AppContext);

  return (
    <div className="alert alert-secondery">
      <span>Budget: £{budget}</span>
    </div>
  );
}
export default Budget;
