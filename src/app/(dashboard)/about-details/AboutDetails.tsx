"use client"
import DashboardTitle from '@/components/shared/DashboardTitle';
import dynamic from 'next/dynamic';
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
const AboutDetails = () => { 
    const editor = useRef(null);
    const [content, setContent] = useState(""); 

  
  const handleSubmit =async()=>{

      Swal.fire({
          text: "Update SuccessFully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        })
  }
  
    const config = {
      readonly: false,
      placeholder: "Start typings...",
      style: {
        background: '#F7F7F7',
        color: 'rgba(255,255,255,0.5)', 
        height: 400,
    },
    };
    return (
        <>
        <DashboardTitle className="mb-5"> About Us</DashboardTitle>
    

      <div>
        <JoditEditor
          ref={editor} 
          value={content}
          config={config}
        //   tabIndex={1} 
          onBlur={(newContent:any) => setContent(newContent)}
          onChange={(newContent:any) => {}}
        />
      </div>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={()=>handleSubmit()} className=' w-[20%] bg-primary text-white rounded font-[500] text-[14px]' style={{height:"44px"}}
        >
          Save Changes
        </button>
      </div>
    </>
    );
};

export default AboutDetails;