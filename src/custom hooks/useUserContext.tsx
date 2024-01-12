import { useContext } from "react";
import { UserContext, UserContextType } from "../context/user/userContext";

export function useUserContext(): UserContextType {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("useUserContext must be user with a UserContext");
  }

  return user;
}
