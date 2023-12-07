import React from "react";
import TodoCardButton from "./TodoCardButton";
import TodoCardHead from "./TodoCardHead";
import TodoCardBody from "./TodoCardBody";

const TodoCard = ({
  title,
  body,
  createdAt,
  handleArchive,
  handleDelete,
  handleActive,
  button1,
  button2,
}) => {
  return (
    <>
      <div className="m-4 mb-10 flex w-96 flex-col overflow-auto rounded-lg border shadow-md">
        <TodoCardHead title={title} createdAt={createdAt} />
        <TodoCardBody body={body} />
        <TodoCardButton
          handleArchive={handleArchive}
          handleDelete={handleDelete}
          handleActive={handleActive}
          button1={button1}
          button2={button2}
        />
      </div>
    </>
  );
};

export default TodoCard;
