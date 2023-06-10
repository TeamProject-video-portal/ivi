import { getDataUserSuccess } from "@/Redux/auth/actions";
import { AuthResponseType, RegistrationUserType } from "@/types/types";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import $api from "./configeAxios";

export const Login = (
  email: string,
  password: string
): Promise<AxiosResponse<AuthResponseType>> => {
  return $api.post("/login", { email, password });
};

export const Registration = (
  nickname: string,
  email: string,
  password: string
): Promise<AxiosResponse<RegistrationUserType>> => {
  return $api.post("/registration", {
    userDto: { email: email, password: password },
    profileDto: { nickname: nickname },
  });
};

export const getDataUser = (id: number): Promise<AxiosResponse<any>> => {
  return $api.get(`/full/${id}`);
};
