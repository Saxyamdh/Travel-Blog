import { useState } from "react";
import { Login } from "../components/Login";
import { AnimatePresence } from "framer-motion";
import { Auth } from "../hooks/AuthHooks";

export const HomePage = () => {
  const [state, setState] = useState(false);
  const { LogOut } = Auth()

  const handleAuth = () => {
    setState(!state);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleAuth}>Login</button>
      <AnimatePresence>
      {state && <Login recievedState={handleAuth} />}
      </AnimatePresence>
      <button onClick={() => LogOut()}>LOG OUT</button>
    </div>
  );
};
