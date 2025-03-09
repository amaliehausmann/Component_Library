import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import style from "./Accordian.module.scss";

export const Accordian = ({ text, children }) => {
  const [accordianIsOpen, setAccordianIsOpen] = useState(false);

  function toggleAccordian() {
    if (accordianIsOpen === false) {
      setAccordianIsOpen(true);
    } else {
      setAccordianIsOpen(false);
    }
  }

  return (
    <div className={style.Accordian}>
      <span>
        <h3>{text}</h3>
        <span onClick={toggleAccordian}>
          {accordianIsOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </span>
      </span>
      {accordianIsOpen && <article>{children}</article>}
    </div>
  );
};
