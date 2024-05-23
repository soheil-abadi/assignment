import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { SuccessMessage } from "./alerts/toast";
import { getHome, postLogin } from "./services";

const initialState = {
  user: "",
  password: "",
  loading: false,
  login:false,
  homeData:[]
};

export const enterLogin = createAsyncThunk(
  "auth/enterLogin",
  async (value, { dispatch }) => {
    console.log(value);
    try {
      const response = await postLogin(value);

      if (response.data) {
        localStorage.setItem("token" ,response.data.token)
       dispatch(setlogin(true))
        SuccessMessage("ورود موفق");
      } else {
        Swal.fire({
          icon: "error",
          title: "عدم دريافت اطلاعات",
        });
      }
    } catch (error) {
      // Swal.fire({
      //   icon: "error",
      //   title: "عدم دريافت اطلاعات",
      // });
    }
  }
);

export const homePage = createAsyncThunk(
  "auth/enterLogin",
  async (value, { dispatch }) => {
    console.log(value);
    try {
      const response = await getHome(value);
console.log(response);
      if (response.data) {
       dispatch(setlogin(true))
       dispatch(sethomeData(response.data.data))

       
       
        
      } else {
        Swal.fire({
          icon: "error",
          title: "عدم دريافت اطلاعات",
        });
      }
    } catch (error) {
      // Swal.fire({
      //   icon: "error",
      //   title: "عدم دريافت اطلاعات",
      // });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setPassword: (state, { payload }) => {
      state.password = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setlogin: (state, { payload }) => {
      state.login = payload;
    },
    sethomeData: (state, { payload }) => {
      state.homeData = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(enterLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(enterLogin.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(enterLogin.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setUser, setPassword, setLoading  ,setlogin ,sethomeData} = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectPassword = (state) => state.auth.password;
export const selectLoading = (state) => state.auth.loading;
export const selectLogin = (state) => state.auth.login;
export const selecthomeData = (state) => state.auth.homeData;



export default authSlice.reducer;
