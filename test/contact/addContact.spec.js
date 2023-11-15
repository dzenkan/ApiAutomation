const {default : axios} = require ("axios");
const { describe ,it } = require("mocha");
const  expect  = require ("chai").expect;
const { faker } = require('@faker-js/faker');
const { contactdata, updatedfirstname,updatedphone,loginData}=require("../contact-utils");
const userTokenGenerator = require("../logintoken");





const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/contacts";




describe("test login",function(){
    var token;

    

    before('Should login and get the bearer token',async() => {
      token = await userTokenGenerator()
  })

    it("should be able to create contact  details ", async () => {
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        try {
          const response = await axios.post(`${baseUrl}` ,contactdata,
            payload
          );
          
          expect(response.status).to.be.equal(201);
        } catch (error) {
          console.log(error);
        }
      }).timeout(20000);


      it("check that the contact details are correct  ", async () => {
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        try {
          const response = await axios.post(`${baseUrl}` ,contactdata,
            payload
          );
          
          expect(response.data.firstName).to.be.equal(contactdata.firstName);
        } catch (error) {
          console.log(error);
        }
      }).timeout(20000);

      it("check that the contact details are correct  ", async () => {
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        try {
          const response = await axios.post(`${baseUrl}` ,contactdata,
            payload
          );
          
          expect(response.data.lastName).to.be.equal(contactdata.lastName);
        } catch (error) {
          console.log(error);
        }
      }).timeout(20000);


   
});