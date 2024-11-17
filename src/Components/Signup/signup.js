import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {


  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onUpdate = (e) => {
    const { name, value } = e.target;

    setData((pre) => ({ ...pre, [name]: value }));
  };

  const onHandlevalue = (e) => {
    e.preventDefault();

    if (data.name !== "" && data.email !== "" && data.password !== "") {

      const getLocal = localStorage.getItem("user_data");

      const oldLocal = getLocal ? JSON.parse(getLocal) : [];

      if(getLocal){

          const emailExist = oldLocal.some((val)=>(val.email === data.email));

          console.log('email:',emailExist);
        
          if(emailExist){
            alert(`${data.email} is already exist`);
          }else{
            alert('User data stored in local storage');
            localStorage.setItem("user_data", JSON.stringify([...oldLocal,data]));
          }
      }else{
        alert('User data stored in local storage');
        localStorage.setItem("user_data", JSON.stringify([data]))
      }

    } else {
      alert("* Required the all input fields *");
    }


    setData({
      name: "",
      email: "",
      password: "",
    });

  };

  const navigate = useNavigate();

  return (
    <>
      <div className="main">
        <div className="card">
          <div className="box1">
            <p style={{ fontSize: "45px", fontWeight: "500", margin: "0" }}>
              Hello Again!
            </p>
            <p style={{ textAlign: "center", width: "70%", fontSize: "23px" }}>
              Your email is linked to an existing account. Kindly log in to
              continue.
            </p>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Sign in
            </button>
          </div>
          <div className="box2">
            <h2>SIGN UP</h2>
            <form onSubmit={onHandlevalue}>
              <input
                type="text"
                placeholder="Enter User Name"
                value={data.name}
                name="name"
                onChange={onUpdate}
              />
              <input
                type="email"
                placeholder="Enter User Email"
                value={data.email}
                name="email"
                onChange={onUpdate}
              />
              <input
                type="password"
                placeholder="Enter User Password"
                value={data.password}
                name="password"
                onChange={onUpdate}
              />
              <button type="submit" style={{ marginTop: "10px" }}>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
