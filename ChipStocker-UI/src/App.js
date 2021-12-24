import React from 'react'
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import Container from "@mui/material/Container";
import store from "./store/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
        <Container>
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </BrowserRouter>
        </Container>
        </Provider>
    );
}

export default App;
