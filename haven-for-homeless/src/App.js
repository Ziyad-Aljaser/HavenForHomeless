import './App.css';
import Home from "./pages/homePage";
import {BrowserRouter,Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route path="/" element= {<Home/>}/>
        {/* <Route path="/AvailableServices" element= {<AvailableServices/>}/>
        <Route path="/CreateNew" element= {<CreateNew/>}/>
        <Route path="/Detail" element= {<Detail/>}/> */}

      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
