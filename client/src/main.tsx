import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./components/history.tsx";
import Fetch from "./components/fetch.tsx";
import { AppContextProvider } from "./AppContext";
import Profile from "./components/profile.tsx";

//TODO: separate the context and the app into different files
createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/history" element={<History />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </AppContextProvider>
);
