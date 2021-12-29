import HTTP from "./index";

const getPosts = () => HTTP.get('/posts')
const getPost = (id) => HTTP.get('/posts/'+id);
const addPost = (data) => HTTP.post('/posts',data);

export {getPosts,getPost,addPost}