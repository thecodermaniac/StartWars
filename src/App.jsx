import Navbar from "./components/Navbar";
import Home from "./components/Home";
import pic from "./assets/startwars.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TotalCards from "./components/TotalCards";

function App() {
  return (
    <div className="bg-[#242424] h-[100vh]">
      <ToastContainer />
      <Navbar />
      <Home />
      {/* <TotalCards/> */}
    </div>
  );
}

export default App;
