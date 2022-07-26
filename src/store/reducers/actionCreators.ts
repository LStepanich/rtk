import { createAsyncThunk, isAsyncThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserI } from "../../models/UserI";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<UserI[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     }
//     catch (e) {
//         dispatch(userSlice.actions.userFetchingError(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<UserI[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        }
        catch (e) {
            return thunkApi.rejectWithValue('Не Не Не')
        }
    })