import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../context/user/userContext.ts";
import { User } from "../../interfaces/user";
import { useUserContext } from "../../custom hooks/useUserContext.tsx";
import { auth } from "../../firebase/firebase.ts";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div>Hello, {user.name}</div>
      <button onClick={handleSignOut}>Sign Out</button>;
    </>
  );
};

export default MainPage;
