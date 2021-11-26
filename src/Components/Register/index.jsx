import { createUser, logout, signIn } from "../../Services/Auth";
import { useInput } from "../../Hooks/useInput";

export const Register = () => {
  const [email, HandleEmail] = useInput("");
  const [password, HandlePassword] = useInput("");
  const [userState, setUserState] = useInput(null);

  const createNewUser = async () => {
    const user = await createUser(email, password);
    setUserState(user);
  };

  const logIn = async () => {
    const user = await signIn(email, password);
    setUserState(user);
  };

  const logoutUser = async () => {
    await logout();
    setUserState(null);
  };

  return (
    <div>
      {userState ? (
        <button
          onClick={() => {
            logoutUser();
          }}
        >
          Sign Out
        </button>
      ) : (
        <>
          <input
            type="text"
            placeholder="Escribe tu mail aquí"
            value={email}
            onChange={HandleEmail}
          />
          <input
            type="password"
            placeholder="Escribe una contraseña"
            value={password}
            onChange={HandlePassword}
          />
          <button onClick={() => createNewUser()}>Crear usuario</button>
          <button onClick={() => logIn()}>Ingresar</button>
        </>
      )}{" "}
    </div>
  );
};
