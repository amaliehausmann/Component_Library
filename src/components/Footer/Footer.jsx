import style from "./Footer.module.scss";
import { ToastContainer, Bounce } from "react-toastify";

export const Footer = () => {
  return (
    <footer className={style.footerStyling}>
      {/* Container til toast notifikationer */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </footer>
  );
};
