import { useState } from 'react';
import { Form, Input, Upload, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import JoditEditor from 'jodit-react';

interface BlogModalProps {
      open: boolean;
      setOpen: (open: boolean) => void;
}

interface BlogFormValues {
      title: string;
      content: string;
      author: string;
      image?: File;
}

const BlogModal: React.FC<BlogModalProps> = ({ setOpen, open }) => {
      const [form] = Form.useForm<BlogFormValues>();
      const [imageFile, setImageFile] = useState<File | null>(null);
      const [content, setContent] = useState<string>('');

      const handleImageUpload = (file: File) => {
            setImageFile(file);
            return false; // Prevent automatic upload
      };

      const onFinish = async (values: BlogFormValues) => {
            const formData = new FormData();
            formData.append('title', values.title);
            formData.append('content', content); // Use the content state for Jodit Editor
            formData.append('author', values.author);

            if (imageFile) formData.append('image', imageFile);

            // Simulate a successful submission
            Swal.fire({
                  text: 'Blog Added Successfully',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1500,
            });

            // Clear the form and close modal
            form.resetFields();
            setImageFile(null);
            setContent('');
            setOpen(false);
      };

      const closeModal = () => {
            setOpen(false);
            form.resetFields();
            setImageFile(null);
            setContent('');
      };

      return (
            <Modal width={800} title="Add Blog Post" open={open} onCancel={closeModal} footer={null} centered>
                  <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={{ content }} // Initialize content in the form
                  >
                        <Form.Item
                              name="title"
                              label={<label className="font-medium text-gray-700">Blog Title</label>}
                              rules={[{ required: true, message: 'Please enter the blog title' }]}
                        >
                              <Input
                                    style={{
                                          height: 42,
                                    }}
                                    placeholder="Exploring the Wonders of the Universe"
                                    className="border-gray-300 rounded-lg w-full"
                              />
                        </Form.Item>

                        <Form.Item
                              name="content" // Bind the content state to this form item
                              label={<label className="font-medium text-gray-700">Content</label>}
                              rules={[
                                    {
                                          required: true,
                                    },
                                    {
                                          validator: (_, value) => {
                                                // Custom validation for content
                                                if (!content || content.trim() === '') {
                                                      return Promise.reject(new Error('Content cannot be empty'));
                                                }
                                                return Promise.resolve();
                                          },
                                    },
                              ]}
                        >
                              <JoditEditor
                                    value={content}
                                    onChange={(newContent) => setContent(newContent)} // Update state on content change
                              />
                        </Form.Item>

                        <Form.Item
                              name="author"
                              label={<label className="font-medium text-gray-700">Author</label>}
                              rules={[{ required: true, message: 'Please enter the author name' }]}
                        >
                              <Input
                                    style={{
                                          height: 42,
                                    }}
                                    placeholder="John Doe"
                                    className="border-gray-300 rounded-lg w-full"
                              />
                        </Form.Item>

                        <Form.Item
                              name="image"
                              label={<label className="font-medium text-gray-700">Blog Image</label>}
                              rules={[{ required: true, message: 'Please upload the blog image' }]}
                        >
                              <Upload
                                    listType="picture-card"
                                    beforeUpload={handleImageUpload}
                                    showUploadList={false}
                                    className="w-full"
                              >
                                    {imageFile ? (
                                          <img
                                                src={URL.createObjectURL(imageFile)}
                                                alt="Blog"
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

                        <Form.Item>
                              <Button type="primary" htmlType="submit" style={{ height: 42, width: '100%' }}>
                                    Add Blog Post
                              </Button>
                        </Form.Item>
                  </Form>
            </Modal>
      );
};

export default BlogModal;
