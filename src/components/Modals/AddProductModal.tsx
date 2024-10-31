import { useState } from 'react';
import { Form, Input, Upload, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';

interface AddProductFormProps {
      open: boolean;
      setOpen: (open: boolean) => void;
}

interface FormValues {
      name: string;
      description: string;
      image?: File;
      ingredientImage?: File;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ setOpen, open }) => {
      const [form] = Form.useForm<FormValues>(); // Correctly type the form instance
      const [imageFile, setImageFile] = useState<File | null>(null);
      const [ingredientImageFile, setIngredientImageFile] = useState<File | null>(null);

      const handleImageUpload = (file: File, type: 'product' | 'ingredient') => {
            if (type === 'product') {
                  setImageFile(file);
            } else if (type === 'ingredient') {
                  setIngredientImageFile(file);
            }
            return false; // Prevent automatic upload
      };

      const onFinish = async (values: FormValues) => {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('description', values.description);

            if (imageFile) formData.append('image', imageFile);
            if (ingredientImageFile) formData.append('ingredientImage', ingredientImageFile);

            // Simulate a successful submission
            Swal.fire({
                  text: 'Product Added Successfully',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1500,
            });

            // Clear the form and close modal
            form.resetFields();
            setImageFile(null);
            setIngredientImageFile(null);
            setOpen(false);
      };

      const closeModal = () => {
            setOpen(false);
            form.resetFields();
            setImageFile(null);
            setIngredientImageFile(null);
      };

      return (
            <Modal title="Add Product" visible={open} onCancel={closeModal} footer={null} centered>
                  <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item
                              name="name"
                              label={<label className="font-medium text-gray-700">Product Name</label>}
                              rules={[{ required: true, message: 'Please enter the product name' }]}
                        >
                              <Input
                                    style={{
                                          height: 42,
                                    }}
                                    placeholder="Organic Baby Food"
                                    className="border-gray-300 rounded-lg w-full"
                              />
                        </Form.Item>

                        <Form.Item
                              name="description"
                              label={<label className="font-medium text-gray-700">Description</label>}
                              rules={[{ required: true, message: 'Please enter the product description' }]}
                        >
                              <Input.TextArea
                                    placeholder="A gentle, organic baby food."
                                    className="border-gray-300 rounded-lg w-full"
                              />
                        </Form.Item>

                        <div className="flex items-center gap-10 justify-center">
                              <Form.Item
                                    name="image"
                                    label={<label className="font-medium text-gray-700">Product Image</label>}
                                    rules={[{ required: true, message: 'Please upload the product image' }]}
                              >
                                    <Upload
                                          listType="picture-card"
                                          beforeUpload={(file) => handleImageUpload(file, 'product')}
                                          showUploadList={false}
                                          className="w-full"
                                    >
                                          {imageFile ? (
                                                <img
                                                      src={URL.createObjectURL(imageFile)}
                                                      alt="Product"
                                                      className="w-full h-full object-cover rounded-lg"
                                                />
                                          ) : (
                                                <div className="flex flex-col items-center justify-center text-gray-500 text-sm">
                                                      <PlusOutlined className="text-2xl mb-2" />
                                                      <span>Upload</span>
                                                </div>
                                          )}
                                    </Upload>
                              </Form.Item>

                              <Form.Item
                                    name="ingredientImage"
                                    label={<label className="font-medium text-gray-700">Ingredient Image</label>}
                                    rules={[{ required: true, message: 'Please upload the ingredient image' }]}
                              >
                                    <Upload
                                          listType="picture-card"
                                          beforeUpload={(file) => handleImageUpload(file, 'ingredient')}
                                          showUploadList={false}
                                          className="w-full"
                                    >
                                          {ingredientImageFile ? (
                                                <img
                                                      src={URL.createObjectURL(ingredientImageFile)}
                                                      alt="Ingredient"
                                                      className="w-full h-full object-cover rounded-lg"
                                                />
                                          ) : (
                                                <div className="flex flex-col items-center justify-center text-gray-500 text-sm">
                                                      <PlusOutlined className="text-2xl mb-2" />
                                                      <span>Upload</span>
                                                </div>
                                          )}
                                    </Upload>
                              </Form.Item>
                        </div>

                        <Form.Item>
                              <Button
                                    style={{
                                          height: 42,
                                          width: '100%',
                                    }}
                                    type="primary"
                                    htmlType="submit"
                              >
                                    Add Product
                              </Button>
                        </Form.Item>
                  </Form>
            </Modal>
      );
};

export default AddProductForm;
