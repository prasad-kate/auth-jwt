import { apiRequest } from "../api";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  userId: string;
}

export const useLogin = () => {
  const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await apiRequest<LoginResponse, LoginPayload>({
      endpoint: "/auth/login",
      payload,
    });

    return response;
  };

  return { login };
};
