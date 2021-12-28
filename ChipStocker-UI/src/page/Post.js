import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPost} from "../api/postApi";
import {useTranslation} from "react-i18next";
import {Box, Button, CircularProgress, Container, TextField} from "@mui/material";
import Link from "@mui/material/Link";



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
            .finally(() => setLoading(false));
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



                                    <>
                                        <h3>{post.title}</h3>
                                        By {post.author} {post.date}
                                        <Box sx={{mt: "5px"}}>{post.body}</Box>

                                        <Box sx={{mt: "10px"}}>
                                            <h4>Leave a Reply</h4>
                                            Comment
                                            <TextField
                                                sx={{
                                                    width: "100%"
                                                }}
                                                size="small"
                                                multiline
                                                rows={4}
                                                placeholder="Write comment"
                                            />
                                            Name
                                            <TextField
                                                size="small"
                                                sx={{
                                                    width: "100%"
                                                }}
                                                placeholder="Write name"
                                            />
                                            Email
                                            <TextField
                                                size="small"
                                                sx={{
                                                    width: "100%"
                                                }}
                                                placeholder="Write email"
                                            />

                                         <Button
                                            sx={{mt: "10px"}}
                                            variant="outlined"
                                            type="submit">Send</Button>
                                        </Box>
                                    </>

                        </div>

                }
            </Container>

        </>
    )
}

export default Post;




