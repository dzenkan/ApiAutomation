const {default : axios} = require ("axios");
const { describe ,it } = require("mocha");
const  expect  = require ("chai").expect;
const { faker } = require('@faker-js/faker');
const { contactdata, updatedfirstname,updatedphone,loginData}=require("../contact-utils");
const userTokenGenerator = require("../logintoken");






const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/contacts/";






describe("should be able to update the  details", function(){
var token;
var id;
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
      
       id = (response.data[3]._id);
      expect(response.status).to.be.equal(200);
    } catch (error) {
      console.log(error);
    }
  }).timeout(20000)

    it('should be able to update the phone  ', async()=>{
        const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          try {
            const response = await axios.patch(`${baseUrl}${id}`,updatedphone,
              payload
            );
            
            expect(response.data.phone).to.be.equal(updatedphone.phone);
          } catch (error) {
            console.log(error);
          }
        }).timeout(20000)


        it('should be able to update first name', async()=>{
            const payload = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };
              try {
                const response = await axios.patch(`${baseUrl}${id}`,updatedfirstname,
                  payload
                );
                
                expect(response.status).to.be.equal(200);
              } catch (error) {
                console.log(error);
              }
            }).timeout(20000);

    });