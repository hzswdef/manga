import { Route, Routes } from "react-router-dom";
import HomePage from "../components/page/home/HomePage";
import MangaPage from "../components/page/manga/MangaPage";
import NotFound from "../components/page/NotFound";


const AppRoutes = () =>
  <Routes>
    <Route path="/" element={ <HomePage /> } />
    <Route path="/manga/:id" element={ <MangaPage /> } />
    <Route path="*" element={ <NotFound /> } />
  </Routes>

export default AppRoutes;
