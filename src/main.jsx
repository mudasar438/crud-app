import React, { useEffect,useState } from "react";

import { app, database } from "./components/firebase/firebaseConfig";
import Search from "./components/Search";

import { MdOutlineDeleteSweep } from "react-icons/md";

import UpdateModal from "./components/Modal/UpdateModal";
import {
  collection,
  // addDoc,
  getDocs,
  doc,
  // updateDoc,
  deleteDoc,
} from "firebase/firestore";

function Main() {
  // Search handle
  const [changeId, setChangeId] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);
  const [firedata, setFireData] = useState([])
  const [del ,setDel] =useState("")
  const databaseRef = collection(database, "CRUD DATA");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const SearchFilter = firedata.filter((value) => {
    return value.username.toLowerCase().includes(search.toLowerCase());
  });

  // GEt DAta from firebase Database



  useEffect(() => {
    
       getDocs(databaseRef)
    .then ((response)=>{
      setFireData(response.docs.map((item)=>{
        return (
          {...item.data(), id:item.id}
        )
      }))
    })
    
  }, [del]);


//---------------> Delete Item  <---------------------
  const handleDelete = (id) => {
    console.log(id)
    
    let updateid = doc(database, 'CRUD DATA', id)
  deleteDoc(updateid)
  .then(()=>{
    alert("Delete Data Item")
    setDel(id);

  })
  .catch((err)=>{
    console.log(err.message)

  })
   
  };

// --------------------------- Edit Item ----------------------


  return (
    <>
      <div className="relative">
        <Search handleSearch={handleSearch} />
        <div className="mt-10 flex justify-center items-center  ">



      


          {SearchFilter.length ? (
            <div>
              <table className="table-auto  text-left whitespace-no-wrap border-separate bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900 rounded-tl rounded-bl">
                      Name
                    </th>
                    <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                      Age{" "}
                    </th>
                    <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                      Email{" "}
                    </th>
                    <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                      Rule
                    </th>
                    <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                      Phone
                    </th>
                    <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                      Date
                    </th>
                    <th className="px-4 py-3 text-center  tracking-wider font-medium text-white bg-gray-900">
                      Operation
                    </th>
                  </tr>
                </thead>
                <tbody>
                 

                  {SearchFilter.map((item, index) => {
                    console.log(item);
                    return (
                      <tr key={index}>
                        <td className="px-4 py-3 ">{item.username}</td>
                        <td className="px-4 py-3">{item.age}</td>
                        <td className="px-4 py-3">{item.email}</td>
                        <td className="px-4 py-3">{item.Password}</td>
                        <td className="px-4 py-3">{item.phone}</td>
                        <td className="px-4 py-3">{item.createdAt}</td>
                        {/* <td className="px-4 py-3">{item.id}</td> */}
                        <td className="px-4 py-3 space-x-2 flex justify-between items-center">
                          {/* <Link to="/">
                          <button className="border border-green-500 hover:bg-green-700 text-black font-bold hover:text-white transition duration-500 py-2 px-4 rounded">
                            <BiAddToQueue />
                          </button>
                        </Link> */}
                          <button className="border-blue-500 border  hover:bg-blue-700 text-black hover:text-white transition duration-500 scale-105 font-bold  rounded">
                            <UpdateModal edit={item} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="border border-red-500 hover:bg-red-700 text-black font-bold hover:text-white transition duration-500 py-2 px-4 rounded"
                          >
                            <MdOutlineDeleteSweep />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-2xl text-center lg:text-4xl font-bold">
              "{search}" User Not found
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
