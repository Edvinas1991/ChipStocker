import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {deletePost, getPost} from "../api/postApi";
import {useTranslation} from "react-i18next";
import {Box, CircularProgress, Container, Stack} from "@mui/material";

import {getComments} from "../api/commentApi";
import Comment from "../components/forms/Comment";
import Parser from "html-react-parser";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useSelector} from "react-redux";

const Post = () => {
    const user = useSelector(state => state.user.user);
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const {postId} = useParams();
    const {t} = useTranslation();
    const navigation = useNavigate();
    const [response, setResponse] = useState([]);

    useEffect(() => {
            getPost(postId)
                .then(({data}) => {
                    setPost(data);
                    console.log(data);
                })
                .catch((error) => console.log(error))
                .finally(() =>
                    setLoading(false));
        }
        , []);

    const onPostDelete = () => {
        deletePost(postId)
            .then(({data}) => {
                setResponse(data);
            })
            .catch((error) => console.log(error))
            .finally(() =>{
                navigation('/');
            })
    };
    return (
        <>
            <Container maxWidth="md" sx={{my: 2}}>
                {
                    loading ?
                        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                            <CircularProgress/>
                        </Box>
                        :
                            <>
                                <h3>{post.title}</h3>

                                <Stack direction="row" alignItems="center" gap={1} sx={{mt: "15px"}}>
                                    <>
                                         {post.author} {post.date}
                                        {user &&
                                        <>
                                            {
                                                user.roles.includes('ADMIN') &&
                                                <>

                                                    <IconButton size={"small"} aria-label="delete" component={NavLink} to={"/createpost/" + post.id}>
                                                        <EditIcon style={{color: "black"}}/>
                                                    </IconButton>

                                                    <IconButton size={"small"} aria-label="delete" onClick={onPostDelete}>
                                                        <DeleteIcon style={{color: "red"}}/>
                                                    </IconButton>
                                                </>
                                            }
                                        </>
                                        }
                                    </>
                                </Stack>
                                <Box sx={{
                                    mt: "5px",
                                    mb: "20px"
                                }}>
                                    <div className="content">{Parser(post.body)}</div>
                                </Box>
                                <Comment postid={postId}/>
                            </>
                }
            </Container>

        </>
    )
}

export default Post;




