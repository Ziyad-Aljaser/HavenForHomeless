import './App.css';
import Home from "./pages/homePage";
import AS from "./pages/availableServices";
import CreateNew from "./pages/createNew";
import Detail from "./pages/detailPage";
import Login from "./pages/loginPage";
import {BrowserRouter,Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/availableServices" element= {<AS/>}/>
        <Route path="/newService" element= {<CreateNew/>}/>
        <Route path="/detail" element= {<Detail/>}/>
        <Route path="/login" element= {<Login/>}/>

      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
