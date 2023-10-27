import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Registration } from "./screens/Registration";
import { Curriculum } from "./screens/Curriculum";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/registration" Component={Registration} />
        <Route path="/curriculum" Component={Curriculum} />
      </Routes>
    </BrowserRouter>
  );
};
