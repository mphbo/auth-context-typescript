import React, { createContext, useContext } from "react";
import { IStandardProps, IToken } from "../App";

export interface IContext {
  token: string;
  setToken: (c: string) => void;
}

export const AuthContext = createContext<IContext>({
  token: "hello world",
  setToken: () => {},
});

export const useAuthContext = useContext(AuthContext);
