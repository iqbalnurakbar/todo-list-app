import React, { useState } from "react";
import { getInitialData } from "../utils";
import ActiveItem from "./ActiveItem";
import ArchiveItem from "./ArchiveItem";
import InputItem from "./InputItem";
import SearchItem from "./SearchItem";

const TodoCardList = () => {
  //deklarasi state
  const initialData = getInitialData();
  const [allData, setAllData] = useState(initialData);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const activeData = allData.filter((item) => !item.archived);
  const archivedData = allData.filter((item) => item.archived);

  //deklarasi handle
  const handleAction = (id, archived) => {
    setAllData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, archived } : item)),
    );
  };

  const addTodo = (title, body) => {
    const newData = {
      id: allData.length + 1,
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setAllData((prevData) => [...prevData, newData]);
  };

  const handleArchive = (id) => handleAction(id, true);

  const handleActive = (id) => handleAction(id, false);

  const handleDelete = (id) => {
    setAllData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleAddTodo = () => {
    if (title && body) {
      addTodo(title, body);
      setTitle("");
      setBody("");
    } else alert("Judul dan catatan harus diisi!");
  };

  const handleSearch = (searchData) => {
    const lowerCaseData = searchData.toLowerCase();
    const filteredData = initialData.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseData) ||
        item.body.toLowerCase().includes(lowerCaseData),
    );
    if (filteredData <= 0) alert("Data tidak ditemukan!");
    setAllData(filteredData);
  };

  return (
    <>
      <InputItem
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        handleAddTodo={handleAddTodo}
      />
      <SearchItem handleSearch={handleSearch} />
      <ActiveItem
        data={activeData}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
      <ArchiveItem
        data={archivedData}
        handleActive={handleActive}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default TodoCardList;
