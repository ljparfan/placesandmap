import { createSelector } from "@reduxjs/toolkit";

const selectPlace = (state) => state.place;

export const selectPlaces = createSelector(
  selectPlace,
  (state) => state.places
);

export const selectSearchKeyword = createSelector(
  selectPlace,
  (state) => state.searchKeyword
);

export const selectRecentPlaces = createSelector(
  selectPlace,
  (state) => state.recentPlaces
);

export const selectSelectedPlace = createSelector(
  selectPlace,
  (state) => state.selectedPlace
);
