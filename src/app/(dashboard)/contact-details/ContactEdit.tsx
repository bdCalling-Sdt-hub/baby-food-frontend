"use client"
import DashboardTitle from '@/components/shared/DashboardTitle';
import TextInput from '@/components/shared/TextInput';
import { Form } from 'antd';
import React from 'react';

const ContactEdit = () => {
    return ( 
        <div>
 <DashboardTitle className=''>Contact</DashboardTitle>
        <div className='mt-3'>
             <Form layout='vertical' className=' w-1/2 bg-[#F7F7F7] p-8 rounded-lg'>
 <TextInput name="address" label='Address' />
 <TextInput name="phone" label='Phone Number' />  
 <TextInput name="email" label='Email' /> 

 <Form.Item className="text-end mt-6">
<button type='submit' className="bg-primary  w-[130px] text-[#FEFEFE] rounded-md h-[43px]" style={{ height:"45px"}}>
  Save Changes
</button>
</Form.Item>
             </Form>
        </div>
        </div>
    );
};

export default ContactEdit;