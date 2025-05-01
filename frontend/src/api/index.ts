const BASE_URL = import.meta.env.VITE_BASE_URL;

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetchOptions<TPayload = unknown> {
  endpoint: string;
  method?: HttpMethod;
  payload?: TPayload;
}

export async function apiRequest<TResponse, TPayload = undefined>({
  endpoint,
  method = "POST",
  payload,
}: FetchOptions<TPayload>): Promise<TResponse> {
  const url = `${BASE_URL}${endpoint}`;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: payload ? JSON.stringify(payload) : undefined,
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }

  const data = await response.json();
  return data as TResponse;
}
