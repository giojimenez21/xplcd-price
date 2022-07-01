import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase/firebaseConfig";
import { orderData } from "../adapters/adapter";
import { Footer } from "./Footer";

export const ListaPrecios = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const columns = [
        { field: "MODELO", headerName: "MODELO COMPATIBLE", width: 250 },
        { field: "OR", headerName: "OR", width: 90 },
        { field: "OLED", headerName: "OLED", width: 90 },
        { field: "INCELL", headerName: "INCELL", width: 90 },
        { field: "COF", headerName: "COF", width: 90 },
        { field: "COG", headerName: "COG", width: 90 },
    ];

    useEffect(() => {
        onValue(ref(database), (snapshot) => {
            const data = snapshot.val();
            setItems(orderData(Object.values(data)));
            setLoading(false);
        });
    }, []);

    if(loading){
        return (
            <div className="w-100 h-100 d-flex justify-content-center">
                <div className="lds-dual-ring"></div>
            </div>
        )
    }

    return (
        <>
        <div className="row mb-5 mt-3 animate__animated animate__fadeInUp animate__fast">
            {items.map((item) => {
                return (
                    <div className="col-md-8 col-12 offset-md-2 mb-5">
                        <h2 className="text-center text-primary font-weight-bold">{item.nameBrand}</h2>
                        <div style={{ height: 400, width: "100%" }}>
                            <DataGrid
                                rows={item.products}
                                columns={columns}
                                pageSize={item.products.length > 100 ? 100 : item.products.length}
                                rowsPerPageOptions={[5]}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
        <Footer />
        </>
    );
};
