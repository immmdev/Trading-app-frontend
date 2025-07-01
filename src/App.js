import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';


function App() {
    return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                    <Route path="/products" element={<ProductPage />}></Route>
                    <Route path="/pricing" element={<PricingPage />}></Route>
                    <Route path="/support" element={<SupportPage />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
    );
}

export default App;

