import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import Container from "@mui/material/Container";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default () => {

    return (

            <Container>
                <Copyright sx={{mt: 5}}/>
            </Container>
    )
}