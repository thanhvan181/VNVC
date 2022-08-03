import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "history";
import { create, getCategory, list, read, remove, updatecate } from "../../../api/category";
// const [form] = Form.useForm();


export const loadCategory = createAsyncThunk(
    'product/listCategory', async (id) => {
       
            const { data } = await list();
            return data
       
    }
)
export const showcategory = createAsyncThunk(
  'category/allcategory',
 async () => {
   const {data} = await getCategory();
   return data;
 }
)

export const removeCategory = createAsyncThunk(
  'category/removeCategory', async (id:any) => {
     
          const { data } = await remove(id);
          return data
     
  }
)
export const addCategory = createAsyncThunk(
  'category/addcategory', 

  async (params:any) => {
    const { userid,  dataInput:category, token} = params
    console.log("params", params)

    const {data} = await create(userid, category, token);
    return data;
  }
 
)
export const editCategory = createAsyncThunk(
  'eidtCategory',
  async (params:any) => {
    const {id, dataInput:category} = params
    console.log("params", params)
    console.log("ID: ", id)
    console.log("Payload: ", category)
    const {data} = await updatecate(id, category)
    console.log("DATA UPdate", data)
    return data;
  }
)
export const readonecategory = createAsyncThunk(
  "category/readone",
  async (id: any) => {
    const {data} = await read(id);
    // form.setFieldsValue(data);

    return data

  }
)

const initialState = {
  category: [],
 
  current: {},
  allcategory: []

};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(loadCategory.fulfilled, (state, action) => {
      console.log("CAT", action.payload)
      state.category = action.payload;
    }),
    builder.addCase(removeCategory.fulfilled, (state, action) =>  {
      // state.productallAdmin = state.productallAdmin.filter((item:any) => item._id !== action.payload._id);

      state.category = state.category.filter((item:any) => item._id !== action.payload._id )
    }),
    builder.addCase(addCategory.fulfilled, (state:any,action:any) => {
      state.category.push(action.payload)

    })
    builder.addCase(readonecategory.fulfilled, (state,action) => {
      state.current = action.payload;


    }),
  builder.addCase(editCategory.fulfilled, (state, action) => {
    // state.category = action.payload;

  }),
  builder.addCase(showcategory.fulfilled, (state, action) =>{
    state.allcategory = action.payload
  })



   
   
  },
})

export default categorySlice.reducer;
