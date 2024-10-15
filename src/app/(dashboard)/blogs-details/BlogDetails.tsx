"use client"
import AddBlogModal from '@/components/Modals/AddBlogModal';
import BlogDetailsModal from '@/components/Modals/BlogDetailsModal';
import DashboardTitle from '@/components/shared/DashboardTitle';
import {  Table } from 'antd';
import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa6';
import { MdDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2'; 

const BlogDetails = () => { 
    const [open , setOpen] = useState(false)  
    const [showDetails , setShowDetails]= useState(false)
    const [modalData , setModalData] = useState(null)   
   
    const data= [
        { 
            id:1 , 
            key:1 ,
          BlogImage: "/card_image_01.jpg",
          title: "Locally grown",
          subTitle: "Our Veggies are",
          description: "Smooth banana puree made from 100% organic bananas. Perfect for introducing solids to babies."
        },
        { 
            id:2, 
            key:2 ,
            BlogImage: "/card_image_02.jpg",
            title: "Locally grown",
            subTitle: "Our Veggies are",
          description: "Creamy mashed sweet potatoes, rich in fiber and essential vitamins, ideal for growing babies."
        },
        { 
            id:3 , 
            key:3 ,
            BlogImage: "/card_image_03.jpg",
          title: "Locally grown",
          subTitle: "Our Veggies are",
          description: "A delicious blend of apples and pears, naturally sweet and packed with vitamins for your baby."
        },
        {
            id:4, 
            key:4 ,
            BlogImage: "/card_image_01.jpg",
            title: "Locally grown",
            subTitle: "Our Veggies are",
          description: "A wholesome blend of chicken, carrots, and peas, providing protein and nutrients in one meal."
        },
        {
            id:5 , 
            key:5 ,
            BlogImage: "/card_image_02.jpg",
            title: "Locally grown",
            subTitle: "Our Veggies are",
          description: "Fortified rice cereal rich in iron to support your baby’s growth and development."
        },
   
     
      ];


     
    const handleDelete =async(id:any)=>{
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then(async (result:any) => {
        if (result.isConfirmed) {
              Swal.fire({
                text: "Product has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              })
            } else {
              Swal.fire({
                title: "Oops",
                text: "Failed to delete the product.",
                icon: "error",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          });
        } 

        
    const columns = [
        {
            title: "S.No",
            dataIndex: "key",
            key: "key", 
          },
        {
            title: "Blog Image",
            dataIndex: "BlogImage",
            key: "BlogImage", 
            render:(_:any ,record:any)=><div className=' flex items-center gap-1'> 
 <img src={record?.BlogImage} style={{ height:"65px" , width:"100px" , borderRadius:"10px" , objectFit:"cover" }} /> 
            </div>
          },   
          {
            title: " Title",
            dataIndex: "title",
            key: "title",
          }, 
          {
            title: " Subtitle",
            dataIndex: "subTitle",
            key: "subTitle", 
          }, 
          {
            title: "Action",
            dataIndex: "action",
            key: "action", 
            render: (_:any,record:any) => (
                <div
            className=" flex items-center gap-4 "
            >
              <button
               onClick={()=>{setShowDetails(true) 
                 setModalData(record)}}
              >
               <FaRegEye className="text-xl font-semibold text-[#5C5C5C]" />
              </button>   
              <button
               onClick={()=>{setOpen(true) , setModalData(record)}}
              >
               <CiEdit className="text-xl font-semibold text-[#5C5C5C]" />
              </button>  
              <button onClick={()=>handleDelete(record?.id)}> <MdDeleteOutline  size={22}/> </button>   
            </div>
              ),
          }, 

    ]  

    return (
        <div> 
        {/* header  */}
           <div className=" flex  items-center justify-between mb-5">
  <DashboardTitle className=""> Blogs</DashboardTitle> 
  <div className=" flex items-center gap-5 ">
  <button className=" flex gap-1 text-white bg-primary  h-[45px] rounded-lg  px-4 justify-center items-center"  onClick={()=>{setOpen(true)}}> 
    <span className=" font-[400] text-[20px]"> + </span> 
    <span className=" font-[450]"> Add Blog </span>
  </button>
  </div>
  </div>  

  <Table
        columns={columns}
        dataSource={data}
        pagination={{ 
          defaultCurrent:1 , 
          total:10, 
      
        }}
      />     

<AddBlogModal open={open}  setOpen={setOpen} modalData={modalData}  setModalData={setModalData} /> 
<BlogDetailsModal showDetails={showDetails} setShowDetails={setShowDetails} modalData={modalData} setModalData={setModalData}  />  

    </div>
    );
};

export default BlogDetails;