import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Routes, Route } from "react-router-dom";
import { HOME, REGISTER, MAIN } from "./configuration/routePaths";
import { User } from "./interfaces/user";
import { UserContext } from "./context/user/userContext.ts";

import LoginPage from "./pages/login/LoginPage.tsx";
import RegistrationPage from "./pages/registration/RegistrationPage.tsx";
import MainPage from "./pages/main/MainPage.tsx";

function App() {
  const [user, setUser] = useState<User>({
    name: "You",
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <GlobalStyle />
        <Routes>
          <Route path={HOME} element={<LoginPage />} />
          <Route path={REGISTER} element={<RegistrationPage />} />
          <Route path={MAIN} element={<MainPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
