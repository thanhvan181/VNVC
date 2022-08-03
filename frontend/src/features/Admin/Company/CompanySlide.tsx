import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCompany,
  listCompany,
  readCompanyincity,
  readone,
 
  removecompanycity,
  updatecompanycity,
} from "../../../api/company";

export const loadCompany = createAsyncThunk("company/listCompany", async () => {
  const { data } = await listCompany();
  return data;
});
export const addCompanyss = createAsyncThunk(
  "company/addCompany",
  async (company: any) => {
    const { data } = await createCompany(company);
    return data;
  }
);
export const removeCompany = createAsyncThunk(
  "company/removeCompany",
  async (id: any) => {
    console.log("idcdd", id);

    const { data } = await removecompanycity(id);
    return data;
  }
);
export const readoneCompa= createAsyncThunk("company/readone", async (id: any) => {
  console.log("idcdd", id);

  const { data } = await readone(id);
  console.log("data", data)
  return data;
});
export const EditCompany = createAsyncThunk(
    'company/editCompany',
    async (params:any) => {
  
      const {id, dataInput:product} = params
      console.log("params", params)
  
    
     
      const {data} = await updatecompanycity(id, product)
      console.log("DATA UPdateproduct", data)
      return data;
    }
  )

const initialState = {
  company: [],

  current: {},
};

const CompanySlide = createSlice({
  name: "company",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(loadCompany.fulfilled, (state, action) => {
      state.company = action.payload;
    }),
      builder.addCase(addCompanyss.fulfilled, (state: any, action: any) => {
        state.company.push(action.payload);
      }),
      builder.addCase(removeCompany.fulfilled, (state: any, action: any) => {
        state.company = state.company.filter(
          (item: any) => item._id !== action.payload._id
        );
      });
    builder.addCase(readoneCompa.fulfilled, (state: any, action: any) => {
      console.log('payload', action.payload)
      state.current = action.payload;
    });
  },
});

export default CompanySlide.reducer;
