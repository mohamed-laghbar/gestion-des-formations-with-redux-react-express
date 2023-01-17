import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/SideBar";

const AddFormation = () => {
  const [name, setName] = useState("");
  const [descreption, setDescreption] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    axios.post(
      "http://localhost:1337/api/addformation",
      JSON.stringify({ name, descreption, start, end }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    navigate("/formations");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div>
        <div className="flex w-screen items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Descreption
                </label>
                <input
                  type="text"
                  name="address"
                  onChange={(e) => setDescreption(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Start at
                </label>
                <input
                  type="date"
                  onChange={(e) => setStart(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Ends at
                </label>
                <input
                  type="date"
                  onChange={(e) => setEnd(e.target.value)}
                  name="doamine"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFormation;
