import React from "react";
import TodoCard from "./TodoCard";
import { showFormattedDate } from "../utils";

const ActiveItem = ({ data, handleArchive, handleDelete }) => {
  return (
    <div>
      <h1 className="px-2 text-2xl font-bold">Catatan Aktif</h1>
      <div className="mx-auto mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((item) => (
          <div className="flex justify-center" key={item.id}>
            <TodoCard
              id={item.id}
              title={item.title}
              body={item.body}
              createdAt={showFormattedDate(item.createdAt)}
              handleArchive={() => handleArchive(item.id)}
              handleDelete={() => handleDelete(item.id)}
              button1="Arsip"
              button2="Hapus"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveItem;
