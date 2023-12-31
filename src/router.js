import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact/contact";
import PostComponent from "./components/post/";
import Header from "./components/header";
import MainLayout from "./layouts/mainLayout";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="article/:id" element={<PostComponent />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
};

export default Router;
