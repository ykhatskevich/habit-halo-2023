import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.ts";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

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
      <div>Hello</div>
      <button onClick={handleSignOut}>Sign Out</button>;
    </>
  );
};

export default MainPage;
