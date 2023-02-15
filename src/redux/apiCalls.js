import { publicRequest, userRequest } from "../requestMethods";
import { start, failure, loginSuccess, logoutSuccess } from "./userSlice";

export const login = async (dispatch, userCredentials, navigate) => {
  dispatch(start());
  try {
    const res = await publicRequest.post("/auth/login", userCredentials);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispatch(failure());
  }
};

export const logout = async (dispatch, navigate) => {
  dispatch(start());
  try {
    const res = await userRequest.post("/auth/logout");
    dispatch(logoutSuccess());
    navigate("/");
  } catch (error) {
    dispatch(failure());
  }
};
