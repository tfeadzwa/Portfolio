// src/MyContext.js
import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [imgSrc, setImgSrc] = useState("");
  const [imgOpen, setImgOpen] = useState(false);

  const toggleImgOpen = () => {
    setImgOpen(!imgOpen);
  };

  return (
    <MyContext.Provider
      value={{
        imgSrc,
        setImgSrc,
        imgOpen,
        setImgOpen,
        toggleImgOpen,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
