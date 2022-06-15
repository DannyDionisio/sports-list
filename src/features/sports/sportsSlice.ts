import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Sport } from "../../models/models";
import { api } from "../../services/api";

/* TYPES */
interface SportsState {
  list: Sport[];
  sport: Sport | null;
  favorites: Sport["id"][];
  loading: boolean;
}

/*ACTIONS*/
export const getSports = createAsyncThunk("GET_SPORTS", async () => {
  const response = await api.get("sports");
  return response.data.data as Sport[];
});

export const getSport = createAsyncThunk("GET_SPORT", async (id: string) => {
  const response = await api.get(`sports/${id}`);
  return response.data.data as Sport;
});

/*REDUCER*/
const initialState: SportsState = {
  list: [],
  sport: null,
  favorites: [],
  loading: false,
};

const sportsSlice = createSlice({
  name: "sports",
  initialState,
  reducers: {
    likeSport: (state, action) => {
      state.favorites = state.favorites.concat(action.payload.id);
    },
    unlikeSport: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSports.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSports.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(getSport.fulfilled, (state, action) => {
      state.loading = false;
      state.sport = action.payload;
    });
  },
});

export const { likeSport, unlikeSport } = sportsSlice.actions;
export default sportsSlice.reducer;
