import React from "react";
import { CSVLink } from "react-csv";
import * as XLSX from 'xlsx';
import {salesData} from "../data/salesData";
import '../styles/styles.css';

const ExportButtons = () => {
    // EXPORTACION A EXCEL
    const handelExportExcel = () => {
        const ws = XLSX.utils.json_to_sheet(salesData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sales Data');
        XLSX.writeFile(wb, 'sales_data.xlsx');
    };

    return (
        <div className="export-buttons">
            <button onClick={handelExportExcel} className="btn-export">
                Exportar a Excel
            </button>
            <CSVLink data={salesData} filename="sales_data.csv" className="btn-export">
                Exportar a CSV
            </CSVLink>
        </div>
    );
};

export default ExportButtons;
