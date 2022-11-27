// let warning = "Thank you for supporting us";

// alert(warning);


// function myFunc(){
//     let example = prompt("Please entrer your name");
//     return example
// }

// const x = myFunc.example;
// myFunc();
// if (x == ""){
//     window.alert("You did not enter your name");
//     myFunc();
// } else if (x === null){
//     window.alert("You did not enter your name");
//     myFunc();
// } else {
//     alert("Hello, " + x)
// }

let count = document.querySelector("#count")
let countEl = document.querySelector("#count-el")
let numberPeople = 0

function increment(){
    if (numberPeople < 34){
        numberPeople += 1
        count.textContent = numberPeople;
        
    } else {
        count.innerText = "You have visited every country in Europe"
    }
}

function decrease(){
    if (numberPeople > 0){
        numberPeople -= 1
        count.textContent = numberPeople
    }
}

function save(){
    let countStr = numberPeople + " - "
    countEl.textContent += countStr
    count.textContent = 0
    numberPeople = 0
}

// let username = "Facundo"

// let greeting = "Hello, and welcome to PrettyEurope, "

// let myGreeting = greeting + username

// console.log(myGreeting)



// function sum(a, b){
//     return a * b;
// }

// let sum1 = sum(6, 9);
// console.log(sum1)

// const person = {
//     name: "Facundo",
//     surname: "Torres",
//     age: 24,
//     phoneNumber: 3424796226
// }

// console.log (person.name)




// class Person {
//     constructor(name) {
//       this.name = name;
//     }
  
//     introduce() {
//       alert('Hello, my name is ${this.name}');
//     }
//   }
  
//   const otto = new Person(prompt("What is your name?"));
  
//   otto.introduce();

function person(name, age, country){
    this.name = name;
    this.age = age;
    this.country = country;
    this.introduction = function() {console.log("Hi, my name is " + name + ", I am " + age + " years old and I am from " + country) }
}

const person1 = new person("Facundo", 24, "Argentina")

person1.introduction()


