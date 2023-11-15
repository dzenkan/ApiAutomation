const {default : axios} = require ("axios");
const { describe ,it } = require("mocha");
const  expect  = require ("chai").expect;
const { faker } = require('@faker-js/faker');
const userTokenGenerator = require("../logintoken");






const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/contacts/";


 var id ;



var token;
describe("test login",function(){
    

   

    
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
            
             id = (response.data[0]._id);
            expect(response.status).to.be.equal(200);
          } catch (error) {
            console.log(error);
          }
        }).timeout(20000);



});

describe("test  delete contact ", function(){
    it('should be able to delte the contact ', async()=>{
        const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          try {
            const response = await axios.delete(`${baseUrl}${id}`,
              payload
            );
            
            expect(response.status).to.be.equal(200);
          } catch (error) {
            console.log(error);
          }
        }).timeout(20000);

        it('should shows error when try to delte the same contact ', async()=>{
            const payload = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };
              try {
                const response = await axios.delete(`${baseUrl}${id}`,
                  payload
                );
                
                
              } catch (error) {
                 expect(error.response.status).to.be.equal(404);

                
              }
            }).timeout(20000);

    });