import React from 'react';

interface propsType{
    children:React.ReactNode ,
    className:string
}
const DashboardTitle = ({children , className}:propsType) => {
    return <p className={`text-2xl text-[#222222] font-[450] p-4 ps-0 pb-2 underline decoration-primary  underline-offset-8 ${className}`} > {children}</p>
};

export default DashboardTitle;