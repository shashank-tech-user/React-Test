// Context/actions.js

import { post } from "../routes/api_call/common";
import { LOGIN_API } from "../routes/api_route";

export async function loginUser(dispatch, loginPayload) {
  try {
    let response = await post(LOGIN_API, loginPayload);
    console.log("response => ", response);
    if (!response.error) {
      dispatch({ type: 'LOGIN', payload: response.access_token });
      localStorage.setItem('access_token', response.access_token);
      return response;
    }
    dispatch({ type: 'ERROR', payload: null });
    return;
  } catch (error) {
    dispatch({ type: 'ERROR', payload: null });
  }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT', payload: null });
  localStorage.removeItem('access_token');
}