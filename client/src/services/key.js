import http from "./http";

export function getApiKey() {
  return http.get("/key");
}
