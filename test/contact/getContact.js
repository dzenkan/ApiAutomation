const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const expect = require("chai").expect;
const { faker } = require("@faker-js/faker");

const userTokenGenerator = require("../logintoken");




const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/contacts/";







describe("test get contact details", function () {

   let id;
    let token
    before('Should login and get the bearer token',async() => {
        token = await userTokenGenerator()
    })

    it('should be able to get contact id  ', async()=>{
      const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        try {
          const response = await axios.get(`${baseUrl}` ,
            payload
          );
          
           id = (response.data[2]._id);
          expect(response.status).to.be.equal(200);
        } catch (error) {
          console.log(error);
        }
      }).timeout(20000);
   
  it("contact details should not be empty ", async () => {
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        `${baseUrl}${id}` ,
        payload
      );
      
      expect(response.data).not.to.be.empty;
    } catch (error) {
       console.log(error);
    }
  }).timeout(20000);

  it("should be able to get contact details ", async () => {
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        `${baseUrl}${id}`,
        payload
      );
      
      expect(response.status).to.be.equal(200);
    } catch (error) {
        console.log(error);
    }
  }).timeout(20000);
});
