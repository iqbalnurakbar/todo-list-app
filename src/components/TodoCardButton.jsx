import React from "react";

const TodoCardButton = ({ handleArchive, handleDelete, handleActive, button1, button2 }) => {
  return (
    <div className="mt-auto">
      <button
        className="w-1/2 items-end rounded-bl-lg border-r border-t font-bold text-yellow-400 hover:bg-yellow-400 hover:text-white active:bg-yellow-500 p-2" 
        onClick={button1 === 'Arsip' ? handleArchive : handleActive}
      >
        {button1}
      </button>
      <button
        className="w-1/2 rounded-br-lg border-l border-t font-bold text-red-400 hover:bg-red-400 hover:text-white active:bg-red-500 p-2"
        onClick={handleDelete}
      >
        {button2}
      </button>
    </div>
  );
};

export default TodoCardButton;
