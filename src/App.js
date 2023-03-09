import { useState } from "react";
import LoginPage from "./components/LoginPage";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [authToken, setAuthToken] = useState(null)
  return (
    <div className="App">
      <AuthContext.Provider value={{authToken, setAuthToken}}>
        <LoginPage/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
