import { createContext, useState } from "react";

// Step 1: Create Context
export const BulbContext = createContext();

// Step 2.A : Provide Context
export function BulbContextProvider({children}) {
  const [isOn, setIsOn] = useState(false);

  const switchOn = () => {
    setIsOn(true);
  };

  const switchOff = () => {
    setIsOn(false);
  };

  return (
    <BulbContext.Provider value={{isOn,switchOn,switchOff}}>{children}</BulbContext.Provider>
  );
}
