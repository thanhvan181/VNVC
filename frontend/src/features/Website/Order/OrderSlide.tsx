import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, getListOrderbyId, orderdetails, searchOrderinPhone } from "../../../api/order";





export const createOrders= createAsyncThunk(
    'order/createOrder', 
    async (newOrder:any) => {
      console.log("newOrder", newOrder)
     
      // const {id, dataInput:newOrder} = params
      // console.log("params", params)
  
    
     
      const {data} = await create( newOrder)
      console.log("DATA UPdateproduct", data)
      return data;
    }
)
export const getOrderList= createAsyncThunk(
  'order/listOrder', 
  async (id:any) => {
    console.log("newOrder", id)
   
    // const {id, dataInput:newOrder} = params
    // console.log("params", params)

  
   
    const {data} = await getListOrderbyId(id)
    console.log("DATA listOrder", data)
    return data;
  }
)
export const getOrderDetails= createAsyncThunk(
  'order/orderDetails', 
  async (id:any) => {
    console.log("idorderdetaisl", id)
   
    // const {id, dataInput:newOrder} = params
    // console.log("params", params)

  
   
    const {data} = await orderdetails(id)
    console.log("DATA listOrder", data)
    return data;
  }
)
export const showOrderbyPhone= createAsyncThunk(
  'order/orderPhone', 
  async (params:any) => {
    // console.log("idorderdetaisl", id)
   
    
  
   
    const {data} = await searchOrderinPhone(params)
    console.log("DATA listOrder", data)
    return data;
  }
)
const initialState = {
  order: [],
 
  current:{},
  orderdetail: {}

};

const OrderSlide = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(createOrders.fulfilled, (state, action) => {
      
      state.order = action.payload;
    }),
    builder.addCase(getOrderList.fulfilled, (state, action) => {
      state.current = action.payload
    }),
    builder.addCase(getOrderDetails.fulfilled, (state, action) => {
      state.orderdetail = action.payload
    }),
    builder.addCase(showOrderbyPhone.fulfilled, (state, action) => {
      state.current = action.payload
    })
    // builder.addCase()

   
   
  },
})

export default OrderSlide.reducer;
