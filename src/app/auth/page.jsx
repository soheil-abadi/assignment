'use client';
import Layout from "../Layout/page"
import Dashboard from "../Home/page"; 
import { useSelector } from "react-redux";
import { selectLogin } from "../authSlice";


const auth = () => {
  const login=useSelector(selectLogin)

  console.log(login);
  
  return (<>
  
{login? <Dashboard/> : <Layout/> }
  



     
 
  </> );
}
 
export default auth;