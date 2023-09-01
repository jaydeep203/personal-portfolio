"use client";
import React, {useState, useEffect} from 'react';
import { Button, Input } from '../../../components/exportLayout';
import {signIn} from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';


const LoginComp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const session = useSession();

    useEffect(() => {
      if(session?.status === "authenticated"){
        setIsVisible(false);
      }

    }, [setIsVisible, session?.status]);

  
    const submitHandler = async()=>{
      setIsDisabled(true);

      const res = await signIn("credentials", {
        email:email,
        password:password,
        redirect:false
      });

      if(!res?.ok || res?.error){
        return toast.error("Something went wrong.");
      }

      if(res?.ok){
        return toast.success("Login Successful.");
      }

      setIsDisabled(false);
      
    }

  return (
    <>
      {
        isVisible && (

      <div 
        className="
          mt-[5rem]
          w-[50%]
          rounded-[5px]
          bg-white
        "
      >

      
      <form className="
        loginForm
        rounded-[5px]
        h-[70vh]
        p-[2vmax]
      ">
            <h4 className='
              m-[2vmax]
              tracking-[15px]
              flex
              justify-center
            '>
              <p>A</p>
              <p>D</p>
              <p>M</p>
              <p>I</p>
              <p style={{ marginRight: "1vmax" }}>N</p>

              <p>P</p>
              <p>A</p>
              <p>N</p>
              <p>E</p>
              <p>L</p>
            </h4>

            <div className='
              flex
              justify-center
              flex-col
              py-[2vmax]
              px-[8vmaxs]
              box-border
            '>
              <Input
                type="email"
                placeholder="Admin Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Admin Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button label='Login' onClick={submitHandler} isDisabled={isDisabled} />
            </div>
          </form>
        </div>

        )
      }
    </>
  )
}

export default LoginComp