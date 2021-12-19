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

  // Aquí se podría poner aparte también la data de la colección tweets? mientras no tenga el mismo nombre de nada q ya haya?

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
