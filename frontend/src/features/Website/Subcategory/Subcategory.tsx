import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listSub } from "../../../api/subcategory";




export const loadSubCategory = createAsyncThunk(
    'product/listsubcategory', async (id) => {
       
            const { data } = await listSub();
            return data
       
    }
)


const initialState = {
  subcategory: [],
 
  // current: {}

};

const subcategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(loadSubCategory.fulfilled, (state, action) => {
      
      state.subcategory = action.payload;
    })
   
   
  },
})

export default subcategorySlice.reducer;
