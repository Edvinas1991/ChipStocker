import HTTP from "./index";

const getPosts = () => HTTP.get('/posts')
const getPost = (id) => HTTP.get('/posts/'+id);
const deletePost = (id) => HTTP.delete('/posts/'+id);
const updatePost = (id,data) => HTTP.put('/posts/'+id,data);
const addPost = (data) => HTTP.post('/posts',data);

export {getPosts,getPost,deletePost,addPost,updatePost}