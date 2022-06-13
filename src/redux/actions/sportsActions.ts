import { Dispatch } from "redux";
import { api } from "../../services/api";
import { Sport } from "../reducers/sportsReducer";

export const getSports = () => {
  return (useDispatch: Dispatch) => {
    api.get("sports").then((response) => {
      useDispatch({
        type: "GET_SPORTS",
        payload: response.data.data,
      });
    });
  };
};

export const getSportById = (id: string) => {
  return (useDispatch: Dispatch) => {
    api.get(`sports/${id}`).then((response) => {
      useDispatch({
        type: "GET_SPORT",
        payload: response.data.data,
      });
    });
  };
};

export const likeSport = (sport: Sport) => {
  return (useDispatch: Dispatch) => {
    useDispatch({
      type: "LIKE_SPORT",
      payload: sport,
    });
  };
};

export const unlikeSport = (sport: Sport) => {
  return (useDispatch: Dispatch) => {
    useDispatch({
      type: "UNLIKE_SPORT",
      payload: sport,
    });
  };
};
