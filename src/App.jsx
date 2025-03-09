import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layouts/MainLayout";
import { Home } from "./Pages/Home";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
