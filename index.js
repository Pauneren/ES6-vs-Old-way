//The old Javascript is supported by more browsers, son I will write the difference in this file showing the new version and the old version,
//To translate or transpile the code it is useful to use a translator to change it to the old version so the code is available in more browsers.

//Old Javascript == use var to create a variable
var personas = [
  {
    name: "Jonas O' Kelleher",
    birth_date: "10/26/1972",
    children: 4,
    country: "China",
    can_program: true,
  },
  {
    name: "Carlen Thake",
    birth_date: "8/7/1996",
    children: 5,
    country: "Portugal",
    can_program: true,
  },
  {
    name: "Christen Swinfon",
    birth_date: "9/4/1991",
    children: 1,
    country: "Mexico",
    can_program: false,
  },
  {
    name: "Winny Serjeant",
    birth_date: "10/6/1991",
    children: 0,
    country: "Indonesia",
    can_program: false,
  },

];

///new javascript
const people = [
  {
    name: "Jonas O' Kelleher",
    birth_date: "10/26/1972",
    children: 4,
    country: "China",
    can_program: true,
  },
  {
    name: "Carlen Thake",
    birth_date: "8/7/1996",
    children: 5,
    country: "Portugal",
    can_program: true,
  },
  {
    name: "Christen Swinfon",
    birth_date: "9/4/1991",
    children: 1,
    country: "Mexico",
    can_program: false,
  },
  {
    name: "Winny Serjeant",
    birth_date: "10/6/1991",
    children: 0,
    country: "Indonesia",
    can_program: false,
  },
  {
    name: "Ronald Azemar",
    birth_date: "1/21/1977",
    children: 1,
    country: "China",
    can_program: false,
  },
 
];

//I will target the first person s name
console.log(`the first person in this list is : ${people[0].name}`);
//target the first peron s country
console.log(`${people[0].name}is from : ${people[0].country}`);

console.log(people[1]);
//
//loop through the list of people
for (let i = 0; i < people.length; i++) {
  //---------
  //----in EO8 the console.log must be inside of the {}
  console.log(i);
} //--------------------------------------------

//OBJECT DECONSTRUCTION
//I crate a constant of the second person
const { name, country, birth_date, children } = people[1];

console.log(name, country);

//ARROW FUNCTIONS
const sayName = (nombre) => {
  console.log(` the name of the third person in the list is '${nombre}`);
};
sayName(people[2].name);

//a shopping list 
//a function that will loop 
const shoppingList = ["Milk", "Beef", "Eggs", "Bananas", "Chololate"];
 //for each

 shoppingList.forEach ((product) => {
     console.log(product );
 });


 //I will take the list above and make a map, that it will allow us to take the list and make a copy and modify it
 //Map: allows us to get the array and modify it
 const newList = shoppingList.map(item =>  item + "new");
 
    
    console.log(newList);



    //filter the list of people
   // const filterList = people.filter( item=> item === "name"  );
  //  console.log(filterList);




 //filter list of shopping list

 const filterListShopping = shoppingList.filter(item => item === "Milk") ;
console.log (filterListShopping);


 