import { useState, createContext } from "react";

export const TradeContext = createContext({
  openBuyWindow: (uid, price) => {},
  closeBuyWindow: () => {},
});

export const TradeContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [stockName, setStockName] = useState("");
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleOpenWindow = (uid, price) => {
    if (!uid || !price) {
      console.warn("BuyWindow opened without stock data");
      return;
    }
    setIsOpen(true);
    setStockName(uid);
    setStockPrice(price);
  };

  const handleCloseWindow = () => {
    setIsOpen(false);
    setStockName("");
  };

  return (
    <TradeContext.Provider
      value={{
        isOpen,
        setIsOpen,
        stockName,
        setStockName,
        setStockPrice,
        stockPrice,
        openBuyWindow: handleOpenWindow,
        closeBuyWindow: handleCloseWindow,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};
