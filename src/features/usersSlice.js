import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const usersListAPI = createAsyncThunk("usersListAPI", async () => {
  return await fetch("https://664bad4c35bbda10987dc62e.mockapi.io/users").then(
    (response) => {
      return response.json();
    }
  );
});

export const usersSlice = createSlice({
  name: "todo",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(usersListAPI.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(usersListAPI.fulfilled, (state, action) => {
        state.pending = false;
        state.users = action.payload;
      })
      .addCase(usersListAPI.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default usersSlice.reducer;
