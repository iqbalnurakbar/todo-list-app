import React from "react";

const InputItem = ({ title, body, setTitle, setBody, handleAddTodo }) => {
  const maxCharacterCount = 50;

  //deklarasi handle
  const handleTitleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxCharacterCount) {
      setTitle(inputValue);
    }
  };
  
  const remainingCharacters = maxCharacterCount - title.length;

  return (
    <>
      <div>
        <h1 className="px-2 text-2xl font-bold">Buat Catatan</h1>
        <div className="mb-4 mt-2 flex flex-col items-center">
          <textarea
            id="title"
            name="title"
            rows={1}
            value={title}
            onChange={handleTitleChange}
            className="mx-10 mb-2 w-full rounded-md border-2 p-2 md:w-1/2"
            placeholder="Ketik judul disini..."
            maxLength={maxCharacterCount}
          />
          <textarea
            id="body"
            name="body"
            rows={5}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mx-auto mb-2 w-full rounded-md border-2 p-1 md:w-1/2"
            placeholder="Ketik catatan disini..."
          />
          <span className="mb-2 p-1 text-xs">
            Sisa karakter untuk judul: {remainingCharacters}
          </span>
          <button
            className="w-1/6 rounded-md border-2 p-2 shadow-md hover:bg-black hover:text-white "
            onClick={handleAddTodo}
          >
            Buat
          </button>
        </div>
      </div>
    </>
  );
};

export default InputItem;
