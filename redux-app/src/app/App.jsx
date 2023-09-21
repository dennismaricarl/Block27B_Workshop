import TransactionHistory from "../Transactions/TransactionHistory";
import Transactions from "../Transactions/Transactions";
import store from './redux/store';
import {Provider} from 'react-redux'
import "./app.css";

// TODO: Import the Redux store and provide it to this component using <Provider>.
const App = () => {
  return (
    <Provider store={store}>
    <main>
      <h1>Bank Account</h1>
      <Transactions />
      <TransactionHistory />
    </main>
    </Provider>
  );
};

export default App;