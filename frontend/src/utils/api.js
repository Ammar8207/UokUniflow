export const API_BASE = "http://localhost:3001/api";

export const apiRequest = async (endpoint, method = "GET", body = null, token = null) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  const data = await response.json();
  return { ok: response.ok, data };
};
