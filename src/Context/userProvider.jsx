import { createContext, useEffect, useState } from "react";
import { handleAuthChange } from "../Services/Auth";

export const userContext = createContext();

// en children pasamos lo que vamos a desestructurar
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const unsubscribe = await handleAuthChange((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};
