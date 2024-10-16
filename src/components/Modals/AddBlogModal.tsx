/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Modal } from "antd";
import { Image } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import TextInput from "../shared/TextInput";

interface propsType {
  setOpen: any;
  open: boolean;
  modalData: any;
  setModalData: any;
}

const AddBlogModal = ({
  setOpen,
  open,
  modalData,
  setModalData,
}: propsType) => {
  const [form] = Form.useForm();
  const [imgFile, setImgFile] = useState(null);
  const [imageUrl, setImageUrl] = useState<any>();

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setImgFile(file);
    setImageUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (modalData) {
      form.setFieldsValue({
        subtitle: modalData?.subTitle,
        title: modalData?.title,
        description: modalData?.description,
      });
      setImageUrl(modalData?.BlogImage);
    }
  }, [modalData, form]);

  const onFinish = async (values: any) => {
    const formdata = new FormData();

    const { imagess, ...otherValues } = values;

    if (imgFile) {
      formdata.append("image", imgFile);
    }

    Object.entries(otherValues).forEach(([field, value]: any) => {
      formdata.append(field, value);
    });

    const id = modalData?.id;

    if (modalData?.id) {
      Swal.fire({
        text: "Blog Update Successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      setImageUrl(null);
      form.resetFields();
      setOpen(false);
      setModalData(null);
    } else {
      Swal.fire({
        text: "Blog Added Successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      setImageUrl(null);
      form.resetFields();
      setOpen(false);
      setModalData(null);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onCancel={() => {
          setOpen(false);
          setImageUrl(null);
          setModalData(null);
          form.resetFields();
        }}
        centered
        footer={false}
        width={600}
      >
        <div className=" p-5 py-0">
          <p className=" pb-3 text-lg font-[500]">
            {" "}
            {modalData ? "Update Blog" : "Add Blog"}
          </p>
          <Form onFinish={onFinish} form={form} layout="vertical">
            <TextInput name="title" label="Title" />

            <div className=" py-[4px]">
              <p className="text-[#6D6D6D] py-1">Blog Image</p>

              <label
                htmlFor="image"
                style={{ display: "block" }}
                className="p-1 border rounded-lg"
              >
                <Form.Item name="imagess">
                  <div className="flex justify-center items-center w-full h-[100px] ">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "10px",
                          objectFit: "contain",
                        }}
                        alt=""
                      />
                    ) : (
                      <Image />
                    )}
                  </div>

                  <div className="hidden">
                    <Input id="image" type="file" onInput={handleChange} />
                  </div>
                </Form.Item>
              </label>
            </div>

            <TextInput name="subtitle" label="Subtitle" />

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
                <Input.TextArea className="w-[100%] border outline-none h-[80px] resize-none" />
              </Form.Item>
            </div>

            <Form.Item className="text-center mt-6">
              <button
                type="submit"
                className="bg-primary  w-full text-[#FEFEFE] rounded-md h-[43px]"
                style={{ height: "45px" }}
              >
                Confirm
              </button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default AddBlogModal;
