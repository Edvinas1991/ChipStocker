import axios from "axios";
import store from "../store/store";

const HTTP = axios.create({
   baseURL: '/api'
});

HTTP.interceptors.request.use(config => {
   const token = store.getState().user.jwtToken;
   console.log('token '+ token);

   if (token) {
      config.headers.authorization = 'Bearer ' + token;
   }
   console.log('config trigered');
   return config;
});

export default HTTP;