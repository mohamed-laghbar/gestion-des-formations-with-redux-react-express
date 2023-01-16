import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/SideBar";

const AddOrganisme = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [ville, setVille] = useState("");
  const [domaine, setDomaine] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post(
      "http://localhost:1337/api/addorganisme",
      JSON.stringify({ name, address, ville, domaine }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    navigate(-1);
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
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="The organisme Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 st Road, LA"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  City
                </label>
                <input
                  type="text"
                  onChange={(e) => setVille(e.target.value)}
                  placeholder="The Organisme Location"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Domaine
                </label>
                <input
                  type="text"
                  onChange={(e) => setDomaine(e.target.value)}
                  name="doamine"
                  placeholder="The Organisme Domaine"
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

export default AddOrganisme;
