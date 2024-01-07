import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/budget";
import ExpenseTotal from "./components/expensetotal";
import Remaining from "./components/remaining";
import ExpenseList from "./components/expenselist";
import AddExpenseForm from "./components/addexpenseform";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="Container">
        <h1 className="mt-3">MY BUDGET PLANNER</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget></Budget>
          </div>
          <div className="col-sm">
            <Remaining></Remaining>
          </div>
          <div className="col-sm">
            <ExpenseTotal></ExpenseTotal>
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>

        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm></AddExpenseForm>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
