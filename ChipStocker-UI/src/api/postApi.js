import HTTP from "./index";

const getPosts = () => HTTP.get('/posts')
const getPost = (id) => HTTP.get('/posts/'+id);
export {getPosts,getPost}