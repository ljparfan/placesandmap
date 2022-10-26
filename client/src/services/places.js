import http from "./http";

export function fetchPlacesBySearchKeyword(searchKeyword) {
  return http.get("/places", {
    params: {
      searchKeyword,
    },
  });
}

export function fetchSelectedPlaceByPlaceId(placeId) {
  return http.get(`/places/${placeId}`);
}
