'use strict'
// REVEALING  MODULE PATTERN
/* The revealing module pattern is engineered as a way to ensure
that all methods and variables are kept private until they are explicitly exposed;
usually through an object literal returned by the closure from which it's defined. */

let dogsShelter = (function(){
    let dogsLedger = {
        "puppy":"arun",
        "johny":"ashok",
        "rossy":"sethuram",
        "dabour":"rasak"
    };


   // METHOD TO CHECK THE DOG IN THE SHELTER
  function findMyDog(dogName, owner){
     if (dogsLedger[dogName]===owner){
         console.log(`Hi ${owner}, your dog ${dogName} is safe here and you can take your dog to your home if you wish.`);

     } else if(dogsLedger[dogName]){
         console.log(`Hi ${owner}, sorry we have a dog on that name ${dogName} but the owner is different.`);
     } else {
         console.log(`we don't have any dog on that name ${dogName} in our shelter.`);
     }
    
  }
  
  // METHOD TO TAKE YOUR DOG FROM SHELTER
  function takeDogHome(dogName, owner){
    if (dogsLedger[dogName]===owner){
       delete dogsLedger[dogName];
       console.log(`dog ${dogName} has been taken to home by it's owner ${owner}.`);

     } else if(dogsLedger[dogName]){
         console.log(`Hi ${owner}, sorry we have a dog on that name ${dogName} but the owner is different.`);
     } else {
         console.log(`we don't have any dog on that name ${dogName} in our shelter.`);
     }
      
  }

  // METHOD TO ADMITT YOUR DOG IN DOG SHELTER
  function admittMyDog(dogName, owner){
      dogsLedger[dogName]=owner;
      console.log(`Hey, your dog ${dogName} has been successfully admitted in our shelter, we take care of your dog.`)
  }

  // RETURNING OBJECT
   
  
  return  {
       findMyDog : findMyDog,
       takeDogHome : takeDogHome,
       admittMyDog :admittMyDog
 };

}())