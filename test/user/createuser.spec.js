const { default: axios } = require("axios");
const { describe,it } = require("mocha");
const expect = require('chai').expect
const { faker } = require('@faker-js/faker');
const createUser = require('../user-utils');

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/" 







const user = createUser();

describe("create user test", () => {
  let token;

  it("should be able to add uuser succesfully ", async () => {
    try {
      
     
      const response = await axios.post(
        baseUrl,
        user
      );
        
      token = response.data.token;
     
      expect(response.data).to.not.be.empty;
        expect(response.status).to.equal(201);

    } catch (error) {
      console.error(error);
    }
  }).timeout(20000);

  it("send authentication error for using same email ", async () => {
    try {
    
      const response = await axios.post(
        baseUrl,
        user
      );
        
      token = response.data.token;
    

    } catch (error) {
        expect(error.response.status).to.equal(400);
        
    }
  }).timeout(20000);

});
