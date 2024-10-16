"use client";
import DashboardTitle from "@/components/shared/DashboardTitle";
import TextInput from "@/components/shared/TextInput";
import { Form } from "antd";

const ContactEdit = () => {
  return (
    <div>
      <DashboardTitle className="">Contact</DashboardTitle>
      <div className="w-1/2 mx-auto mt-10">
        <Form layout="vertical">
          <TextInput name="address" label="Address" />
          <TextInput name="phone" label="Phone Number" />
          <TextInput name="email" label="Email" />

          <Form.Item className="text-end mt-6">
            <button
              type="submit"
              className="bg-primary  w-[130px] text-[#FEFEFE] rounded-md h-[43px]"
              style={{ height: "45px" }}
            >
              Save Changes
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactEdit;
