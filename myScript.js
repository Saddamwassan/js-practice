// arithmetic operators 
// var a=12;
// let b= 5;
// var c=a%b;
// console.log(c);

// logical operators 
// var a = 5;
// var b = 12;
// &&
// if(a<=15 && b>=10){
//     console.log("your code is running.");
// }
// if(a<=15 || b<=5){
//     console.log("Your code is working.")
// }
// if(!a>=5){
//     console.log("your code is Amazing.")
// }
// if else 
// var name1="Ali Ahmed";
// var gender = "Male";
// if(gender == "Male"){
//     console.log("welcome to Javascript Mr. "+name1);
// }else{
//     console.log("Welcome to Javascript Madam")
// }
// ternary operator 
//  a<b ? c="Hi":c="Bye";
// console.log(c)
//  d= a>b ? "Come": "Go";
// console.log(d)

// switch statement 
// var level= 6;
// switch(level){
//     case 1: console.log("Its Level 1st.");
//     break;
//     case 2: console.log("Its level 2nd.")
//     break;
//     case 3: console.log("Its level 3rd")
//     break;
// }
// switch(true){
//     case(level>=1 && level<=5): console.log("You are in primary level.");
//     break;
//     case(level>5 && level<=8): console.log("You are in middle level.");
//     break;
//     case(level>8 && level<=10):console.log("You are in matriculation.")
// }
// Alert Box 
// var x= 20;
// var y=20;
// if(x<y){
//     alert("Y is greater." + y);
// }else if(x>y){
//     alert("x is greater."+ x);
// }else{
//     alert("total is " + (x+y));
// }
// confirm box 
// var z= confirm("Can I help you?");
// if(z){
//     alert("Yeah sure.");
// }else{
//     alert("As you wish.");
// }
// prompt box 
// var a=prompt("What is your name?");
// document.write(a);

//     var level= prompt("In which class do you are?");
//     switch(true){
//     case(level>=1 && level<=5): console.log("You are in primary level.");
//     break;
//     case(level>5 && level<=8): document.write("You are in middle level.");
//     break;
//     case(level>8 && level<=10):document.write("You are in matriculation.")
//     break;
//     case(level>10):document.write("This school is upto 10th level.")
//     break;
// }

// change background color 
// dom 
document.getElementById("button").addEventListener("click",changeBackground);
var x = document.querySelector("body");
function changeBackground(){
        if(x.style.background == "blue"){
            x.style.background = "green";
        }else if(x.style.background == "green"){
            x.style.background = "white";
        }
        else {
            x.style.background = "blue";
        }
        
       
}