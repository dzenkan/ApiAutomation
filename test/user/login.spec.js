const { default: axios } = require("axios");
const { describe,it } = require("mocha");
const expect = require('chai').expect
const { faker } = require('@faker-js/faker');
const userToken = require("../userToken");
const createUser = require('../user-utils');
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



let token;




  describe("test login", () => {

    before('Should login and get the bearer token',async() => {
      token = await userToken(user)
    })

    it(" should be able able to login ",async()=>{
        
           
            try {
              const response = await axios.post(`${baseUrl}` + "login",
                loginData
              );
            
            
              expect(response.status).to.be.equal(200);
            } catch (error) {
              console.log(error);
            }
         
    }).timeout(20000);


    it("test the firstname  is correct  ", async () => {
        
        try {
          const response = await axios.post(`${baseUrl}` + "login",
            loginData
          );
          
          const firstName = response.data.user.firstName;

          expect(firstName).to.be.equal(user.firstName);
          
        } catch (error) {
          console.log(error);
        }
      }).timeout(20000);

      it("should show error when enterd wrong email  ", async () => {
        
        try {
          const response = await axios.post(`${baseUrl}` + "login",
            wrongloginData
          );
          
          
        } catch (error) {
            expect(error.response.status).to.be.equal(401);
        
        }
      }).timeout(20000);
})