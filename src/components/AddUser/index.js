import { app, database } from "../firebase/firebaseConfig";
import React, { useState } from "react";
import {
  collection,
  addDoc,
  // getDocs,
  // doc,
  // updateDoc,
  // deleteDoc,
} from "firebase/firestore";

const CreateUser = () => {
  const [data, setData] = useState([]);
  const databaseRef = collection(database, "CRUD DATA");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(data);
    // set data into Firbase database
    addDoc(databaseRef, data)
      .then(() => {
        alert("Data add Into Firestore Database");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <>
      <div className="mx-5 my-10">
        <section className="max-w-4xl p-6 mx-auto bg-gray-900 rounded-md shadow-md dark:bg-gray-800 ">
          <h2 className="text-lg font-semibold text-white capitalize dark:text-white">
            Add A User
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Username"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-white dark:text-gray-200" htmlFor="age">
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  name="age"
                  onChange={handleChange}
                  placeholder="Age "
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  onChange={handleChange}
                  name="email"
                  placeholder="Email Address"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  onChange={handleChange}
                  name="password"
                  placeholder="Password"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  Password Confirmation
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="Phone"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default CreateUser;
