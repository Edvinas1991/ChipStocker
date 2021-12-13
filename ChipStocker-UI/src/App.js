import React from 'react'
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import Container from "@mui/material/Container";

function App() {
    return (
        <Container>
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </BrowserRouter>
        </Container>

    );
}

export default App;
