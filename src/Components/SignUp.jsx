import React, { useState } from "react";
import { app } from "../config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignUp = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [islogin, setIsLogin] = useState(false);

  function onclickHandler(){
    if (!islogin){
      signUpFuntion()
      
    }else{
      signInfuntion();
      
    }
  }

  async function signUpFuntion() {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
      alert("SignUp successfull ")
    } catch (e) {
      alert("Error while sign Up ....");
      console.log(e);
    }
  }

  async function signInfuntion() {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      alert("login successfull ")
    } catch (e) {
      alert("Error While Sign in....");
      console.log(e);
      
    }
    setEmail("");
    setPassword("");
  }

  return (
    <div className="w-full ">
      <section className="max-w-screen-xl mx-auto ">
        <div>
          <div className="w-1/4 py-8">
            <h1 className="py-2">{islogin ? "logIn" : "Sign Up "}</h1>
            <div className="flex gap-4 flex-col ">
              {
                islogin ? <>
              </> : <><input
                type="text"
                id=""
                
                className="border-2 rounded-lg py-1 px-2"
                placeholder="Name"
              />
              <input
                type="text"
                id="शुभम "
                
                className="border-2 rounded-lg py-1 px-2"
                placeholder="userName"
              /></>
              }
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 rounded-lg py-1 px-2"
                placeholder="email"
              />
              <input
                type="text"
                id="email"
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 rounded-lg py-1 px-2"
                placeholder="password"
              />
              
            </div>
            <button className="border-2 rounded-lg py-1 px-2 my-4 bg-blue-500 text-white" onClick={onclickHandler}><span>{islogin ?  "login": "Sign Up"}</span> </button>
            <p>{islogin ? "You Don't have account ?" :"you have already account ?"} <span className="text-blue-400 font-medium cursor-pointer" onClick={()=>setIsLogin(!islogin)}>{islogin ? "register" : "login"}</span> </p>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default SignUp;
