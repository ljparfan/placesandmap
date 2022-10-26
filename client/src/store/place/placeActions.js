import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as placesService from "../../services/places";

export const addRecentPlace = createAction("ADD_RECENT_PLACE");
export const fetchPlacesStart = createAction("FETCH_PLACES_START");
export const fetchPlacesSuccess = createAction("FETCH_PLACES_SUCCESS");
export const fetchPlacesFailure = createAction("FETCH_PLACES_FAILURE");

export const fetchSelectedPlaceStart = createAction(
  "FETCH_SELECTED_PLACE_START"
);
export const fetchSelectedPlaceSuccess = createAction(
  "FETCH_SELECTED_PLACE_SUCCESS"
);
export const fetchSelectedPlaceFailure = createAction(
  "FETCH_SELECED_PLACE_FAILURE"
);

export const fetchPlacesAsync = createAsyncThunk(
  "FETCH_PLACES_ASYNC",
  async (searchKeyword, { dispatch }) => {
    dispatch(fetchPlacesStart(searchKeyword));
    try {
      const { data } = await placesService.fetchPlacesBySearchKeyword(
        searchKeyword
      );

      dispatch(fetchPlacesSuccess(data.predictions));
    } catch (error) {
      dispatch(fetchPlacesFailure(error));
    }
  }
);

export const fetchSelectedPlaceAsync = createAsyncThunk(
  "FETCH_SELECTED_PLACE_ASYNC",
  async (details, { dispatch }) => {
    dispatch(fetchSelectedPlaceStart());
    dispatch(addRecentPlace(details));
    try {
      const { data } = await placesService.fetchSelectedPlaceByPlaceId(
        details.placeId
      );
      dispatch(fetchSelectedPlaceSuccess(data));
    } catch (error) {
      dispatch(fetchSelectedPlaceFailure(error));
    }
  }
);
