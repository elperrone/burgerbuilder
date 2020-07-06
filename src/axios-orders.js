import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burgerbuilder-d0dcc.firebaseio.com/'
})

export default instance