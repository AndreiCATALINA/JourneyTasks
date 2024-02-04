import {firstNames, lastNames, jobs} from "./data.js";

function phoneNumberGenerator() {
    var number = Math.floor(Math.random() * 900000000);
    return "+" + number;
  }
  //console.log(phoneNumberGenerator())

  function emailGenerator(firstNames, lastNames) {
    var email = firstNames.toLowerCase() + '.' + lastNames.toLowerCase() + '@gmail.com';
    return email;
  }

 //console.log(emailGenerator("Iohanis","Pamul"))
  
 function randomFromList(array) {
 
  let randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}
 //console.log(randomFromList(["a","b","c","d"]))
let firstName = randomFromList(firstNames)
let lastName = randomFromList(lastNames)
let job = randomFromList(jobs)
let phone = phoneNumberGenerator()
let email = emailGenerator(firstName,lastName)

function profileGenerator(firstName,lastName,job,phone,email){
  let profile = {
    neme: {
      first: firstName,
      last: lastName
    },
    job: job,
    phone: phone,
    email: email

  };
  return profile
}
// console.log(profileGenerator(
//   firstName,
//   lastName,
//   job,
//   phone,
//   email
// ))

let fakeProfiles = []
firstNames.forEach(value => {
 let profile = profileGenerator(firstName,lastName,job,phone, email)
 fakeProfiles.push(profile)
});

console.log(fakeProfiles.length)





// DO NOT MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
    toExport = [
        { name: "phoneNumberGenerator", content: phoneNumberGenerator, type: "function" },
        { name: "emailGenerator", content: emailGenerator, type: "function" },
        { name: "randomFromList", content: randomFromList, type: "function" },
        { name: "profileGenerator", content: profileGenerator, type: "function" },
        { name: "fakeProfiles", content: fakeProfiles, type: "array" },
    ]
} catch (error) {
    toExport = { error: error.message }
}

export { toExport }
