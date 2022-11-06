import React from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../store/authSlice";

export default function useIsAuthenticated() {
  const token = useSelector(getToken);

  const authenticated = token === "" ? false : true;
  return authenticated;
}
