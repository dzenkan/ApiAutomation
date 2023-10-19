const { default: axios } = require("axios");
const { describe,it } = require("mocha");
const expect = require('chai').expect
const { faker } = require('@faker-js/faker');
const createUser = require('../user-utils');

const userToken = require("../userToken");

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/" 








const user = createUser();
 
var token;


describe("delete user",function(){

  before('Should login and get the bearer token',async() => {
    token = await userToken(user)
  })

    it('should be able to delte the user details',async()=>{
        
            const payload = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            try {
              const response = await axios.delete(`${baseUrl}` + "me",
                payload
              );
              expect(response.status).to.be.equal(200);
        
              
            } catch (error) {
              console.log(error);
            }
          
    }).timeout(20000);


    it("should not be able to get user details ", async () => {
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        try {
          const response = await axios.get(`${baseUrl}` + "me",
            payload
          );
        
          
        } catch (error) {
            expect(error.response.status).to.be.equal(401);
        //   console.log(error);
        }
      }).timeout(20000);
})