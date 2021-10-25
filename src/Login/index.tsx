// @flow
import React, { useContext } from "react";
import { Box, TextField } from "@mui/material";
import { AuthContext, useAuthContext } from "../context/auth-context";
type Props = {};
export function Login(props: Props) {
  const { setToken } = useAuthContext(AuthContext);

  return (
    <Box>
      <TextField variant="standard" label="Email" />
      <TextField variant="standard" label="Password" type="password" />
    </Box>
  );
}
