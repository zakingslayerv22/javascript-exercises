const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


  
//  function oldest(array) {
     
//      let oldest = array.reduce((age, person) => {
//         person.yearOfBirth - person.yearOfDeath;  
//      });
//      return oldest;
 
//  };

//  console.log(oldest(people));

//  let theWait = people.map(item => console.log(item.yearOfDeath - item.yearOfBirth))

//  function waiter(array) {
//      let ages = array.map(item => (item.yearOfDeath - item.yearOfBirth));
//      return ages;
//  }

//  console.log(waiter(people));


//finds the person with the greatest age!
 function oldestPersonOne(array) {
  let oldestPerson = {};
     array.reduce((previous, current) => {

      
      let currentAge = current.yearOfDeath - current.yearOfBirth;
    
      // console.log(currentAge)
      if (currentAge > previous) {

        // console.log(`${previous} ${currentAge}`)

        //this current that is set here is the last current that 
        //passed the if statement check, not the general current 
        //of the array.reduce(). the last general current of 
        //the array.reduce() does not pass if statement test 
        //so the it does not get into the if statement and the 
        //if statement is sticking with the last current that passed
        //the if statement test. Same thing with the currentAge variable
        //The return statement is returning the last current age
        //that passed the if statement test.

        oldestPerson = current;
        //by returning current age, you're setting it as the
        //highest age until another age is higher than it?
        //any age that is not higher than it wont get into this 
        //if block

        //you are returning the current age that currently is the oldest
        //age until another one replaces it through the function call
        
        //if you don't return currentAge, each time the if statement
        //is passed, it will return the first age that passes 
        //the if statement test
        return currentAge;
        
        
      } 
    }, 0)

    return oldestPerson
 }

 console.log(oldestPersonOne(people));


//finds the person with the greatest age if someone is still living
 const peopleTwo = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

//finds the person with the greatest age if the OLDEST is still living
const peopleThree = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

 function oldestPersonTwo(array) {
  let oldestPerson = {};
    array.reduce((previous, current) => {

    if (!current.yearOfDeath) {
      current.yearOfDeath = new Date().getFullYear();
    }

    let currentAge = current.yearOfDeath - current.yearOfBirth;

      if (currentAge > previous) {
        oldestPerson = current;
        return currentAge;
      } 
    }, 0)

    return oldestPerson
 }

 console.log(oldestPersonTwo(peopleTwo));
 console.log(oldestPersonTwo(peopleThree));