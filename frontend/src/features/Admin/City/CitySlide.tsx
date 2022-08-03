import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listCity } from "../../../api/city";





export const loadCity = createAsyncThunk(
    'city/listCity', async (id) => {
       
            const { data } = await listCity();
            return data
       
    }
)


const initialState = {
  city: [],
 
  current: {}

};

const citySlide = createSlice({
  name: 'city',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(loadCity.fulfilled, (state, action) => {
      
      state.city = action.payload;
    })
   
   
  },
})

export default citySlide.reducer;
