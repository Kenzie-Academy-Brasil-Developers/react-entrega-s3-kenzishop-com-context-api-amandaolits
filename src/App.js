import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={1300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </div>
  );
}

export default App;
