import { authThunks } from "./../../../features/auth/auth.slice";
import { useAppDispatch } from "./../../../common/hooks/use-app-dispatch";
import { useState } from "react";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (email: string, password: string) =>
    dispatch(authThunks.login({ email, password, rememberMe: true }));

  return {
    handleLogin,
    email,
    password,
    setEmail,
    setPassword,
  };
};
