import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getInjectionPacks } from "../../../api/injectionpark";
import { create, listResgister, resgiterdetails } from "../../../api/register";


export const addRegisterVaccine = createAsyncThunk(
    "injection/addinjec",
    async (params: any) => {
        //   console.log("idnhan", id)
        const { data } = await getInjectionPacks(params);
        console.log("data", data);
        return data;
    }
);
export const resgiterVaccine = createAsyncThunk(

    "resgiter/addregieter",
    async (items: any) => {
        const { data } = await create(items)

        return data;

    }
)
// export const historyDetails = createAsyncThunk(

//     "resgiter/details",
//     async (id: any) => {
//         const { data } = await resgiterdetails(id)

//         return data;

//     }
// )
export const listHistoryDetails = createAsyncThunk(

    "resgiter/details",
    async (id:any) => {
        const { data } = await listResgister(id)

        return data;

    }
)

const initialState = {
    value: [],
    injection: [],
    resgiter: {},

    //   // cateogry: [],
    current: {},
    //   paging: {},
    //   refProducts: [],
    //   productallAdmin: [],
};

const RegisterSlide = createSlice({
    name: "register",
    initialState,
    reducers: {
        // fill in primary logic here
    },
    extraReducers: (builder) => {
        builder.addCase(addRegisterVaccine.fulfilled, (state, action) => {
            state.injection = action.payload;
        });
        builder.addCase(resgiterVaccine.fulfilled, (state, action) => {
            state.value = action.payload;
        });
        builder.addCase(listHistoryDetails.fulfilled, (state, action) => {
            state.resgiter = action.payload;
        })
    },
});

export default RegisterSlide.reducer;
