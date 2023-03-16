import React, { useState } from "react";
import AuthHandler from "./components/AuthHandler";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeeAvaliableCandidates from "./components/SeeAvaliableCandidates.js";
import PickUserType from "./components/PickUserType";

function App() {

  const [token, setToken] = useState(null)
  const [userKey, setUserKey] = useState(null)
  const [userType, setUserType] = useState(null)
  const [userProfile, setUserProfile] = useState(null)

  return (  
  <Router>
    <Routes>
      <Route path="/" element={<PickUserType userType={userType} setUserType={setUserType} token={token}/>}/>
      <Route path="/login" element={<LoginPage userType={userType} setToken={setToken} token={token}/>}/>
      <Route exact path="/logged-in" element={<AuthHandler setUserProfile={setUserProfile} userType={userType} 
      token={token} setToken={setToken} setUserKey={setUserKey} userKey={userKey}/>}/>
      <Route exact path="/user-profile" element={<HomePage userProfile={userProfile} setUserProfile={setUserProfile} 
      userType={userType} token={token}/>}/>
      <Route exact path="/all-seekers" element={<SeeAvaliableCandidates userKey={userKey} userProfile={userProfile}/>}/>
    </Routes>
  </Router>
  );
}

export default App;
