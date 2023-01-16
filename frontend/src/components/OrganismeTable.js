import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiPlusCircle } from "react-icons/bi";

export default function OrgansimeTable() {
  let [organisme, setOrganisme] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/organismes")
      .then((res) => {
        setOrganisme(res.data);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }, []);

  return (
    <div className="flex flex-col m-16 w-6/12		">
      <div className="overflow-x-auto">
        <div className="flex justify-between py-3 pl-2">
          <div className="flex items-center space-x-2"></div>
        </div>

        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
          <Link to="/addorgasnisme" className="sm-text mx-auto">
                   
                   <button className="bg-blue-500 flex hover:bg-blue-700 text-white font-bold p-3 m-8 rounded">
                    <h2> Create new Organisme  </h2>                <div className="my-1 mx-3 "><BiPlusCircle /></div>    

                   </button>
                 </Link>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Ville
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Domaine
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {organisme.map((item) => (
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.name}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.address}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.ville}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.domaine}
                    </td>  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    </td>
                 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
