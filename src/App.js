import "./App.css";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Homepage from "./customer/pages/Homepage/Homepage";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <Homepage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
