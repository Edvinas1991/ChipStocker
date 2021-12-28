import {useEffect, useState} from "react";
import {getPosts} from "../api/postApi";
import {Box, CircularProgress, Container, Pagination} from "@mui/material";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import Link from "@mui/material/Link";
import {NavLink} from "react-router-dom";


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageSize, setPageSize] = useState();
    const dispatcher = useDispatch();



    const {t} = useTranslation();

    useEffect(() => {
        getPosts()
            .then(({data}) => setPosts(data))
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
                console.log(posts.length)

            });

    }, []);

    return (
        <>
            <Container maxWidth="md" sx={{my: 2}}>
                {
                    loading ?
                        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                            <CircularProgress/>
                        </Box>
                        :
                        <div>


                            {

                                posts.map((post) => (
                                    <>
                                        <Link component={NavLink} to={"/post/" + post.id}>
                                            <h3>{post.title}</h3>
                                        </Link>
                                        By {post.author} {post.date}
                                        <Box sx={{mt: "5px"}}>{post.body}</Box>
                                    </>
                                ))}
                        </div>

                }
            </Container>

            <Box display="flex" justifyContent="center" alignItems="center">
                <Pagination count={posts.length}/>
            </Box>
        </>
    )
}

export default Posts;


