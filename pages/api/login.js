import axios from 'axios';
const loginAPI = (username, pass) => {
    return axios.get('https://flutter.smarttersstudio.com/test/login.php?user='+username+"&pass="+pass).then((response) =>{
        return {
            data: response.data
        };
    }).catch((error) => {
        return {
            data: 'Some error occured'
        };
    });
};
export default loginAPI;