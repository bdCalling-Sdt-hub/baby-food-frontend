/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import AddProductModal from '@/components/Modals/AddProductModal';
import ProductDetailsModal from '@/components/Modals/ProductDetailsModal';
import DashboardTitle from '@/components/shared/DashboardTitle';
import { Table } from 'antd';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ProductsDetails = () => {
      const [open, setOpen] = useState(false);
      const [showDetails, setShowDetails] = useState(false);
      const [modalData, setModalData] = useState(null);

      // console.log(candidate);
      const data = [
            {
                  id: 1,
                  key: 1,
                  image: '/inner_product_01.png',
                  name: 'Organic Banana Puree',
                  category: 'Fruits',
                  price: 3.99,
                  description:
                        'Smooth banana puree made from 100% organic bananas. Perfect for introducing solids to babies.',
            },
            {
                  id: 2,
                  key: 2,
                  image: '/inner_product_02.png',
                  name: 'Sweet Potato Mash',
                  category: 'Vegetables',
                  price: 4.49,
                  description:
                        'Creamy mashed sweet potatoes, rich in fiber and essential vitamins, ideal for growing babies.',
            },
            {
                  id: 3,
                  key: 3,
                  image: '/inner_product_03.png',
                  name: 'Apple & Pear Blend',
                  category: 'Fruits',
                  price: 4.29,
                  description:
                        'A delicious blend of apples and pears, naturally sweet and packed with vitamins for your baby.',
            },
            {
                  id: 4,
                  key: 4,
                  image: '/inner_product_01.png',
                  name: 'Chicken & Veggie Puree',
                  category: 'Meals',
                  price: 5.99,
                  description:
                        'A wholesome blend of chicken, carrots, and peas, providing protein and nutrients in one meal.',
            },
      ];

      const handleDelete = async (id: any) => {
            Swal.fire({
                  title: 'Are you sure?',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes',
                  cancelButtonText: 'No',
            }).then(async (result: any) => {
                  if (result.isConfirmed) {
                        Swal.fire({
                              text: 'Product has been deleted.',
                              icon: 'success',
                              showConfirmButton: false,
                              timer: 1500,
                        });
                  } else {
                        Swal.fire({
                              title: 'Oops',
                              text: 'Failed to delete the product.',
                              icon: 'error',
                              timer: 1500,
                              showConfirmButton: false,
                        });
                  }
            });
      };

      const columns = [
            {
                  title: 'S.No',
                  dataIndex: 'key',
                  key: 'key',
            },
            {
                  title: 'Image',
                  dataIndex: 'image',
                  key: 'image',
                  render: (_: any, record: any) => (
                        <div className=" flex items-center gap-1">
                              <img src={record?.image} alt="image" className="w-16 h-16" />
                        </div>
                  ),
            },
            {
                  title: 'Ingredient Image',
                  dataIndex: 'ingredientImage',
                  key: 'ingredientImage',
                  render: (_: any, record: any) => (
                        <div className=" flex items-center gap-1">
                              <img src={record?.image} alt="image" className="w-16 h-16" />
                        </div>
                  ),
            },
            {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
            },
            {
                  title: 'Description',
                  dataIndex: 'description',
                  key: 'description',
            },

            {
                  title: 'Action',
                  dataIndex: 'action',
                  key: 'action',
                  render: (_: any, record: any) => (
                        <div className=" flex items-center gap-4 ">
                              <button
                                    onClick={() => {
                                          setOpen(true);
                                          setModalData(record);
                                    }}
                              >
                                    <Pencil />
                              </button>
                              <button onClick={() => handleDelete(record?.id)}>
                                    <Trash2 size={22} />{' '}
                              </button>
                        </div>
                  ),
            },
      ];
      return (
            <div>
                  {/* header  */}
                  <div className=" flex  items-center justify-between mb-5">
                        <DashboardTitle>Products</DashboardTitle>
                        <div className=" flex items-center gap-5 ">
                              <button
                                    className=" flex gap-1 text-white bg-primary  h-[45px] rounded-lg  px-4 justify-center items-center"
                                    onClick={() => {
                                          setOpen(true);
                                    }}
                              >
                                    Add Product
                              </button>
                        </div>
                  </div>

                  <Table columns={columns} dataSource={data} pagination={false} />

                  <AddProductModal open={open} setOpen={setOpen} />
            </div>
      );
};

export default ProductsDetails;
