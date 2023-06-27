import SporTotoSuperLigLogo from "../images/Spor-Toto-Super-Lig-Yatay-250.jpg";

const Navbar = ({list,setlist,setOpenModal}) => {

  // console.log("navbarlist",list)

  return (
    <>
      <div className="navbarsection">
        <div className="container">
          <div className="allogo-button">
            <div className="logo">
              <img
                src={SporTotoSuperLigLogo}
                width="100px"
                height="100px"
                alt="123"
              />
            </div>
            <div className="navbutton">
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
                className="addbutton"
              >
                + Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
