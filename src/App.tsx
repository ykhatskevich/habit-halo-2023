import { Routes, Route } from "react-router-dom";
import { HOME, REGISTER, MAIN } from "./configuration/routePaths";

import LoginPage from "./pages/login/LoginPage.tsx";
import RegistrationPage from "./pages/registration/RegistrationPage.tsx";
import MainPage from "./pages/main/MainPage.tsx";

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<LoginPage />} />
      <Route path={REGISTER} element={<RegistrationPage />} />
      <Route path={MAIN} element={<MainPage />} />
    </Routes>
  );
}

export default App;
