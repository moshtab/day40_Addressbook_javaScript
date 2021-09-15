const prompt = require('prompt-sync')();
const firstname = prompt('Enter Your FirstName ');
const lastname = prompt('Enter Your Lastname ');
const address = prompt('Enter Your Address ');
const city = prompt('Enter Your City ');
const state = prompt('Enter Your state ');
const zipcode = prompt('Enter Your pincode ');
const phoneNumber = prompt('Enter Your phnumber ');
const email= prompt('Enter Your email');
let addressbook = new Array();
firstName(firstname);
lastName(lastname);
addressF(address);
cityF(city);
stateF(state);
phone(phoneNumber);
emailId(email);
function firstName(firstname){
    const fNameReg = RegExp('^[A-Z][a-z]{2,}$');
    if(fNameReg.test(firstname))
      {
          addressbook.push(firstname);
      }
      else
      {
          console.log("Entered wrong name format");
      }
}
function lastName(lastname){
    const lNameReg = RegExp('^[A-Z][a-z]{2,}$');
    if(lNameReg.test(lastname))
      {
          addressbook.push(lastname);
      }
      else
      {
         console.log("Entered wrong lastname format");
      }
}

function addressF(address){
    const addresspattern = RegExp('^[A-Z][a-z]{3,}$');
    if(addresspattern.test(address))
      {
          addressbook.push(address);
      }
      else
      {
          console.log("Wrong address format");
      }
}

function cityF(city){
    const citypattern = RegExp('^[A-Z][a-z]{3,}$');
    if(citypattern.test(city))
      {
          addressbook.push(city);
      }
      else
      {
          console.log("Wrong city format");
      }
}

function stateF(state){
    const statepattern = RegExp('^[A-Z][a-z]{3,}$');
    if(statepattern.test(state))
      {
          addressbook.push(state);
      }
      else
      {
          console.log("Wrong state format");
      }
    
   
}
function phone(phoneNumber){
    const phonenpattern= RegExp('^(91 )[897][0-9]{9}$');
    
    if(phonenpattern.test(phoneNumber))
    {
        addressbook.push(phoneNumber);
    }
    else
    {
        console.log("Wrong number format");
    }
    
  }
  function emailId(email){
    const emailpattern = RegExp('^([a-zA-Z0-90_.+-]+)@([a-z0-9]+).([a-z]{2,4})(.[a-z]{2,4})?$')
       
    if(emailpattern.test(email))
    {
        addressbook.push(email);
    }
    else
    {
        console.log("Wrong email format");
    }
  }
  console.log(addressbook)
  
  updateName(firstname);
  deleteName(firstName);
  countContacts();
  ViewpersonByCity(city);
  sortAdressbook();
  function updateName(firstname){
      let name = addressbook.filter(name => addressbook.firstname=="Mohsin");
      if(name){
      addressbook[0]='Sumer';
      console.log("First name changed as :"+addressbook[0])
      }else{
          console.log("Name not found");
      }
      
    }

    function deleteName(firstname){
        let name = addressbook.filter(name => addressbook.firstname=="Mohsin");
        if(name){
            addressbook[0]='';
            console.log("Deleted firstname :"+addressbook[0]);
        }else{
            console.log("Name not found");
        }
    }
    function countContacts(){
        let count = addressbook.length
        console.log("Number of contacts :"+count);
    }
    function ViewpersonByCity(city){
        let cityname =addressbook.filter(cities => cities.city=='Metpally');
        if(city){
            console.log(addressbook[0]);
        }else{
            console.log("No city found")
        }
    }
    function sortAdressbook(){
        let addressbookSort = addressbook.sort;
        console.log(" soerted addressbook is :"+addressbookSort);
    }
    console.log(addressbook);

