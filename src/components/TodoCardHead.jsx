import React from "react";

const TodoCardHead = ({ title, createdAt }) => {
  return (
    <div className="px-2">
      <div className="text-xl font-bold">{title}</div>
      <div className="text-sm text-slate-600">{createdAt}</div>
    </div>
  );
};

export default TodoCardHead;
