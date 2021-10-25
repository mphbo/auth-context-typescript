import React, { useState } from "react";
import logo from "./logo.svg";
import { NavBar } from "./NavBar";
import { Body } from "./Body";
import { Box } from "@mui/material";
import { AuthContext } from "./context/auth-context";
import "./App.css";

// export interface IToken {
//   email: string | null;
//   password: string | null;
// }

// export interface IStandardProps {
//   token: IToken;
//   setToken: React.Dispatch<React.SetStateAction<IToken>>;
// }

function App() {
  const [token, setToken] = useState<string>("hello");

  return (
    <Box className="App">
      <AuthContext.Provider value={{ token, setToken }}>
        <NavBar />
        <Body />
      </AuthContext.Provider>
    </Box>
  );
}

export default App;
