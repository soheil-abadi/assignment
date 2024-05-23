'use client';

import { IconButton, Input, InputAdornment, InputLabel, ThemeProvider, createTheme } from '@mui/material';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setPassword, selectUser, selectPassword, enterLogin, selectLogin, setlogin } from '../authSlice';
import { useEffect } from 'react';

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "iranSans, Arial, sans-serif", // Change the font family as desired
  },
});

const Layout = () => {
  const user2 = useSelector(selectUser);
  const password = useSelector(selectPassword);
  const dispatch = useDispatch();
  const router = useRouter();

  




  const handleClick = () => {
    // router.push('/component/auth');

    const value={
      email: "eve.holt@reqres.in",
      password: "cityslicka"
  }

  dispatch(enterLogin(value))
  };

  const login=useSelector(selectLogin)
  const token=localStorage.getItem("token")
  if (token) {
       dispatch(setlogin(true))

    
  } else {
    dispatch(setlogin(false))

    
  }


  return (
    <ThemeProvider theme={theme}>
      <div
        id='root'
        dir="rtl"
        className="h-auto flex justify-center items-center bg-gray-300"
        style={{ height: "100vh" }}
      >
        <div className="h-full flex justify-center items-center">
          <form
            action="#"
            method="post"
            className="flex justify-center items-center flex-col gap-3 bg-slate-400 text-white p-6 rounded-md"
            onSubmit={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            <InputLabel
              htmlFor="user-name"
              className="mt-4"
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              نام کاربری
            </InputLabel>
            <Input
              onChange={(e)=>{dispatch(setUser(e.target.value))}}
              id="user-name"
              label="username"
              variant="standard"
              placeholder="لطفا نام کاربری خود را وارد نمایید"
              className="w-100 p-2 rounded-3"
              autoFocus
            />

            <InputLabel
              htmlFor="standard-adornment-password"
              className="mt-4"
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              رمز عبور
            </InputLabel>
            <Input
              required
              label="password"
              variant="outline"
              placeholder="رمز عبور خود را وارد نمایید"
              className="w-100 p-2 rounded-3"
              id="standard-adornment-password"
              type="password"
              onChange={(e)=>{dispatch(setPassword(e.target.value))}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    {/* Add visibility toggle logic here if needed */}
                  </IconButton>
                </InputAdornment>
              }
            />

            <Button
              htmlType="submit"
              type="primary"
              className="w-full mt-2"
              size="large"
            >
              ورود
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Layout;
