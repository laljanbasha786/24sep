1.// var car={
//     make:"iron",
//     model:"bs4",
//     year:2024
// }
// Object.freeze(car)
// console.log(car); // {make: 'iron', model: 'bs4', year: 2024}


2.// var user={
//     name:"laljan",
//      age:22,
//      email:"123@gmail.com"
// }
// Object.freeze(user)
// console.log(Object.isFrozen(user)); //true


3.// var product={
//     name:"iphone",
//     category:16,
//     price:150000,
// }
// Object.seal(product)
// console.log(product)


4.// var laptop={
//     brand:"redmi",
//     model:2021,
//     price:20000,
// }
// console.log(Object.keys(laptop)); //   ["redmi",2021,20000]


5.// var house={
//     location:"tadipatri",
//     size:"3bhk",
//     price:3000000,
// }
// console.log(Object.values(house))  // ["tadipatri","3bhk",3000000]


6.// var smartphone={
//     brand:"oppo",
//     model:"z900",
//     price:22000,
// }
// Object.seal(smartphone);
// smartphone.price=25000;

// var isSealed=Object.isSealed(smartphone);

// console.log(smartphone); //[brand:"oppo",model:"z900",price:25000]
// // console.log(isSealed); //true


7.// var book={
//     title:"destiny",
//     author:"ram",
//     pubyear:2020,
// }
// Object.freeze(book);
// book.pubyear=2021;

// var isfreeze=Object.isFrozen(book);

// console.log(book);
// console.log(isfreeze); // [title:"destiny",author:"ram",pubyear:2020]

8.
// var person={
//     firstname:"laljan",
//     lastname:"basha",
//     age:22,

// }

// Object.keys(person)
// Object.values(person)

// console.log(person); // [firstname:"laljan",lastname:"basha",age:22]


9.// var course={
//     title:"AWS",
//     instructor:"pavan sir",
//     duration:"2hrs"
// }
// Object.entries(course)
// delete course.duration;

// console.log(course); //[title:"AWS",instructor:"pavan sir"]

10.// var employee={
//     name:"laljan",
//     position:"front-end",
//     salary:25000,
// }
// Object.seal(employee)
// employee.position="backend";

// var res=Object.keys(employee);
// console.log(res);["name","position","salary"]


// console.log(employee);//[name:"laljan",position:"front-end",salary:25000]