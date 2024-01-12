import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "../../interfaces/user";

export interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
