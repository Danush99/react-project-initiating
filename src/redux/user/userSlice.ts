import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type User = {
  userName: string;
  role: string;
  id: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, () => {
        console.log("userLogin.pending");
      })
      .addCase(
        userLogin.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.user = action.payload;
        }
      ).addCase(userLogout.pending, () => {
        console.log("userLogout.pending");
      })
      .addCase(
        userLogout.fulfilled,
        (state) => {
          state.user = null;
        }
      )
  },
});

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (loginCredentials: {email: string, password: string}) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('email: ',loginCredentials.email)
    console.log('password: ',loginCredentials.password)
    const user : User = {
      userName: 'danusha',
      role: 'ADMIN',
      id: 'sadasdasd',
    }
    return user;
  }
);

export const userLogout = createAsyncThunk(
  "user/userLogout",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
);

export const { addUser, removeUser } = counterSlice.actions;

export default counterSlice.reducer;