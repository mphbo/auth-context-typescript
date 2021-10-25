// @flow
import React, { useContext } from "react";
import { useAuthContext } from "../context/auth-context";
import { Login } from "../Login";
type Props = {};
export function Body(props: Props) {
  const { token } = useAuthContext<string>();
  return (
    <div>
      <h1 style={{ color: "white" }}>{token}</h1>
      <Login />
    </div>
  );
}
