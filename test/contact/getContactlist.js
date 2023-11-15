const {default : axios} = require ("axios");
const { describe ,it } = require("mocha");
const  expect  = require ("chai").expect;
const { faker } = require('@faker-js/faker');
const userTokenGenerator = require("../logintoken");




const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/contacts";







describe("test  contactlist ", function(){

  let token
    before('Should login and get the bearer token',async() => {
        token = await userTokenGenerator()
    })

    it('contact list should not be empty ', async()=>{
        const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          try {
            const response = await axios.get(`${baseUrl}` ,
              payload
            );
            
            expect(response.data).not.to.be.empty;
          } catch (error) {
            console.log(error);
          }
        }).timeout(20000)

    it('should be able to get contact list  ', async()=>{
        const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          try {
            const response = await axios.get(`${baseUrl}` ,
              payload
            );
           
            expect(response.status).to.be.equal(200);
          } catch (error) {
            console.log(error);
          }
        }).timeout(20000)

    });