import React, { createContext, useState } from "react";
import { IMyContextType } from "../model/MyContextType";

// Context'i oluşturun
export const MyContext = createContext<IMyContextType | null>(null);

interface IMyContextProvider {
  children: React.ReactNode;
}

// Context sağlayıcısı bileşeni oluşturun
export const MyContextProvider: React.FC<IMyContextProvider> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  // Context değerini hazırlayın
  const contextValue: IMyContextType = {
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
  };

  // Context sağlayıcısını döndürün
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
