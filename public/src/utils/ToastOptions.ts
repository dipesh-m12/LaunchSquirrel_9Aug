import {  ToastPosition} from "react-toastify";
export const toastOptions = {
    position: "bottom-right" as ToastPosition,
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark" as const,
  };