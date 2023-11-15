     

const { default: axios } = require("axios");
const { describe,it } = require("mocha");
const expect = require('chai').expect
const { faker } = require('@faker-js/faker');
const userToken = require("../userToken");
const createUser = require('../user-utils');



const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/" 








let token;
let user = createUser();


describe("get uuser test",function(){

  before('Should login and get the bearer token',async() => {
    token = await userToken(user)
    // console.log(token);
    

})
  it("should be able to get user details ", async () => {
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
   
    try {
      const response = await axios.get(`${baseUrl}` + "me",
        payload
      );
    //   console.log(response.data);
      expect(response.status).to.be.equal(200);
    } catch (error) {
      console.log(error);
    }
  }).timeout(20000);


  it("test the name details are correct  ", async () => {
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(`${baseUrl}` + "me",
        payload
      );
      expect(response.data.firstName).to.be.equal(user.firstName);
      
    } catch (error) {
      console.log(error);
    }
  }).timeout(20000);


  it("test the email is correct  ", async () => {
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(`${baseUrl}` + "me",
        payload
      );
      expect(response.data.email).to.be.equal(user.email);
      
    } catch (error) {
      console.log(error);
    }
  }).timeout(20000);

  


});






