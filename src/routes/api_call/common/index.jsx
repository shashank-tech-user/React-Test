import axios from "axios"

export const post = async (url, data) => {
  const access_token = localStorage.getItem("access_token");
  const info = await axios.post(url, data, {
    headers: {
      token: access_token
    }
  });
  return {
    status: info.status,
    statusText: info.statusText,
    access_token: info.data.access_token,
    data: info.data.data,
    error: info.data.error,
    message: info.data.message
  }
}