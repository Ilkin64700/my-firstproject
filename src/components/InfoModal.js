import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const InfoModal = ({
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

console.log("list",list)


  const Edit = () => {
    list[listindex]={
      title:title,
      description:description,
      image:image
    }

    setlist([...list])
    localStorage.setItem('clubinfolist',JSON.stringify(list))

    setInfo(false)
  };

  useEffect(() => {
  
    setTitle(edit?.title)
    setDescription(edit?.description)
    setImage(edit?.image)
      
    }, [info]);

  return (
    <div
      onClick={() => {
        setInfo(false);
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
          <div className="modaltext">Info</div>
          <div className="modalicon">
            <IoCloseSharp
              onClick={() => setInfo(false)}
              className="closeicon"
            />
          </div>
        </div>
        <div className="formcontent">
          <label>Title</label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
          <label>Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            cols="60"
            value={description}
          ></textarea>
          <label>Image (Logo)</label>
          <input onChange={(e) => setImage(e.target.value)} type="text" value={image} />
          <button
            onClick={Edit}
            className="savebutton"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
