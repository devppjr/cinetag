import Header from "components/Header";
import Container from "components/Container";
import Footer from "components/Footer";
import FavoritesProvider from "contexts/Favorites";
import { Outlet } from "react-router-dom";

function RootPage() {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    )
}

export default RootPage;
