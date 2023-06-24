import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import AS from './pages/availableServices';
import CreateNew from './pages/createNew';
import Detail from './pages/detailPage';
import Signup from './pages/signUpPage';
import Login from './pages/loginPage';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signUp" element={<Signup />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          {!isLoggedIn && <Route path="/" element={<Home />} />}
        </Routes>

        {isLoggedIn && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/availableServices" element={<AS />} />
            <Route path="/newService" element={<CreateNew />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
