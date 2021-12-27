import React from 'react'
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import Container from "@mui/material/Container";
import store from "./store/store";
import {Provider} from "react-redux";
import ContentN from "./components/content/Content";
import Box from "@mui/material/Box";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
    return (
        <Provider store={store}>
            <Container>
                <BrowserRouter>

                    <Box
                        sx={{
                            margin: '2%',
                            display: 'flex',
                            borderRadius: '12px',
                            background: '#f0f5f9'
                        }}>

                        <Box
                            sx={{
                                minWidth: '250px',
                                minHeight: '800px',
                                background: "#8a91d5",
                                borderRadius: '12px'
                            }}>
                        <Menu/>
                        </Box>

                        <div style={{ width: '100%' }}>
                            <Box
                                sx={{
                                    display: 'block',
                                    p: 1,
                                    m: 1,
                                }}
                            >
                                <Header/>
                            </Box>
                            <Box
                                sx={{
                                    display: 'block',
                                    p: 1,
                                    m: 1,
                                }}
                            >
                               <ContentN/>
                            </Box>
                        </div>
                </Box>
                <Footer/>
            </BrowserRouter>
        </Container>
</Provider>
);
}

export default App;
