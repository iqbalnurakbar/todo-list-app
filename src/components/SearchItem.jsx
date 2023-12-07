import React, { useState } from "react";

const SearchItem = ({ handleSearch }) => {
  //deklarasi state
  const [searchData, setSearchData] = useState("");

  //deklarasi handle
  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleButtonClick = () => {
    handleSearch(searchData);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchData);
    }
  };

  return (
    <>
      <div>
        <h1 className="px-2 text-2xl font-bold">Cari Catatan</h1>
        <div className="mx-auto mb-4 mt-2 flex items-center justify-center gap-2">
          <input
            type="text"
            id="search"
            name="search"
            value={searchData}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className="max-w-sm flex-1 rounded-md border-2 p-2 shadow-md"
            placeholder="Cari catatan berdasarkan judul atau isi catatan..."
          />
          <button
            className="w-20 rounded-md border-2 p-2 shadow-md hover:bg-black hover:text-white"
            onClick={handleButtonClick}
          >
            Cari
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
