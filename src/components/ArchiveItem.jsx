import React from "react";
import TodoCard from "./TodoCard";

import { showFormattedDate } from "../utils";
const ArchiveItem = ({ data, handleActive, handleDelete }) => {
  return (
    <div>
      <h1 className="px-2 text-2xl font-bold">Catatan Arsip</h1>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data > 0 ? (
          data.map((item) => (
            <div className="flex justify-center" key={item.id}>
              <TodoCard
                id={item.id}
                title={item.title}
                body={item.body}
                createdAt={showFormattedDate(item.createdAt)}
                handleActive={() => handleActive(item.id)}
                handleDelete={() => handleDelete(item.id)}
                button1="Aktif"
                button2="Hapus"
              />
            </div>
          ))
        ) : (
          <p className="px-2">Data tidak ditemukan!</p>
        )}
      </div>
    </div>
  );
};

export default ArchiveItem;
