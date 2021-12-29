import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPost} from "../api/postApi";
import {useTranslation} from "react-i18next";
import {Box,CircularProgress, Container} from "@mui/material";

import {getComments} from "../api/commentApi";
import Comment from "../components/forms/Comment";
import Parser from "html-react-parser";


const Post = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const {postId} = useParams();
    const {t} = useTranslation();


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
                                By {post.author} {post.date}
                                <Box sx={{
                                    mt: "5px",
                                    mb: "20px"
                                }}>
                                    {/*<div className="content">{Parser(post.body)}</div>*/}
                                    <div>{post.body}</div>
                                </Box>
                                <Comment postid={postId}/>
                            </>




                }
            </Container>

        </>
    )
}

export default Post;




