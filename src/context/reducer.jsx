import React, { useReducer } from "react";

const accessToken = localStorage.getItem("access_token");

export const initialState = {
  token: accessToken
}

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...initialState,
        token: action.payload
      }
    case "ERROR":
      return {
        ...initialState,
        token: action.payload
      }
    case "LOGOUT":
      return {
        ...initialState,
        token: action.payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
