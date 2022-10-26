import { createReducer } from "@reduxjs/toolkit";
import {
  addRecentPlace,
  fetchPlacesFailure,
  fetchPlacesStart,
  fetchPlacesSuccess,
  fetchSelectedPlaceFailure,
  fetchSelectedPlaceStart,
  fetchSelectedPlaceSuccess,
} from "./placeActions";

const initialState = {
  searchKeyword: "",
  recentPlaces: [],
  places: [],
  placesError: null,
  selectedPlace: null,
  selectedPlaceError: null,
};

const searchReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addRecentPlace, (state, action) => {
      state.recentPlaces.push(action.payload);
    })
    .addCase(fetchPlacesStart, (state, action) => {
      state.searchKeyword = action.payload;
      state.placesError = null;
      state.places = [];
    })
    .addCase(fetchPlacesSuccess, (state, action) => {
      state.places = action.payload;
    })
    .addCase(fetchPlacesFailure, (state, action) => {
      state.places = [];
      state.placesError = action.payload;
    })
    .addCase(fetchSelectedPlaceStart, (state, action) => {
      state.places = [];
    })
    .addCase(fetchSelectedPlaceSuccess, (state, action) => {
      state.selectedPlace = action.payload;
    })
    .addCase(fetchSelectedPlaceFailure, (state, action) => {
      state.selectedPlaceError = action.payload;
    });
});

export default searchReducer;
