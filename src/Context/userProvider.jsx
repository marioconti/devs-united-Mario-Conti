/* eslint-disable react-hooks/exhaustive-deps */
import { onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { handleAuthChange } from "../Services/Auth";
import { getDocument } from "../Services/Operationes";

export const userContext = createContext();

// en children pasamos lo que vamos a desestructurar
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const suscribeToUser = (user) =>
    onSnapshot(getDocument("users", user.uid), (data) => {
      setUser({ ...user, ...data.data() });
    });

  useEffect(async () => {
    let unSuscribeFromUser;
    const unsubscribe = await handleAuthChange((user) => {
      if (user) {
        unSuscribeFromUser = suscribeToUser(user);
      } else {
        setUser(null);
        if (unSuscribeFromUser) unSuscribeFromUser();
      }
    });
    return () => {
      unsubscribe();
      if (unSuscribeFromUser) unSuscribeFromUser();
    };
  }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};
