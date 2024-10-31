/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Input, Modal } from 'antd';
import { Images } from 'lucide-react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import TextInput from '../shared/TextInput';

interface PropsType {
      setOpen: (value: boolean) => void;
      open: boolean;
      modalData: any;
      setModalData: (data: any) => void;
}

const AddProductModal = ({ setOpen, open, modalData, setModalData }: PropsType) => {
      const [form] = Form.useForm();
      const [imgFile, setImgFile] = useState<File | null>(null);
      const [imageUrl, setImageUrl] = useState<string | null>(null);
      const [ingredientImgFile, setIngredientImgFile] = useState<File | null>(null);
      const [ingredientImageUrl, setIngredientImageUrl] = useState<string | null>(null);

      useEffect(() => {
            if (modalData) {
                  form.setFieldsValue({
                        name: modalData.name,
                        category: modalData.category,
                        price: modalData.price,
                        description: modalData.description,
                  });
                  setImageUrl(modalData.image);
                  setIngredientImageUrl(modalData.ingredientImage);
            }
      }, [modalData, form]);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'product' | 'ingredient') => {
            const file = e.target.files?.[0];
            if (file) {
                  if (type === 'product') {
                        setImgFile(file);
                        setImageUrl(URL.createObjectURL(file));
                  } else {
                        setIngredientImgFile(file);
                        setIngredientImageUrl(URL.createObjectURL(file));
                  }
            }
      };

      const onFinish = async (values: any) => {
            const formData = new FormData();
            const { productImage, ingredientImage, ...otherValues } = values;

            if (imgFile) formData.append('productImage', imgFile);
            if (ingredientImgFile) formData.append('ingredientImage', ingredientImgFile);
            Object.entries(otherValues).forEach(([field, value]) => formData.append(field, value as any));

            Swal.fire({
                  text: modalData?.id ? 'Product Updated Successfully' : 'Product Added Successfully',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1500,
            });

            setImageUrl(null);
            setIngredientImageUrl(null);
            form.resetFields();
            setOpen(false);
            setModalData(null);
      };

      const closeModal = () => {
            setOpen(false);
            setImageUrl(null);
            setIngredientImageUrl(null);
            setModalData(null);
            form.resetFields();
      };

      return (
            <Modal open={open} onCancel={closeModal} centered footer={null} width={600}>
                  <div className="p-5 py-0">
                        <p className="pb-3 text-lg font-semibold">{modalData ? 'Update Product' : 'Add Product'}</p>
                        <Form form={form} layout="vertical" onFinish={onFinish}>
                              <TextInput name="name" label="Product Name" />
                              <div className="py-2 flex gap-3 items-center">
                                    <Form.Item
                                          rules={[{ required: true, message: 'This field is required' }]}
                                          name="productImage"
                                          label={<p className="text-gray-500">Product Image</p>}
                                    >
                                          <div className="flex justify-center items-center w-full h-[100px]">
                                                {imageUrl ? (
                                                      <img
                                                            src={imageUrl}
                                                            alt="Product"
                                                            className="h-full w-full rounded-lg object-contain"
                                                      />
                                                ) : (
                                                      <Images className="text-8xl text-gray-500" />
                                                )}
                                          </div>
                                          <Input
                                                id="product-image"
                                                type="file"
                                                hidden
                                                onChange={(e) => handleChange(e, 'product')}
                                          />
                                    </Form.Item>
                                    <Form.Item
                                          name="ingredientImage"
                                          label={<p className="text-gray-500">Ingredient Image</p>}
                                    >
                                          <div className="flex justify-center items-center w-full h-[100px]">
                                                {ingredientImageUrl ? (
                                                      <img
                                                            src={ingredientImageUrl}
                                                            alt="Ingredient"
                                                            className="h-full w-full rounded-lg object-contain"
                                                      />
                                                ) : (
                                                      <Images className="text-8xl text-gray-500" />
                                                )}
                                          </div>
                                          <Input
                                                id="ingredient-image"
                                                type="file"
                                                hidden
                                                onChange={(e) => handleChange(e, 'ingredient')}
                                          />
                                    </Form.Item>
                              </div>

                              <Form.Item
                                    name="description"
                                    label="Description"
                                    rules={[{ required: true, message: 'This field is required' }]}
                              >
                                    <Input.TextArea className="resize-none h-20 border" />
                              </Form.Item>
                              <Form.Item className="text-center mt-6">
                                    <button type="submit" className="bg-primary w-full text-white rounded-md h-[45px]">
                                          Confirm
                                    </button>
                              </Form.Item>
                        </Form>
                  </div>
            </Modal>
      );
};

export default AddProductModal;
