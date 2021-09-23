import axios from 'axios';
const registerAPI = (firstname,lastname, email,phone,gender, pass) => {
    return axios.get('https://flutter.smarttersstudio.com/test/signup.php?gender='+gender+'&name='+firstname+' '+lastname+'&email='+email+'&phone='+phone+'&password='+pass).then((response) =>{
        return {
            data: response.data
        };
    }).catch((error) => {
        return {
            data: 'Some error occured'
        };
    });
};
export default registerAPI;