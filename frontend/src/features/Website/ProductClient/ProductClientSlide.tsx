import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "history";
import { list } from "../../../api/category";
import { create, getAll, getproductsCate, getproductsSubcate, listproduct, read, remove, searchProduct, updateproduct } from "../../../api/product";
// import { getAll, add, get } from '../../api/productApi';
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (params:any) => {
    // console.log("params2223", params)
    const {data: {data, paging}, } = await listproduct(params);
    // console.log("dataproduct", data);
    // console.log("paging", paging);
    return {data, paging};
  }
);
export const loadCategory = createAsyncThunk(
  "product/listCategory",
  async () => {
    const { data } = await list();
    return data;
  }
);
export const getProductinCategory = createAsyncThunk(
  "category/listproduct",
  async (id: any) => {
    console.log("idcategory", id);
    const { data } = await getproductsCate(id);
    console.log("datainputcate", data);
    return data;
  }
);
export const readone = createAsyncThunk(
  "product/productDetails",
  async (id: any) => {
    const { data } = await read(id);
    console.log("datainputcate", data);
    return data;
  }
);
export const searchSanpham = createAsyncThunk(
  "product/searchproduct",
  async (params:any) => {
    const { data } = await searchProduct(params);
   
    return data;
  }
)
export const removeproduct = createAsyncThunk(
  "product/removeproduct",
  async (id:any) => {
    console.log("idremove", id);

    const { data } = await remove(id);
    console.log('datarm', data);
   
    return data;
  }

)
export const searchProductinSubcategory = createAsyncThunk(
  "product/searchsub",
  async (id:any) => {
    console.log("iddub", id);
    const { data } = await getproductsSubcate(id);
   
    return data;
  }

)
export const getAllproducts = createAsyncThunk(
  "product/getAll",
  async () => {
    const {data} = await getAll();
    return data;
  }

)
export const addProduct = createAsyncThunk(
  "product/addProdct",

  async (params:any) => {
    const {iduser, dataInput:product, token} = params

    const {data} = await create(iduser, product, token);
    return data;
  }

)

export const editProduct = createAsyncThunk(
  'product/eidtProduct',
  async (params:any) => {

    const {id, dataInput:product} = params
    console.log("params", params)

  
   
    const {data} = await updateproduct(id, product)
    console.log("DATA UPdateproduct", data)
    return data;
  }
)

// export const addProduct = createAsyncThunk(
//     'product/addProduct', async (product, { rejectWithValue }) => {
//         try {
//             const { data } = await add(product);
//             return data
//         } catch (error) {
//             return rejectWithValue(error.response.data)
//         }
//     }
// )

// interface ProductsState {
//   products: []

// }

// type initialState = {
//   products: [],

// }
const initialState = {
  value: [],
  // cateogry: [],
  current: {},
  paging: {},
  refProducts: [],
  productallAdmin: [],

  

};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.value = action.payload.data;
      state.paging = action.payload.paging;
      // state.value = action.payload;
      console.log("actions", action)
      // state.paging = action.payload;
    }),
      builder.addCase(getProductinCategory.fulfilled, (state, action) => {
        state.value = action.payload;
        
      }),
     
      builder.addCase(readone.fulfilled, (state, action) => {
        console.log("reducersercuren", action.payload)
        console.log("actionssssss", action)
        state.current = action.payload;
      }),
      builder.addCase(searchSanpham.fulfilled, (state, action) => {
      
        state.value = action.payload.data;
      });
      
      builder.addCase(removeproduct.fulfilled, (state, action) => {
        console.log("actionpayload", action.payload)
        state.productallAdmin = state.productallAdmin.filter((item:any) => item._id !== action.payload._id);

      });
      builder.addCase(searchProductinSubcategory.fulfilled, (state, action) => {
        
        state.value = action.payload;
      }),
      builder.addCase(getAllproducts.fulfilled, (state, action) => {
        state.productallAdmin = action.payload

      }),
      builder.addCase(addProduct.fulfilled, (state:any, action:any) => {
       
        state.value.push(action.payload)
      })

  
  },
});

export default productSlice.reducer;
