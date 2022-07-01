import { DataGrid } from "@mui/x-data-grid";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { orderDataPromo } from "../adapters/adapter";
import { database } from "../firebase/firebaseConfig";
import { Footer } from "./Footer";

export const PromoList = () => {
    const [promos, setPromos] = useState([]);
    const [loading, setLoading] = useState(true);
    const columns = [
        { field: "modelo", headerName: "MODELO", width: 170 },
        { field: "precio", headerName: "PRECIO", width: 100 },
        { field: "preciopromocion", headerName: "PRECIO X2", width: 155 },
    ];

    useEffect(() => {
        onValue(ref(database, 'promociones'), (snapshot) => {
            const data = snapshot.val();
            setPromos(orderDataPromo(data));
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
            {promos.map((promo) => {
                return (
                    <div className="col-md-5 col-12 offset-md-3 mb-5">
                        <h2 className="text-center text-primary font-weight-bold">{promo.nameBrand}</h2>
                        <div style={{ height: 400, width: "100%" }}>
                            <DataGrid
                                rows={promo.products}
                                columns={columns}
                                pageSize={promo.products.length > 100 ? 100 : promo.products.length}
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
