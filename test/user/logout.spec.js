const { default: axios } = require("axios");
const { describe,it } = require("mocha");
const expect = require('chai').expect
const { faker } = require('@faker-js/faker');
const createUser = require('../user-utils');

const userToken = require("../userToken");
const logintoken = require("../loginData.json");



const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/" 





let user = createUser();

const loginData = {
     email: user.email,
    password: logintoken.validpassword
    
  };


const wrongloginData = {
  email: logintoken.invalidemail,
 password: logintoken.invalidpassword
 
};

var token;


 


describe("test login",function(){


  before('Should login and get the bearer token',async() => {
    token = await userToken(user)
  })


    it(" should be able able to login ",async()=>{
        
           
            try {
              const response = await axios.post(`${baseUrl}` + "login",
                loginData
              );
            //   console.log(response.data);
            
              expect(response.status).to.be.equal(200);
            } catch (error) {
              console.log(error);
            }
         
    }).timeout(20000);
});


describe("test logout",function(){
    it(" should be able able to logout ",async()=>{
        
            const payload = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };

        
           
            try {
              const response = await axios.post(`${baseUrl}` + "logout",null,
                payload
              );
            //   console.log(response.data);
            
              expect(response.status).to.be.equal(200);
            } catch (error) {
              console.log(error);
            }
         
    }).timeout(20000);
});