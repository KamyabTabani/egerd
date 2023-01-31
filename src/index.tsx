import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/libraries/bootstrap-rtl.css";
import {ChakraProvider} from '@chakra-ui/react'
import PageRoutes from "./routes/pageroutes";
import "./index.scss"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <PageRoutes/>
        </ChakraProvider>
    </React.StrictMode>
);
