import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

//COMPONENTES//
import { ReportApp } from './reports/report'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ReportApp />
    </React.StrictMode>
);