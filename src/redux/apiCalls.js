import { publicRequest } from "../requestMethods";
import { loginStart, loginFailure, loginSuccess } from "./userSlice";

export const login = async (dispatch, userCredentials) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", userCredentials);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
