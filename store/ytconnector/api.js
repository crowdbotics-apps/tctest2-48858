import axios from "axios"
import {
  CONNECTOR_YT_CONNECTOR_PASSWORD,
  CONNECTOR_YT_CONNECTOR_USERNAME
} from "react-native-dotenv"
const ytconnector = axios.create({
  baseURL: "https://devstringx.com",
  auth: {
    username: CONNECTOR_YT_CONNECTOR_PASSWORD,
    password: CONNECTOR_YT_CONNECTOR_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
