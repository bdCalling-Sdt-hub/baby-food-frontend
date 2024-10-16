"use client";
import { Button, Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

interface propsType {
  openAddModel: boolean;
  setOpenAddModel: any;
  modalData: any;
  setModalData: any;
}
const AddFAQModal = ({
  openAddModel,
  setOpenAddModel,
  modalData,
  setModalData,
}: propsType) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (modalData) {
      form.setFieldsValue({
        question: modalData?.question,
        answer: modalData?.answer,
      });
    }
  }, [modalData, form]);

  const onFinish = async (values: any) => {
    //console.log(values);
    const data = {
      _id: modalData?._id,
      question: values?.question,
      answer: values?.answer,
    };

    if (modalData) {
      Swal.fire({
        text: "FAQ Update SuccessFully",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      setOpenAddModel(false);
      setModalData(null);
      form.resetFields();
    } else {
      Swal.fire({
        text: "FAQ add successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      setOpenAddModel(false);
      setModalData(null);
      form.resetFields();
    }
  };

  return (
    <Modal
      centered
      open={openAddModel}
      onCancel={() => {
        setOpenAddModel(false);
        setModalData(null);
        form.resetFields();
      }}
      width={500}
      footer={false}
    >
      <div className="p-6 py-0">
        <h1
          className=" text-[20px] font-medium"
          style={{ marginBottom: "12px" }}
        >
          {modalData ? "Update FAQ" : "Add FAQ"}
        </h1>
        <Form onFinish={onFinish} form={form} layout="vertical">
          <Form.Item
            name="question"
            style={{ marginBottom: "16px" }}
            label={<p style={{ display: "block" }}>Question</p>}
          >
            <Input
              type="Text"
              placeholder="Enter Question"
              style={{
                border: "1px solid #E0E4EC",
                padding: "10px",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="answer"
            style={{ marginBottom: "16px" }}
            label={<p style={{ display: "block" }}>Answer</p>}
          >
            <Input.TextArea
              placeholder="Enter answer"
              style={{
                border: "1px solid #E0E4EC",
                padding: "10px",
                height: "152px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                resize: "none",
              }}
            />
          </Form.Item>
          <Form.Item className=" text-end">
            <Button
              className="cursor-pointer"
              htmlType="submit"
              block
              style={{
                border: "none",
                height: "44px",
                background: "#89a809",
                color: "white",
                borderRadius: "8px",
                outline: "none",
                padding: "10px 20px",
              }}
            >
              {" "}
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default AddFAQModal;
