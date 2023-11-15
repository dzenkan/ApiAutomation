const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/" 
const axios = require('axios');
const createUser = require('./user-utils');






async function userToken(user) {
    
        
        // console.log(user)
        const response = await axios.post(
          baseUrl,
          user
        );
          // console.log(response.data)
        token = response.data.token;
        //  console.log(token);
        return token
     
}

module.exports = userToken

