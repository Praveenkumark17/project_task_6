import React from "react";
import './dashboard.css';
import { useNavigate } from "react-router-dom";

export default function Dashboard(){

    const navigate = useNavigate();



    return(
        <>
        <div>
            <h1 style={{textAlign:'center',paddingTop:'20px'}}>Welcome to Dashboard!!</h1>
            <button onClick={()=>(navigate('/'))} style={{position:'absolute',top:'40px',right:'40px',fontSize:'27px',width:'auto',padding:'0 12px'}}>
                <i className="fa-solid fa-power-off" style={{backgroundColor:'white',color:'red'}}></i>
            </button>
        </div>
        </>
    );
}