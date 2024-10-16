/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import AddFAQ from "@/components/Modals/AddFAQModal";
import DashboardTitle from "@/components/shared/DashboardTitle";
import { Pagination } from "antd";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

const FaqDetails = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [modalData, setModalData] = useState();
  const [page, setPage] = useState<any>(1);

  const handleDelete = async (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Product has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Oops",
          text: "Failed to delete the product.",
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const faqDatas = [
    {
      _id: 1,
      question: "When should I start introducing solid foods to my baby?",
      answer:
        "You can start introducing solid foods at around 6 months, when your baby shows signs of readiness like sitting up and showing interest in food.",
    },
    {
      _id: 2,
      question: " What is a good first food for my baby?",
      answer:
        "Single-grain cereals, pureed vegetables like sweet potatoes, and fruits like bananas are great first foods.",
    },
    {
      _id: 3,
      question: "How often should I feed my baby solids?",
      answer:
        "Start with once a day, gradually increasing to 2-3 meals as your baby grows and shows more interest in solid foods.",
    },
    {
      _id: 4,
      question: "Can I give my baby water with solid foods?",
      answer:
        "Small amounts of water can be introduced with solid foods at around 6 months, but breast milk or formula should still be the main source of nutrition.",
    },
    {
      _id: 5,
      question: "Should I avoid certain foods for my baby?",
      answer:
        "Yes, avoid honey, whole nuts, and foods that are choking hazards. Limit added salt and sugar in baby food as well..",
    },
  ];

  return (
    <div className="  ">
      <div className=" flex  items-center justify-between mb-5">
        <DashboardTitle className="">Frequently Asked Questions</DashboardTitle>
        <div className=" flex items-center gap-5 ">
          <button
            className=" flex gap-2 text-white bg-primary  h-[45px] rounded-lg  px-4 justify-center items-center"
            onClick={() => {
              setOpenAddModel(true);
            }}
          >
            Add FAQ
          </button>
        </div>
      </div>

      <div className="bg-white py-6 px-4 rounded-md">
        {faqDatas?.map((item: any, index: number) => (
          <div
            key={index + 1}
            className="flex justify-between items-start gap-4 "
          >
            <div className="mt-3">{index + 1}.</div>
            <div className="w-full ">
              <p className="text-base font-medium border-b rounded-xl py-2 px-4 flex items-center gap-8 ">
                <span className=" flex-1 "> {item?.question}</span>
              </p>
              <div className="flex justify-start items-start gap-2 border-b  py-2 px-4  rounded-xl my-4 ">
                <p className="text-[#919191] leading-[24px] ">{item?.answer}</p>
              </div>
            </div>
            <div className="w-[4%] flex justify-start items-center pt-4 gap-2">
              <Pencil
                onClick={() => {
                  setOpenAddModel(true);
                  setModalData(item);
                }}
                className="text-2xl cursor-pointer text-primary"
              />
              <Trash2
                onClick={() => handleDelete(item?._id)}
                className="text-2xl cursor-pointer text-red-600"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-end my-2">
        <Pagination
          align="end"
          defaultCurrent={page}
          total={10}
          current={page}
          onChange={(page) => setPage(page)}
        />
      </div>

      <AddFAQ
        setOpenAddModel={setOpenAddModel}
        openAddModel={openAddModel}
        modalData={modalData}
        setModalData={setModalData}
      />
    </div>
  );
};

export default FaqDetails;
