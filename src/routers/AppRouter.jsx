import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ListaPrecios } from "../components/PriceList";

export const AppRouter = () => {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Navigate to="/listaprecios" />}/>
                    <Route path="/listaprecios" element={<ListaPrecios />} />
                    <Route path="/promociones" element={<h1>holaaaaaaa</h1>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
};
