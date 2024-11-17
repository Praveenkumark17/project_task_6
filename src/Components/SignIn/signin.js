import React, { useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";

export default function Signin(){

    const navigate = useNavigate();

    const getLocal = localStorage.getItem("user_data");

    const oldLocal = getLocal ? JSON.parse(getLocal) : [];

    const [data, setData] = useState({
        email: "",
        password: "",
      });

    const onUpdate = (e) => {
        const { name, value } = e.target;
    
        setData((pre) => ({ ...pre, [name]: value }));
      };
    
      const onHandle = (e) => {
        e.preventDefault();

        // console.log(data);

        let final = oldLocal.some((val)=>(val.email === data.email && val.password === data.password));

        if(final){
            navigate('dashboard');
        }else{
            alert('No data Found!!!');
        }

      }

    return (
        <>
          <div className="main">
            <div className="card">
              <div className="boxs2">
                <h2>SIGN IN</h2>
                <form onSubmit={onHandle}>
                    <input type="email" placeholder="Enter User Email" name="email" onChange={onUpdate}/>
                    <input type="password" placeholder="Enter User Password" name="password" onChange={onUpdate}/>
                    <button type="submit" style={{marginTop:'10px'}}>Sign in</button>
                </form>
              </div>
              <div className="boxs1">
                <p style={{ fontSize: "45px", fontWeight: "500", margin: "0" }}>
                  Welcome Back!
                </p>
                <p style={{ textAlign: "center", width: "70%", fontSize: "23px" }}>
                  To keep connected with us please login with your personal info.
                </p>
                <button onClick={()=>{navigate('signup')}}>Sign up</button>
              </div>
            </div>
          </div>
        </>
      );
}