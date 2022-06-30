import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase/firebaseConfig";
import { orderData } from "../adapters/adapter";

export const ListaPrecios = () => {
    const [items, setItems] = useState([]);
    const columns = [
        { field: "MODELO", headerName: "MODELO", width: 250 },
        { field: "OR", headerName: "OR", width: 90 },
        { field: "OLED", headerName: "OLED", width: 90 },
        { field: "INCELL", headerName: "INCELL", width: 90 },
        { field: "COF", headerName: "COF", width: 90 },
        { field: "COG", headerName: "COG", width: 90 },
    ];

    useEffect(() => {
        onValue(ref(database), (snapshot) => {
            const data = snapshot.val();
            setItems(orderData(data));
        });
    }, []);

    return (
        <div className="row mb-5 mt-3">
            {items.map((item) => {
                return (
                    <div className="col-md-8 col-12 offset-md-2 mb-5">
                        <h2 className="text-center text-primary font-weight-bold">{item.nameBrand}</h2>
                        <div style={{ height: 400, width: "100%" }}>
                            <DataGrid
                                rows={item.products}
                                columns={columns}
                                pageSize={item.products.length > 100 ? 30 : item.products.length}
                                rowsPerPageOptions={[5]}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
