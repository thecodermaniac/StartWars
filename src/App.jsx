import Navbar from "./components/Navbar";
import Home from "./components/Home";
import pic from "./assets/startwars.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import TotalCards from "./components/TotalCards";

function App() {
  return (
    // style={{backgroundImage:`url(${pic})`}}
    <div className="bg-[#242424] bg-right bg-no-repeat md:bg-cover shadow-lg font-[Titillium] md:bg-[url('./assets/startwars.png')] h-[100vh]" >
      <ToastContainer />
      <Navbar />
      <Home />
      {/* <TotalCards/> */}
    </div>
  );
}

export default App;
