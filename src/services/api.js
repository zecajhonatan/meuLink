import axios from "axios";

export const key = "ee745311f954d6c139dd0c898771006252c3c041"

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    "Authorization": `Bearer ${key}`
  }
})

export default api