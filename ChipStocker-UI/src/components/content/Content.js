import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import Header from "../header/Header";
import {Route, Routes} from "react-router-dom";
import Posts from "../../page/Posts";
import SecuredRoute from "../security/SecuredRoute";
import RegistrationForm from "../forms/RegistrationForm";
import Login from "../forms/Login";
import {Container} from "@mui/material";
import Contact from "../../page/Contact";
import About from "../../page/About";
import PostForm from "../forms/PostForm";


export default () => {
    return (
        <>

                <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
                <CssBaseline/>
                <Container style={{
                    minHeight: 600
                }}>
                    <Routes>
                        <Route path="/" element={<Posts/>}/>
                        <Route path="/createpost" element={<PostForm/>}/>

                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>

                        {/*<Route path="/products/create" element={<SecuredRoute/>}>*/}
                        {/*    <Route path="/products/create" element={<Product/>}/>*/}
                        {/*</Route>*/}

                        <Route path="/users/registration" element={<SecuredRoute roles={['ADMIN']}/>}>
                            <Route path="/users/registration" element={<RegistrationForm/>}/>
                        </Route>

                        <Route path="/login" element={<Login/>}/>
                    </Routes>

                </Container>



        </>
    )
}