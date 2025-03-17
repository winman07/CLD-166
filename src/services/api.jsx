const API_URL = import.meta.env.VITE_API_GATEWAY_URL;

export const getData = async (id) => {
  const response = await fetch(`${API_URL}/items/${id}`);
  return response.json();
};

export const createData = async (data) => {
  const response = await fetch(`${API_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const updateData = async (id, data) => {
  const response = await fetch(`${API_URL}/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteData = async (id) => {
  await fetch(`${API_URL}/items/${id}`, { method: "DELETE" });
};
