import DashboardNavbar from '@/components/shared/DashboardNavbar';
import Sidebar from '@/components/shared/Sidebar';
import { ConfigProvider } from 'antd';
import React from 'react';
const layout = ({ children }: { children: React.ReactNode }) => {
      return (
            <ConfigProvider
                  theme={{
                        token: {
                              colorPrimary: '#89A809',
                              fontFamily: 'Quicksand, sans-serif',
                        },
                  }}
            >
                  <div className="quicksand">
                        <div className="grid grid-cols-12 lg:h-screen">
                              <div className="lg:col-span-2 col-span-12 lg:bg-[#F7F7F7]">
                                    <Sidebar />
                              </div>
                              <div className="lg:col-span-10 col-span-12 ">
                                    <div className="h-[80px] bg-[#F7F7F7] hidden lg:block  ">
                                          <DashboardNavbar />
                                    </div>
                                    <div className="ps-[3%] p-[2%]">{children} </div>
                              </div>
                        </div>
                  </div>
            </ConfigProvider>
      );
};

export default layout;
