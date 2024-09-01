import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const instance = Axios.create();
const axios = setupCache(instance, { debug: console.log });
const backend_Url = "https://fpl-analysis.onrender.com/";
export async function callEP() {
  let cacheInstance = {};
  return axios
    .get(backend_Url+"/data", {
      cache: cacheInstance,
      id: "fetch-data",
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error calling api for data.", err);
    });
}

export function fetchTeam(teamId: string) {
  return axios.get(backend_Url+"/fetchTeam", {
    params: {
      team_id: teamId,
    },
  });
}

//@ts-ignore
export const data = callEP;
