import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Product from "../forms/Product";
import {Route, Routes} from "react-router-dom";
import Products from "../../page/Products";
import RegistrationForm from "../forms/RegistrationForm";



export default () => {
    return (
        <>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <CssBaseline/>
            <div style={{
                minHeight: 600,
                backgroundColor: '#f8f9fa',
            }}>
                <Routes >
                    <Route path="/" element={<Products/>}/>
                    <Route path="/products/create" element={<Product/>} />
                    <Route path="/users/registration" element={<RegistrationForm/>}/>
                </Routes>

            </div>

        </>
    )
}