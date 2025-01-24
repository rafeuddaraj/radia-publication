import { PUBLIC_BASE_API_URL } from "@/config";
type LoginData = {
  email: string;
  password: string;
};

type ApiResponse = {
  error: unknown;
  code: number;
  success: boolean;
  message: string;
  data?: Record<string, unknown>;
};

// Endpoint

const AUTH_END_POINT = `${PUBLIC_BASE_API_URL}/auth`;

export const login = async (
  data: LoginData,
  options: { headers?: Record<string, string> } = {}
): Promise<ApiResponse | null> => {
  if (!PUBLIC_BASE_API_URL) {
    return null;
  }

  try {
    const res = await fetch(`${AUTH_END_POINT}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error(`Login request failed with status: ${res.status}`);
      return {
        error: null,
        code: res.status,
        success: false,
        message: `Request failed with status code ${res.status}`,
      };
    }

    const json: ApiResponse = await res.json();
    return json;
  } catch (error) {
    console.error("An error occurred during the login request:", error);
    return null;
  }
};

type RegisterData = LoginData & {
  address: string;
  agreement: boolean;
  confirmPassword?: string;
  department?: "64-ct" | "67-et" | "68-elt" | "70-mt" | "85-cst";
  discordUsername: string;
  gender?: "male" | "female";
  institute: string;
  name: string;
  phone: string;
  registration: string | undefined;
  roll: string;
  year: string;
};

export const register = async (data: RegisterData): Promise<ApiResponse> => {
  console.log({ data, AUTH_END_POINT });

  const res = await fetch(`${AUTH_END_POINT}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
