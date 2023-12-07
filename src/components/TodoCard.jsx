import React from "react";
import TodoCardButton from "./TodoCardButton";
import TodoCardHead from "./TodoCardHead";
import TodoCardBody from "./TodoCardBody";

const TodoCard = ({
  data,
  title,
  body,
  createdAt,
  id,
  handleArchive,
  handleDelete,
  handleActive,
  button1,
  button2,
}) => {
  return (
    <>
      <div className="m-4 mb-10 flex flex-col rounded-lg border shadow-md max-w-md overflow-auto">
        <TodoCardHead title={title} createdAt={createdAt} />
        <TodoCardBody body={body} />
        <TodoCardButton
          id={id}
          data={data}
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
