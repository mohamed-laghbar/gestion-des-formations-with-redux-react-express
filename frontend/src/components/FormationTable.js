import axios from "axios";
import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";


export default function FormationTable() {
  const date = new Date();


  let [formation, setFormation] = useState([]);

  useEffect(() => {
  axios
      .get("http://localhost:1337/api/formations",)
      .then((res) => {
        setFormation(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }, []);

  return (
    <div className="flex flex-col mx-16 w-full py-6	 px-10">
      <div className="overflow-x-auto mx-10 px-10">
        <div className="flex justify-between py-3 pl-2">
          <div className="flex items-center space-x-2"></div>
        </div>
        <Link to="/addformation" className="sm-text mx-auto">
                   
                   <button className="bg-blue-500 flex hover:bg-blue-700 text-white font-bold p-3 mx-8 rounded">
                    <h2> Create new Formation  </h2>              

                   </button>
                 </Link>

        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
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
                    Descreption
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Starting Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Ending Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Status
                  </th>
                  
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
              {formation.map((item) => (

                <tr>
             
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {item.descreption}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <div className="text-green-500 hover:text-green-700">
                    {item.start}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <div className="text-red-500 hover:text-red-700">
                    {item.end}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <div className="text-gray-800 hover:text-slate-700">
                    {
                     item.start > date ? 'en cours' : item.end > date ? 'done' : 'en cours'
                      
                    }
                    </div>
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
