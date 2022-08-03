import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrUpdateUser, currentUser } from "../../../api/auth";
import { list } from "../../../api/category";
import { getproductsCate, listproduct } from "../../../api/product";
import { authenticated, removeAuthencicate } from "../../../untils/localStoge";
import { useSelector } from "react-redux";

// const carts = useSelector((state:any) => state.)


export const signIn = createAsyncThunk(
  'auth/currentUser',
  async (Datauser: any) => {
    const { data } = await currentUser(Datauser)
    console.log("CRRENT USER: ", data)
    return data
  }
)
export const signUp = createAsyncThunk(
  'auth/createOrUpdateUser',
  async (Datauser: any) => {
    const { data } = await createOrUpdateUser(Datauser)
    return data
  }
)



const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    userInfo: null,
    currentUser: null,
    isAuthenticated: false,
    isLoading: false,
    errorMessage: '',
    mycart: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems") as any) : [],

  },
  reducers: {
    logout: (state: any, action: any) => {
      state.userInfo = null
      state.currentUser = null
      state.isAuthenticated = false
      state.isLoading = false
      state.errorMessage = ''
      state.mycart = [] 
      localStorage.removeItem("cartItems")


    },
    loadUser: (state: any, action: any) => {
      state.userInfo = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state, action) => {
      state.isLoading = false;
      state.errorMessage = '';
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.errorMessage = '';
    });

    builder.addCase(signIn.rejected, (state, action: any) => {

      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });

    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = false;
      state.errorMessage = '';
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.userInfo = action.payload.user;
      state.errorMessage = '';
    });

    builder.addCase(signUp.rejected, (state, action: any) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
})
export const { logout, loadUser } = authSlice.actions
export default authSlice.reducer;
