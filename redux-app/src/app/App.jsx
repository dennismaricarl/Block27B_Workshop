import TransactionHistory from "../Transactions/TransactionHistory";
import Transactions from "../Transactions/Transactions";

import "./app.css";

// TODO: Import the Redux store and provide it to this component using <Provider>.
const App = () => {
  return (
    <main>
      <h1>Bank Account</h1>
      <Transactions />
      <TransactionHistory />
    </main>
  );
};

export default App;