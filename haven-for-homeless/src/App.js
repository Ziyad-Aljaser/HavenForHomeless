import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import AS from './pages/availableServices';
import CreateNew from './pages/createNew';
import Detail from './pages/detailPage';
import SsignUp from './pages/signUpPage';
import Llogin from './pages/loginPage';
import SignUp from './pages/Signup';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          {!isLoggedIn && <Route path="/" element={<Home />} />}
        </Routes>

        {isLoggedIn && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/availableServices" element={<AS />} />
            <Route path="/newService" element={<CreateNew />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/signUp" element={<SsignUp />} />
            <Route path="/login" element={<Llogin />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
