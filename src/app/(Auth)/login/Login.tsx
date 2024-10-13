"use client"
import DashboardTitle from '@/components/shared/DashboardTitle';
import TextInput from '@/components/shared/TextInput';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Login = () => { 
    const router = useRouter()

    const onFinish =(values:any)=>{
        router.push("/products-details")
    } 

    return (
        <div className={` w-full min-h-screen transition-all duration-1000 ease-in-out  pt-[85px] flex  items-center justify-center `}>  
             
             <div className='w-1/2'> 
             <p className='text-center pb-4 text-3xl text-[#222222] font-[450]'>Log in to your account </p>
             <p className="text-center text-[18px] pb-14 text-[#6B6B6B]">
             Please enter your email and password to continue
          </p>
 

          <Form onFinish={onFinish} layout="vertical"  className=' w-full'>
          <TextInput name='email' label='Email'  /> 

           
          <Form.Item
            style={{ marginBottom: 0 }}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              }, 
            ]} 
            label={<p className='text-[#6D6D6D]'>Password</p>}
          >
            <Input.Password
              type="password"
              placeholder="Enter your password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
              }}
            />
          </Form.Item>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", 
                marginTop:"20px" ,
                marginBottom:"10px"
              }}
            >
             <Checkbox ><span   style={{
                  color: "#6A6D7C",
                  fontWeight: 400,
                  fontSize: "14px",
                  marginBottom: "10px",
                }}> Remember Password </span></Checkbox>

              <Link
                className=""
                style={{
                  color: "#54A7C3",
                  fontWeight: 400,
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
                href="/forget-password"
              >
                Forgot password?
              </Link>
            </div>

            <Button
                className="cursor-pointer"
                htmlType="submit"
                block
                style={{
                  border: "none",
                  height: "44px",
                  background: "#89a809",
                  color: "white",
                  borderRadius: "8px",
                  outline: "none",
                  padding: "10px 20px",
                }}
            
              >  Sign In</Button>
            
           
          </Form> 

          {/* <p className='py-4 text-[#6B6B6B] text-center'>Don’t have an account? <Link href="/register"  className='text-[#00445B] font-semibold '>Register now</Link></p> */}
             </div>
                          
     
    </div>
    );
};

export default Login;