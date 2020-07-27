import axios from 'axios'

const AxiosWithAuth = () => {
   const token = localStorage.getItem("token");
   return axios.create({
     headers: {
       Authorization: token,
     },
      baseURL: 'https://lambdaschool-cookbook2.herokuapp.com'
   })
}
export default AxiosWithAuth