//nested objects and arrays
var person = {
    name: 'ABC',
    gender: 'Female',
    age: 22,
    hobbies: ['dancing', 'painting', 'drawing'],
    address: {
        street: 102,
        place : 'Bangalore'
    }, 

    education : [
        {
            degree : 'graduation ',
            yearOfPassing: 2010,
            
        },
        {
            degree: 'masters',
            yearOfPassing: 2015,
            
        },
        {
            degree : 'phd',
            yearOfPassing: 2020,
            
        }
    ],
    friends: [
        {
            name:'def',
            gender: 'female'
        },
        {
            name:'ghi',
            gender: 'female'
        }
    ]
}

//Reading properties
console.log("Person: ",person);
console.log("Name: ",person.name);
console.log("Hobby 1: ",person.hobbies[1]);
// console.log("Hobby 1: ",person['hobbies'][1]);
console.log("Address-Street:",person.address.street);
// can also be written as:
// console.log("Address-Street:",person.address['street']);
// console.log("Address-Street:",person['address'].street);
console.log("Education: ",person.education[1].yearOfPassing);