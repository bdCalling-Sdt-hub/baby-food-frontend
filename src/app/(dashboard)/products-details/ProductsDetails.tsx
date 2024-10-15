"use client"
import AddProductModal from '@/components/Modals/AddProductModal';
import ProductDetailsModal from '@/components/Modals/ProductDetailsModal';
import DashboardTitle from '@/components/shared/DashboardTitle';
import { Input, Table } from 'antd';
import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa6';
import { IoSearchOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';

const ProductsDetails = () => { 
    const [open , setOpen] = useState(false)  
    const [showDetails , setShowDetails]= useState(false)
    const [modalData , setModalData] = useState(null)   
    const [searchValue , setSearchValue]= useState("") 
 

    // console.log(candidate);    
    const data= [
        { 
            id:1 , 
            key:1 ,
          image: "/inner_product_01.png",
          name: "Organic Banana Puree",
          category: "Fruits",
          price: 3.99,
          description: "Smooth banana puree made from 100% organic bananas. Perfect for introducing solids to babies."
        },
        { 
            id:2, 
            key:2 ,
          image: "/inner_product_02.png",
          name: "Sweet Potato Mash",
          category: "Vegetables",
          price: 4.49,
          description: "Creamy mashed sweet potatoes, rich in fiber and essential vitamins, ideal for growing babies."
        },
        { 
            id:3 , 
            key:3 ,
          image: "/inner_product_03.png",
          name: "Apple & Pear Blend",
          category: "Fruits",
          price: 4.29,
          description: "A delicious blend of apples and pears, naturally sweet and packed with vitamins for your baby."
        },
        {
            id:4, 
            key:4 ,
          image: "/inner_product_01.png",
          name: "Chicken & Veggie Puree",
          category: "Meals",
          price: 5.99,
          description: "A wholesome blend of chicken, carrots, and peas, providing protein and nutrients in one meal."
        },
        {
            id:5 , 
            key:5 ,
          image: "/inner_product_02.png",
          name: "Rice Cereal with Iron",
          category: "Cereal",
          price: 3.59,
          description: "Fortified rice cereal rich in iron to support your baby’s growth and development."
        },
        {
            id:6, 
            key:6,
          image: "/inner_product_03.png",
          name: "Carrot & Lentil Soup",
          category: "Soups",
          price: 4.99,
          description: "Nourishing carrot and lentil soup, high in protein and perfect for a hearty baby meal."
        },
        { 
            id:7 ,
            key:7,
          image: "/inner_product_01.png",
          name: "Blueberry & Oatmeal",
          category: "Cereal",
          price: 4.79,
          description: "A wholesome oatmeal mixed with fresh blueberries, a fiber-rich breakfast for your little one."
        },
        { 
            id:8 , 
            key:8 ,
          image: "/inner_product_02.png",
          name: "Peach & Yogurt Blend",
          category: "Dairy",
          price: 4.49,
          description: "Creamy yogurt mixed with sweet peaches, perfect for a delicious and nutritious snack."
        },
     
      ];

    const handleSearch =(e:any)=>{
      const data = e?.target?.value  
      setSearchValue(data)
    }
     
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
            title: "Product Name",
            dataIndex: "name",
            key: "name", 
            render:(_:any ,record:any)=><div className=' flex items-center gap-1'> 
 
 <img src={record?.image} style={{ height:"35px" , width:"35px" , borderRadius:"100%"}} /> 
 <p className=''>{record?.name}</p> 
            </div>
          },  
          {
            title: "Product Category",
            dataIndex: "category",
            key: "category",
          }, 
          {
            title: "Price",
            dataIndex: "price",
            key: "price", 
            render:(price:any)=> <p>${price}</p>
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
      <DashboardTitle className=""> Products Details</DashboardTitle> 
      <div className=" flex items-center gap-5 ">
      <Input  placeholder="Search Something...." prefix={<IoSearchOutline className="text-2xl text-black" />} style={{ width:"400px" , height:"45px"}} onChange={(e)=>handleSearch(e)} />  
      <button className=" flex gap-1 text-white bg-primary  h-[45px] rounded-lg  px-4 justify-center items-center"  onClick={()=>{setOpen(true)}}> 
        <span className=" font-[400] text-[20px]"> + </span> 
        <span className=" font-[450]"> Add Product </span>
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

<AddProductModal open={open}  setOpen={setOpen} modalData={modalData}  setModalData={setModalData} /> 
 <ProductDetailsModal showDetails={showDetails} setShowDetails={setShowDetails} modalData={modalData} setModalData={setModalData}  />  

        </div>
    );
};

export default ProductsDetails;