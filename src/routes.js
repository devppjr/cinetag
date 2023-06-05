import Favorites from "pages/Favorites";
import Index from "pages/Index";
import RootPage from "pages/RootPage";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootPage />}>
                    <Route index element={<Index />}></Route>
                    <Route path="favoritos" element={<Favorites />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
