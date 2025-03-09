import { IoMdClose } from "react-icons/io";
import style from "./Modal.module.scss";

//En modal med en halvgennemsigtig baggrund, både container og Icon har en onclick function
export const Modal = ({ children, action }) => {
  return (
    <>
      <div onClick={action} className={style.modalContainer}></div>
      <div className={style.modal}>
        <span onClick={action}>
          <IoMdClose />
        </span>
        {children}
      </div>
    </>
  );
};
