import './App.css';
import Home from "./pages/homePage";
import Av from "./pages/availableServices";
import CreateNew from "./pages/createNew";
import {BrowserRouter,Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/availableServices" element= {<Av/>}/>
        <Route path="/newService" element= {<CreateNew/>}/>
        {/* <Route path="/Detail" element= {<Detail/>}/> */}


      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
