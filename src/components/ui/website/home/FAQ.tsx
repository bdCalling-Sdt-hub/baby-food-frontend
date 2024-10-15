/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Heading from "@/components/shared/Heading";
import { Collapse } from "antd";
import { Plus } from "lucide-react";

const getItems = (panelStyle: any) => [
  {
    key: "1",
    label: <p className="font-bold text-sm">HOW LONG DO YOUR MEALS LAST?</p>,
    children: (
      <p className="text-md">
        Our meals stay fresh in the fridge for 10 days or longer (please refer
        to the best before date) and can be frozen for up to 1 month. Take them
        with you when you’re out and about, and they’ll stay fresh for as long
        as 8 hours! And don’t worry – if your baby doesn’t finish an entire
        container, you can put the lid back on and pop it back into the fridge
        for later (once opened, we recommend consuming within 48 hours.)
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: <p className="font-bold text-sm">HOW LONG DO YOUR MEALS LAST?</p>,
    children: (
      <p className="text-md">
        Our meals stay fresh in the fridge for 10 days or longer (please refer
        to the best before date) and can be frozen for up to 1 month. Take them
        with you when you’re out and about, and they’ll stay fresh for as long
        as 8 hours! And don’t worry – if your baby doesn’t finish an entire
        container, you can put the lid back on and pop it back into the fridge
        for later (once opened, we recommend consuming within 48 hours.)
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: <p className="font-bold text-sm">HOW LONG DO YOUR MEALS LAST?</p>,
    children: (
      <p className="text-md">
        Our meals stay fresh in the fridge for 10 days or longer (please refer
        to the best before date) and can be frozen for up to 1 month. Take them
        with you when you’re out and about, and they’ll stay fresh for as long
        as 8 hours! And don’t worry – if your baby doesn’t finish an entire
        container, you can put the lid back on and pop it back into the fridge
        for later (once opened, we recommend consuming within 48 hours.)
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: <p className="font-bold text-sm">HOW LONG DO YOUR MEALS LAST?</p>,
    children: (
      <p>
        Our meals stay fresh in the fridge for 10 days or longer (please refer
        to the best before date) and can be frozen for up to 1 month. Take them
        with you when you’re out and about, and they’ll stay fresh for as long
        as 8 hours! And don’t worry – if your baby doesn’t finish an entire
        container, you can put the lid back on and pop it back into the fridge
        for later (once opened, we recommend consuming within 48 hours.)
      </p>
    ),
    style: panelStyle,
  },
];

const FAQ = () => {
  const panelStyle = {
    marginBottom: 10,
    background: "#fff",
    borderRadius: "10px",
    border: "1px solid rgba(149, 157, 165, 0.2)",
    padding: "4px",
    fontSize: "14px",
  };
  return (
    <div className="container mt-28">
      <Heading className="items-center text-center">
        Your Questions, <br /> Answered
      </Heading>
      <div className="mt-12">
        <Collapse
          bordered={false}
          items={getItems(panelStyle)}
          expandIconPosition="end"
          expandIcon={() => <Plus color="#F37D2B" />}
          size="large"
        />
      </div>
    </div>
  );
};

export default FAQ;
