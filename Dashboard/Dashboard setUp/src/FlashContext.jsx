import { useState, createContext } from "react";

export const FlashContext = createContext();

export const FlashContextProvider = ({ children }) => {
  const [flash, setFlash] = useState(null);

  const showFlash = (type, message) => {
    setFlash({ type, message });

    setTimeout(() => {
      setFlash(null);
    }, 2000);
  };

  return (
    <FlashContext.Provider value={{ flash, showFlash }}>
      {children}
    </FlashContext.Provider>
  );
};
