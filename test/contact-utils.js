const { faker } = require('@faker-js/faker');
const {default : axios} = require ("axios");




const randomName = faker.person.firstName('male')
const randomlastName = faker.person.lastName()
const randomEmail = faker.internet.email()
// const randomPhone = faker.phone.number(10)

const loginData = {
    email: "raaaj@gmail.com",
   password: "raaaj123"
   
 };

const addconatct= async()=>{
    var token;
        const response = await axios.post("https://thinking-tester-contact-list.herokuapp.com/users/login",
          loginData
        );
       
       token = response.data.token;
       return token;
        
     
      


}

    const contactdata = {
    
        firstName: randomName,
        lastName: randomlastName,
        birthdate: "1970-01-01",
        email: randomEmail,
        phone: "90876543678",
        street1: "1 Main St.",
        street2: "Apartment A",
        city: "Anytown",
        stateProvince: "KS",
        postalCode: "12345",
        country: "USA"
    
 }

 const updatedfirstname ={
    firstName: "updated_name"
 }

 const updatedphone ={
    phone: "0000000000"
 }

 
    
         
          
           
        
 

 module.exports = { addconatct, contactdata, updatedfirstname,updatedphone,loginData };







