import {Fragment, useEffect, useState} from "react";
import {deletePost, getPosts} from "../api/postApi";
import {Box, CircularProgress, Container, Pagination, Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Link from "@mui/material/Link";
import {NavLink} from "react-router-dom";
import Parser from 'html-react-parser';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

const Posts = ({category}) => {
    const user = useSelector(state => state.user.user);
    const [posts, setPosts] = useState([]);
    const [pageSize, setPageSize] = useState();
    const dispatcher = useDispatch();
    const {t} = useTranslation();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getPosts()
            .then(({data}) => setPosts(data))
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
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

                                        {category
                                            ?
                                            <>
                                                {post.category === category
                                                &&
                                                <>
                                                    <Link component={NavLink} to={"/post/" + post.id}>
                                                        <h3>{post.title}</h3>
                                                    </Link>
                                                     {post.author} {post.date}

                                                    <Box sx={{mt: "5px"}}>
                                                        <div className="content">{Parser(post.body)}</div>
                                                    </Box>
                                                </>
                                                }
                                            </>
                                            :
                                            <>
                                                <Link component={NavLink} to={"/post/" + post.id}>
                                                    <h3>{post.title}</h3>
                                                </Link>
                                                {post.author} {post.date}

                                                <Box sx={{mt: "5px"}}>
                                                    <div className="content">{Parser(post.body)}</div>
                                                </Box>
                                            </>
                                        }
                                    </>
                                ))}
                        </div>
                }
            </Container>
        </>
    )
}
export default Posts;


