import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addInjection, listInjection, readone, removeInjectionPark, updateInjectionPark } from "../../../api/injectionpark";



export const loadInjectionPark = createAsyncThunk(
    'injectionpark/listInjectionPark', async () => {
       
            const { data } = await listInjection();
            return data
       
    }
)
export const removeInjection = createAsyncThunk(
  'injection/removeInection', async (id:any) => {
     
          const { data } = await removeInjectionPark(id);
          return data
     
  }
)

export const addInjectionPark = createAsyncThunk(
  'injection/addInjection',
  async (injection:any) => {
    
    const {data} = await addInjection(injection);
    return data
  }
)
export const updateInjectionParks = createAsyncThunk(
  'injection/updtaInjection',
  async (params: any) => {
    const {id, dataInput:injection} = params
 
    
    const {data} = await updateInjectionPark(id, injection)
    
    return data;
  }
 
)
export const readoneInjection = createAsyncThunk(
  "injection/readone",
  async (id: any) => {
    
    const {data} = await readone(id);
   

    return data

  }
)




const initialState = {
    injectionpark: [],
   
    current: {}
  
  };
  
  const injectionparkSlice = createSlice({
    name: 'injectionpark',
    initialState,
    reducers: {
      // fill in primary logic here
    },
    extraReducers: (builder) => {
      builder.addCase(loadInjectionPark.fulfilled, (state, action) => {
        // console.log("CAT", action.payload)
        state.injectionpark = action.payload;
      }),
      builder.addCase(addInjectionPark.fulfilled, (state:any, action:any) => {
        state.injectionpark.push(action.payload)
      })
      builder.addCase(removeInjection.fulfilled, (state, action) => {
        state.injectionpark = state.injectionpark.filter((item:any) => item._id !== action.payload._id);
       
      })
      builder.addCase(readoneInjection.fulfilled, (state, action) => {
        console.log("actionsInjections", action.payload)
        state.current = action.payload;


      })
      builder.addCase(updateInjectionParks.fulfilled, (state, action) =>{

      })
     
      
  
  
     
     
    },
  })
  

   


export default injectionparkSlice.reducer;
