import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserI } from "../../models/UserI"
import { fetchUsers } from "./actionCreators";

interface UserState {
    users: UserI[]
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: "",
    count: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state: UserState) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state: UserState, action: PayloadAction<UserI[]>) {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        userFetchingError(state: UserState, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state: UserState, action: PayloadAction<UserI[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state: UserState) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state: UserState, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
}
)

export default userSlice.reducer;