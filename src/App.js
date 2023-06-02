import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Courses from "./Components/Courses";
import Spinner from "./Components/Spinner";
import {filterData , apiUrl} from "./data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [Load , setLoad] = useState(false);
  const [apiData, setApiData] =  useState([]);
  const [Criteria, setCriteria] =  useState('All');
  

  async function fetchCourses(){
    try{
      const apicall = await fetch(apiUrl);
      const courseJson = await apicall.json();
      setApiData(courseJson);
      setLoad(true);
    }
    catch(error){
      toast.error('Check your internet connection');
      return ;
    }
  }
  useEffect(
    ()=>{
      fetchCourses();
  },[])


  return (
    <div className=" flex w-full flex-col flex-wrap bg-bgDark2 text-center min-h-screen " >
      
      <Navbar/>

      <Filter filterData = {filterData} setCriteria = {setCriteria}  Criteria={Criteria}></Filter>

      <div className="flex justify-center text-center mx-auto" >
          {
            Load ? (<Courses apiData = {apiData} Criteria={Criteria} ></Courses>):(<Spinner></Spinner>)
          }
      </div>
      <ToastContainer/>      
    </div>
  );
};

export default App;
