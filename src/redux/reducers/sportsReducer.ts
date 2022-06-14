import { PayloadAction } from "@reduxjs/toolkit";

export interface Sport {
  id: string;
  attributes: {
    icon: string;
    name: string;
    description: string;
  };
  relationships: {
    images: {
      data: {
        url: string;
      }[];
    };
    tags: {
      data: Array<string>;
    };
  };
}

interface SportsState {
  list: Sport[];
  sport: Sport | null;
  favorites: Sport["id"][];
  loading: boolean;
}

const initialState: SportsState = {
  list: [],
  sport: null,
  favorites: [],
  loading: false,
};

type GetSportsPayload = PayloadAction<Sport[], "GET_SPORTS">;
type GetSportByIdPayload = PayloadAction<Sport, "GET_SPORT">;
type LikeSportByIdPayload = PayloadAction<Sport, "LIKE_SPORT">;
type UnLikeSportByIdPayload = PayloadAction<Sport, "UNLIKE_SPORT">;
type LoadingPayload = PayloadAction<Sport, "LOADING">;
type SportsPayload =
  | GetSportsPayload
  | GetSportByIdPayload
  | LikeSportByIdPayload
  | UnLikeSportByIdPayload
  | LoadingPayload;

export const sportsReducer = (state = initialState, action: SportsPayload) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_SPORTS":
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case "GET_SPORT":
      return {
        ...state,
        loading: false,
        sport: action.payload,
      };
    case "LIKE_SPORT":
      return {
        ...state,
        favorites: state.favorites.concat(action.payload.id),
      };
    case "UNLIKE_SPORT":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
