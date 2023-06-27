import React, { useEffect, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineInfoCircle,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import AddModal from "./AddModal";
import Navbar from "./Navbar";
import InfoModal from "./InfoModal";

const ClubInfo = () => {
  const [openAccordion, setopenAccordion] = useState(false);
  const [active, setactive] = useState(0);
  const [readMore, setreadMore] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [list, setlist] = useState([]);
  const [listindex, setListIndex] = useState();
  const [info, setInfo] = useState(false);
  const [edit, setEdit] = useState({});

  // console.log("list",list)

  useEffect(() => {
    let arr = localStorage.getItem("clubinfolist");
    if (arr) {
      let obj = JSON.parse(arr);
      setlist(obj);
    }
  }, [setlist]);

  const deleteByIndex = (index) => {
    list.splice(index, 1);
    setlist([...list]);
    localStorage.setItem("clubinfolist", JSON.stringify(list));
  };

  // const deleteById = (id) => {
  //   setdeleteItem((oldvalues) => {
  //     return oldvalues.filter((item) => item.id !== id);
  //   });
  // };
  // console.log("clubdata", clubdata[0])
  // console.log("clubdataChange", clubdata[0].title ="Besiktas")
  // console.log("clubdata", clubdata[0])
  // console.log("active", active);

  console.log("LIST",list)
  return (
    <>
      <Navbar setOpenModal={setOpenModal} />
      {openModal ? (
        <AddModal setOpenModal={setOpenModal} list={list} setlist={setlist}/>
      ) : null}

      <section className="clubinfo">
        <div className="container">
          <div className="clubinfo-list">
            {list.map((item, index) => {
              return (
                <div key={index} className="clubinfo-item">
                  <div className="clubinfo-header">
                    <div className="clubinfo-logo">
                      <img src={item.image} alt="1234" />
                      <h5 className="clubinfo-title">{item.title}</h5>
                    </div>
                    <div className="clubinfo-icons">
                      <AiOutlineDelete
                        onClick={() => {
                          setactive(index);
                          deleteByIndex(index);
                        }}
                        className="icondelete"
                      />
                      <AiOutlineInfoCircle
                        onClick={() => {
                          setInfo(true);
                          setListIndex(index);
                          setEdit(item)
                        }}
                        className="iconinfo"
                      />
                      <div
                        className="icons-updowns"
                        onClick={() => {
                          setactive(index);
                        }}
                      >
                        {openAccordion && active === index ? (
                          <AiFillCaretDown
                            onClick={() => setopenAccordion(false)}
                            className="icondropupdown"
                          />
                        ) : (
                          <AiFillCaretUp
                            onClick={() => setopenAccordion(true)}
                            className="icondropupdown"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="clubinfo-description ">
                    {openAccordion && active === index ? (
                      <div className="itemdescription">
                        {readMore
                          ? item.description.slice(0, 500)
                          : item.description}
                        <span
                          className="showslicedtext"
                          onClick={() => {
                            setreadMore(!readMore);
                          }}
                        >
                          {readMore ? "show more" : "show less"}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {info ? (
          <InfoModal
            setOpenModal={setOpenModal}
            list={list}
            setlist={setlist}
            edit={edit}
            setEdit={setEdit}
            info={info}
            setInfo={setInfo}
            listindex={listindex}
            
          />
        ) : null}
      </section>
    </>
  );
};

export default ClubInfo;
