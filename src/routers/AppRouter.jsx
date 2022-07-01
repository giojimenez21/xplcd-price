import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ListaPrecios } from "../components/PriceList";
import { PromoList } from "../components/PromoList";

export const AppRouter = () => {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Navigate to="/listaprecios" />}/>
                    <Route path="/listaprecios" element={<ListaPrecios />} />
                    <Route path="/promociones" element={<PromoList />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
            
        </div>
    );
};
