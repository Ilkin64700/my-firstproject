import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const AddModal = ({
  setOpenModal,
  list,
  setlist,
  listindex,
  setListIndex,
  edit,
  setEdit,
  info,
  setInfo
}) => {
  // const [input, setinput] = useState("");
  // console.log("selectedItem",selectedItem)
  // console.log("1111",data?.title)
    // console.log("lis0",list)
  // {
  //   setClubdata([...clubdata, selectedItem])
  // }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  return (
    <div
      onClick={() => {
        setOpenModal(false);
      }}
      className="addmodal-overlay"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="addmodal"
      >
        <div className="modalheader">
          <div className="modaltext">Add</div>
          <div className="modalicon">
            <IoCloseSharp
              onClick={() =>setOpenModal(false)}
              className="closeicon"
            />
          </div>
        </div>
        <div className="formcontent">
          <label>Title</label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" />
          <label>Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            cols="60"
          ></textarea>
          <label>Image (Logo)</label>
          <input onChange={(e) => setImage(e.target.value)} type="text" />
          <button
            onClick={() => {
              list.push({
                title: title,
                description: description,
                image: image,
              });
              setlist(list);
              localStorage.setItem("clubinfolist", JSON.stringify(list));
              setOpenModal(false);
            }}
            className="savebutton"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
