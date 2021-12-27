import {useEffect, useState} from "react";
import {getProducts} from "../api/productApi";
import {Box, Container} from "@mui/material";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";



const Posts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const dispatcher = useDispatch();


    const {t} = useTranslation();

    useEffect(() => {
        getProducts()
            .then(({data}) => setProducts(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>

            <Container maxWidth="md" sx={{my: 2}}>
<Box sx={{bgcolor: 'white',maxHeight: '300px'}}>

      products
</Box>


                {/*{*/}
                {/*    loading ?*/}
                {/*        <Box sx={{display: 'flex', justifyContent: 'center'}}>*/}
                {/*            <CircularProgress/>*/}
                {/*        </Box>*/}
                {/*        :*/}
                {/*        <TableContainer component={Paper}>*/}
                {/*            <Table sx={{minWidth: 100}} aria-label="simple table">*/}
                {/*                <TableHead>*/}
                {/*                    <TableRow>*/}
                {/*                        <TableCell>{t('name')}</TableCell>*/}
                {/*                        <TableCell align="right">Category</TableCell>*/}
                {/*                        <TableCell align="right">Description</TableCell>*/}
                {/*                        <TableCell align="right">Quantity</TableCell>*/}
                {/*                        <TableCell align="right">Price</TableCell>*/}
                {/*                        <TableCell></TableCell>*/}
                {/*                    </TableRow>*/}
                {/*                </TableHead>*/}
                {/*                <TableBody>*/}
                {/*                    {products.map((product) => (*/}
                {/*                        <TableRow*/}
                {/*                            key={product.id}*/}
                {/*                            sx={{'&:last-child td, &:last-child th': {border: 0}}}*/}
                {/*                        >*/}
                {/*                            <TableCell component="th" scope="row">*/}
                {/*                                {product.name}*/}
                {/*                            </TableCell>*/}
                {/*                            <TableCell align="right">{product.category}</TableCell>*/}
                {/*                            <TableCell align="right">{product.description}</TableCell>*/}
                {/*                            <TableCell align="right">{product.quantity}</TableCell>*/}
                {/*                            <TableCell align="right">{product.price}</TableCell>*/}
                {/*                            <TableCell>*/}
                {/*                                <Button variant="outlined" > /!*onlick*!/*/}

                {/*                                    <AddShoppingCartIcon/>*/}
                {/*                                </Button>*/}
                {/*                            </TableCell>*/}
                {/*                        </TableRow>*/}
                {/*                    ))}*/}
                {/*                </TableBody>*/}
                {/*            </Table>*/}
                {/*        </TableContainer>*/}
                {/*}*/}
            </Container>

        </>
    )
}

export default Posts;