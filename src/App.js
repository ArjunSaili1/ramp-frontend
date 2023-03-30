import React, { useState } from "react";
import AuthHandler from "./components/AuthHandler";
import LoginPage from "./components/LoginPage";
import GlobalStyles from '@mui/material/GlobalStyles';
import HomePage from "./components/HomePage";
import { createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeeAvaliableCandidates from "./components/SeeAvaliableCandidates.js";
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from "./components/LandingPage";

function App() {

  const [token, setToken] = useState(null)
  const [userKey, setUserKey] = useState(null)
  const [userType, setUserType] = useState(null)
  const [allSeekers, setAllSeekers] = useState([])
  const [userProfile, setUserProfile] = useState(null)
  let theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#a6192c',
      },
      secondary: {
        main: '#20A39E',
      },
    },
    typography: {
      fontFamily: [
        'Unbounded'
      ].join(','),
    }
  });
  theme = responsiveFontSizes(theme)

  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: { backgroundColor: "#e7ebef",
                margin: 0,
                padding: 0,
                boxSizing: "border-box"}
      }}
    />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage userProfile={userProfile}/>}/>
        <Route path="/login" element={<LoginPage userType={userType} setToken={setToken} token={token}/>}/>
        <Route exact path="/logged-in" element={<AuthHandler setUserProfile={setUserProfile} userType={userType} 
        token={token} setToken={setToken} setUserKey={setUserKey} userKey={userKey}/>}/>
        <Route exact path="/user-profile" element={<HomePage userProfile={userProfile} setUserProfile={setUserProfile} 
        userType={userType} token={token}/>}/>
        <Route exact path="/all-seekers" element={<SeeAvaliableCandidates allSeekers={allSeekers} setAllSeekers={setAllSeekers} userKey={userKey} userProfile={userProfile}/>}/>
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;
