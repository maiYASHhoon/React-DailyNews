import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import PostComponent from "./components/post/post";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="article/:id" element={<PostComponent />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
