import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = 'https://builder-6d74a-default-rtdb.firebaseio.com';

export default instance;