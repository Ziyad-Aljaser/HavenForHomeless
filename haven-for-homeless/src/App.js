import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import AS from './pages/availableServices';
import CreateNew from './pages/createNew';
import Detail from './pages/detailPage';
import Signup from './pages/signUpPage';
import Login from './pages/loginPage';
import SignOutPage from './pages/signOutPage';



// Create context
export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);  // Add a state for the user

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/signUp" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signout" element={<SignOutPage />} /> {/* corrected line */}
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
    </AuthContext.Provider>
  );
}

export default App;

