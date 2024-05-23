'use client';

import { Button, Modal, Table } from "antd";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { homePage, selectHomeData, selecthomeData, setlogin } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getHome, postName } from "../services";
import { TextField } from "@mui/material";

const Dashboard = () => {
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(homePage())
  
},[dispatch])
const handleLogOut=()=>{
  localStorage.removeItem("token")
      
      dispatch(setlogin(false)) 
     

}
const data=useSelector(selecthomeData)
const [modal,setModal]=useState(false)
const [name,setName]=useState(false)
const [Job,setJob]=useState(false)



const handleOk = () => {
  value=  {
    name: name,
    job: Job
}
setModal(false);

  try {
    postName()
    
  } catch (error) {
    console.log("error");
  }


};

const handleCancel = () => {
  setModal(false);
};

  const columns = [
    {
      title: 'Name',
      dataIndex: 'first_name', // Adjust this to match your API data structure
      key: 'first_name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name', // Adjust this to match your API data structure
      key: 'last_name',
    },
    {
      title: 'email',
      dataIndex: 'email', // Adjust this to match your API data structure
      key: 'email',
    },
    {
      title: 'email',
      dataIndex: 'email', // Adjust this to match your API data structure
      key: 'email',
      render: (record) =><><Button onClick={()=>setModal(true)}>edit</Button></>,
    }
  ];
 

  return (<>
    <div className="flex justify-center items-center h-svh w-full">
      <Table className="w-1/2" columns={columns} dataSource={data} rowKey="id" />

      <Button onClick={()=>{handleLogOut() }      
} className="bg-red-700 text-white"> exit</Button>
    </div>

<Modal title=" edit Name" open={modal} onOk={()=>handleOk()} onCancel={handleCancel}>
  <div className="flex justify-center items-center gap-3 flex-col">
<TextField fullWidth label="name" id="fullWidth" onChange={(e)=>setName(e.target.value)} />
<TextField fullWidth label="job" id="fullWidth" onChange={(e)=>setJob(e.target.value)} />
</div>
</Modal>
</>
  );
  
}

export default Dashboard;
