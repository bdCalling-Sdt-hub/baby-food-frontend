/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Modal } from 'antd';
import { ImageIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import TextInput from '../shared/TextInput';
import JoditEditor from 'jodit-react';

interface PropsType {
      setOpen: (open: boolean) => void;
      open: boolean;
      modalData: any;
      setModalData: (data: any) => void;
}

const AddBlogModal = ({ setOpen, open, modalData, setModalData }: PropsType) => {
      const [form] = Form.useForm();
      const [imgFile, setImgFile] = useState<File | null>(null);
      const [imageUrl, setImageUrl] = useState<string | null>(null);
      const editor = useRef(null);
      const [content, setContent] = useState('');

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                  setImgFile(file);
                  setImageUrl(URL.createObjectURL(file));
            }
      };

      useEffect(() => {
            if (modalData) {
                  form.setFieldsValue({
                        subtitle: modalData?.subTitle,
                        title: modalData?.title,
                        description: modalData?.description,
                  });
                  setImageUrl(modalData?.BlogImage || null);
            }
      }, [modalData, form]);

      const onFinish = async (values: any) => {
            const formData = new FormData();
            if (imgFile) formData.append('image', imgFile);
            Object.entries(values).forEach(([field, value]) => formData.append(field, value as string));

            Swal.fire({
                  text: modalData?.id ? 'Blog Updated Successfully' : 'Blog Added Successfully',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1500,
            });
            resetForm();
      };

      const resetForm = () => {
            setImageUrl(null);
            form.resetFields();
            setOpen(false);
            setModalData(null);
      };

      const editorConfig = {
            readonly: false,
            placeholder: 'Start typing...',
            style: {
                  background: '#F7F7F7',
                  color: 'black',
                  height: 150,
            },
      };

      return (
            <Modal open={open} onCancel={resetForm} centered footer={null} width={600}>
                  <div className="p-5">
                        <h2 className="text-lg font-semibold text-gray-800 pb-3">
                              {modalData ? 'Update Blog' : 'Add Blog'}
                        </h2>
                        <Form onFinish={onFinish} form={form} layout="vertical">
                              <TextInput name="title" label="Title" />

                              <div className="py-2">
                                    <label className="text-gray-600 block pb-1">Blog Image</label>
                                    <div className="border rounded-lg p-1">
                                          <Form.Item name="imagess">
                                                <div className="flex justify-center items-center w-full h-[100px]">
                                                      {imageUrl ? (
                                                            <img
                                                                  src={imageUrl}
                                                                  alt="Blog Preview"
                                                                  className="h-24 w-24 rounded-lg object-contain"
                                                            />
                                                      ) : (
                                                            <ImageIcon className="h-8 w-8 text-gray-400" />
                                                      )}
                                                </div>
                                                <Input
                                                      type="file"
                                                      onChange={handleChange}
                                                      className="hidden"
                                                      id="image"
                                                />
                                          </Form.Item>
                                    </div>
                              </div>

                              <div className="pt-3">
                                    <label className="text-gray-600 block pb-1">Description</label>
                                    <Form.Item
                                          name="description"
                                          rules={[{ required: true, message: 'This field is required' }]}
                                    >
                                          <JoditEditor
                                                ref={editor}
                                                value={content}
                                                config={editorConfig}
                                                onBlur={(newContent: any) => setContent(newContent)}
                                                onChange={() => {}}
                                          />
                                    </Form.Item>
                              </div>

                              <Form.Item className="text-center mt-6">
                                    <button type="submit" className="w-full bg-primary text-white rounded-md h-11">
                                          Confirm
                                    </button>
                              </Form.Item>
                        </Form>
                  </div>
            </Modal>
      );
};

export default AddBlogModal;
