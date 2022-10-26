import React, { useCallback, useMemo } from "react";
import { AutoComplete, Input } from "antd";
import { EnvironmentTwoTone } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash";
import {
  selectPlaces,
  selectRecentPlaces,
  selectSearchKeyword,
} from "../store/place/placeSelectors";
import {
  fetchPlacesAsync,
  fetchPlacesStart,
  fetchSelectedPlaceAsync,
} from "../store/place/placeActions";

const SearchBar = () => {
  const searchKeyword = useSelector(selectSearchKeyword);
  const recentPlaces = useSelector(selectRecentPlaces);
  const places = useSelector(selectPlaces);

  const dispatch = useDispatch();

  const debouncedHandler = useCallback(
    debounce((value) => dispatch(fetchPlacesAsync(value)), 500),
    []
  );
  const handleChange = (value) => {
    dispatch(fetchPlacesStart(value));
    debouncedHandler(value);
  };

  const options = useMemo(() => {
    const grouped = [];

    if (places.length > 0) {
      grouped.push({
        label: "Search Results",
        options: places.map((item) => ({
          label: item.description,
          value: item.description,
        })),
      });
    }

    if (recentPlaces.length > 0 && !searchKeyword) {
      grouped.push({
        label: "Recent Searches",
        options: recentPlaces.map((recentPlace) => ({
          label: recentPlace.description,
          value: recentPlace.description,
        })),
      });
    }

    return grouped;
  }, [places, recentPlaces, searchKeyword]);

  return (
    <div className="search">
      <AutoComplete
        defaultActiveFirstOption={false}
        value={searchKeyword}
        onChange={handleChange}
        popupClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{ width: "100%" }}
        onSelect={(item) => {
          const details = places.find(
            (searchResult) => searchResult.description === item
          );
          dispatch(
            fetchSelectedPlaceAsync({
              placeId: details.place_id,
              description: details.description,
            })
          );
        }}
        options={options}
      >
        <Input
          prefix={
            <EnvironmentTwoTone
              color="primary"
              className="site-form-item-icon"
            />
          }
          placeholder="Search for a place..."
          size="large"
        />
      </AutoComplete>
    </div>
  );
};

export default SearchBar;
