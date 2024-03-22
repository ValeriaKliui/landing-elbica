import { Route, Routes } from "react-router-dom";

import { Layout } from "@/shared/Layout";

import { PATHS } from "./constants";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path={PATHS.MAIN.LINK} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={PATHS.SERVICES.LINK} element={<div>lasdasd</div>} />
      </Route>
    </Routes>
  );
}

export default App;
