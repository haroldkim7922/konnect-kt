import axios from "axios";
axios.default.withCredentials = true;

export function postVenue(payload) {
  return axios.post("/venue", payload);
}
