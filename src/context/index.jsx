import React, { useReducer } from "react";
import { AuthReducer, initialState } from "./reducer";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined)
    throw new Error("useAuthState must be used within a AuthStateContext");
  return context;
}

export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined)
    throw new Error("useAuthState must be used within a AuthDispatchContext");
  return context;
}

export const AuthProvide = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState)
  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

