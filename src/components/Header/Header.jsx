import { useState } from "react";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { IoMenu } from "react-icons/io5";
import style from './Header.module.scss'

export const Header = ({ title, subtitle, children }) => {
  //State til at holde styr på om children skal vises
  const [showChildren, setShowChildren] = useState(false);

  //Henter skærmbredden fra useScreenWidth
  const screenWidth = useScreenWidth();

  function toggleChildren() {
    setShowChildren((prevState) => !prevState);
  }

  return (
    <header className={style.headerStyling}>
      {/* Hvis skærmstørrelsen er under 768px vil menu ikonet vises og children skjules  */}
      {screenWidth < 768 ? (
        <>
          <span onClick={toggleChildren}>
            <IoMenu />
          </span>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          {showChildren && children}
        </>
      ) : (
        <>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          {children}
        </>
      )}
    </header>
  );
};
