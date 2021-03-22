import axios from 'axios'

const instance = axios.create({
    baseURL: "https://burger-app-20b68-default-rtdb.firebaseio.com/"
})

export default instance