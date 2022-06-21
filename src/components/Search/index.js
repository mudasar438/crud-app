import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <div className="flex flex-col space-y-3 justify-center items-center mt-10 mx-5">
        <h1 className="text-2xl font-bold">Search User</h1>
        <input
          type="text"
          maxLength="20"
          onChange={handleSearch}
          placeholder="Search User by Name"
          className="border-2 border-gray-500 p-3 w-full max-w-3xl "
        />
      </div>
    </div>
  );
};

export default Search;
