const { default: axios } = require("axios");
const { describe,it } = require("mocha");
const expect = require('chai').expect
const { faker } = require('@faker-js/faker');
const createUser = require('../user-utils');
const userToken = require("../userToken");



const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/" 





 const updatedName = faker.person.firstName(); 






let user = createUser();

const updateFirstName = ()=>{
    const updatedData={

    firstName: updatedName,
    
}
   
    
  
   return updatedData;
};



const update = updateFirstName();

describe("update user test", () => {
  let token;

  before('Should login and get the bearer token',async() => {
    token = await userToken(user)
  })

  

  it("should be able to  update the first name ", async () => {
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.patch(`${baseUrl}` + "me",update,
        payload
      );
      expect(response.status).to.be.equal(200);

      
    } catch (error) {
      console.log(error);
    }
  }).timeout(30000);


  it("test the updated name  is correct  ", async () => {
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.patch(`${baseUrl}` + "me",update,
        payload
      );
      expect(response.data.firstName).to.be.equal(updatedName);
      
    } catch (error) {
      console.log(error);
    }
  }).timeout(30000);

 

})