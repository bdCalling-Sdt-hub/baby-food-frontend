import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react'; 
import { PiImageThin } from 'react-icons/pi';
import Swal from 'sweetalert2';
import TextInput from '../shared/TextInput';

interface propsType{
    setOpen:any ,
    open: boolean ,
    modalData:any ,
    setModalData:any
}

const AddProductModal = ({setOpen , open , modalData ,setModalData  }:propsType) => { 
  const [form] = Form.useForm()
    const [imgFile, setImgFile] = useState(null); 
    const [imageUrl , setImageUrl] = useState<any>() 


    const handleChange = (e:any) => { 
      const file = e.target.files[0] 
      setImgFile(file); 
      setImageUrl(URL.createObjectURL(file))
    };  

    useEffect(()=>{ 
      if(modalData){
        form.setFieldsValue({name:modalData?.name , category:modalData?.category , price:modalData?.price , description:modalData?.description}) 
        setImageUrl(modalData?.image)    
      }
    },[modalData , form])

    const onFinish =async(values:any)=>{  
  

      const formdata = new FormData()  
 
    const {imagess , ...otherValues} = values 

      if(imgFile){
        formdata.append("image" ,imgFile)
      }  


      Object.entries(otherValues).forEach(([field , value]:any)=>{
        formdata.append(field , value)
      })   

const id= modalData?.id

      if(modalData?.id){ 
        Swal.fire({
            text:"Product Update Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          })
          setImageUrl(null)
          form.resetFields()
          setOpen(false)  
          setModalData(null) 
}
    else{
        Swal.fire({
            text:"Product Added Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }) 
          setImageUrl(null)
          form.resetFields()
          setOpen(false) 
          setModalData(null) 
      }
    } 

    return (
        <div>
        <Modal
open={open}
onCancel={() => {setOpen(false)  , setImageUrl(null) , setModalData(null)  , form.resetFields()}}                   
centered
footer={false}          
width={600} 

>  
<div className=' p-5 py-0' > 
<p className=' pb-3 text-lg font-[500]'> {modalData ? "Update Product" : "Add Product"}</p>
<Form onFinish={onFinish} form={form} layout='vertical' >
<TextInput name='name' label='Product Name' /> 

<div className=' py-[4px]'>
<p className="text-[#6D6D6D] py-1">Product Image</p>

<label
  htmlFor="image"
  style={{ display: "block",}}
  className="p-1 border rounded-lg"
>
  <Form.Item name="imagess" >
    <div className="flex justify-center items-center w-full h-[100px] ">
      {imageUrl ? (
        <img src={imageUrl} style={{ height:"100%" , width:"100%" , borderRadius:"10px" , objectFit:'contain' }} alt="" />
      ) 
       : (
        <PiImageThin className="text-8xl flex items-center justify-center text-[#666666] font-[400]" />
      )}
    </div>

    <div className="hidden">
      <Input
        id="image"
        type="file"
        onInput={handleChange}
       
      />
    </div>
  </Form.Item>
</label>
</div> 

<TextInput name='category' label='Product Category' />  
<TextInput name='price' label='Price' /> 


<div>
<p className="text-[#6D6D6D] py-1">Description</p>
<Form.Item
  name="description"
  rules={[
    {
      required: true,
      message: "This field is required",
    },
  ]}
>
  <Input.TextArea
    className="w-[100%] border outline-none h-[80px] resize-none"
  />
</Form.Item>
</div> 



<Form.Item className="text-center mt-6">
<button type='submit' className="bg-primary  w-full text-[#FEFEFE] rounded-md h-[43px]" style={{ height:"45px"}}>
  Confirm
</button>
</Form.Item>
</Form>
</div>


</Modal>
</div>
    );
};

export default AddProductModal;