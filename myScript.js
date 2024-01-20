// arithmetic operators ***********************************
// var a=12;
// let b= 5;
// var c=a%b;
// console.log(c);

// logical operators ***********************************
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
// ternary operator *********************************
//  a<b ? c="Hi":c="Bye";
// console.log(c)
//  d= a>b ? "Come": "Go";
// console.log(d)

// switch statement ***********************************
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
// Alert Box ******************************
// var x= 20;
// var y=20;
// if(x<y){
//     alert("Y is greater." + y);
// }else if(x>y){
//     alert("x is greater."+ x);
// }else{
//     alert("total is " + (x+y));
// }
// confirm box *****************************
// var z= confirm("Can I help you?");
// if(z){
//     alert("Yeah sure.");
// }else{
//     alert("As you wish.");
// }
// prompt box *******************************
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

// change background color *********************
// dom 
// document.getElementById("button").addEventListener("click",changeBackground);
// var x = document.querySelector("body");
// function changeBackground(){
//         if(x.style.background == "blue"){
//             x.style.background = "green";
//         }else if(x.style.background == "green"){
//             x.style.background = "white";
//         }
//         else {
//             x.style.background = "blue";
//         }
// }

// function *********************
// function add(){
//     var a = 12, b= 6;
//     console.log(a+b);
// }
// add();
// function greeting(a,b){
// console.log("Good morning "+a+" & "+b);
// }
// greeting("Saqib","Ali");
// return type function************************************************ 
// function sum(Lit,Lang,Chemistry){
//     var x = Lit+Lang+Chemistry;
//     return x;
// }
// function per(a){
//     var y = a/500 * 100;
//     console.log(y);
// }
// var total = sum(100,120,50)
// per(total);

// scope of function ***********************************
// var a = 12;
// function value(){
//     var b = 12;
//     console.log(a);
// }
// value();
// console.log(b);
// while loop *****************
// var a = 1;
// while(a <= 10){
//     document.write(a+" Welcome to while loop.<br>");
//     a++;
// }
// do while *****************
// var a = 1;
// do{
//     document.write(a+" Welcome to do - while loop.<br>");
//     a++;
// }
// while(a <= 10){
// }
// for loop *****************
// var a=1;
// for(a=0;a<=15;a++){
//     document.write(a+" This is for loop <br>");
// }
// for break, continue****************
// var a=1;
// for(a=0;a<=15;a++){
//     if(a==5){
//         document.write(a+" Hellow");
//         continue;
//     }
//     document.write(a+" This is for loop <br>")
// }
// even odd number with for *****************
// var num=1;
// for(num=1;num<50;num++){
//     if(num%2==0){
//          document.write(num+" Even");
//     }
//     if(num%2==1){
//         document.write(num+" Odd");
//     }
// }
// greatest number with if ************************
// var a=2, b=4, c=-4;
// if(a>b && a>c){
//     document.write(a+"is greater.")
// }
// else if(b>a && b>c){
//     document.write(b+"is greater.")
// }
// else if(c>a && c>b){
//     document.write(c+"is greater.")
// }
// largest number with from array with for loop *******************
// var a=[50001,112,43,24,15];
// for(var i=0;i<=a.length;i++){
//     if(a[i]<a[i+1]){
//         a[i]=a[i+1]
//     }else{
//         console.log(a[i]);
//         break;
//     }
// }
// nested loop ********************
// for(a=1;a<=5;a++){
//     for(b=1;b<=a;b++){
//         document.write(b);
//     }
//     document.write("<br>")
// }
// array ********************
// var a=[1,2,3,4,5];
// for(var i=0;i<a.length;i++){
//     document.write(a[i]);
//     document.write("<br>");
// }
// array 2 ********************
// var a=new Array();
// var b=5;
// for(var j=0;j<b;j++){
//     a[j]=prompt('enter value');
// }
// for(var i=0;i<a.length;i++){
//     document.write(a[i]);
//     document.write("<br>");
// }
// Multidimentional array **************
// var a =[["ali",23,"comp","student"],["Saqib",25,"Eng","Teacher"],["Faseeh",26,"Urdu","student"]];
// document.write("<table border=2px>")
// for(var i=0;i<a.length;i++){
// document.write("<tr>")
//     for(var j=0;j<a[0].length;j++){
// document.write("<td>")
//     document.write(" "+a[i][j]);
// document.write("</td>")
//     }
//     document.write("<br>");
// document.write("</tr>")
// }
// document.write("</table>")
// delete and update in array *************
// var a=[2,3,4,5,6,7];
// delete a[2];
// document.write(a);
// functions of array ****************
// sort in array ********************
//  var a=[12,33,4,5,6,17];
// a.sort();
// document.write(a);
// pop ****************
// removes last element from array 
// var a=[12,33,4,5,6,17];
// a.pop();
// document.write(a);
// push ****************
// adds element at last in  array 
// var a=[12,33,4,5,6,17];
// a.push(22);
// document.write(a);
// shift *******************
// removes element from start in  array 
// var a=[12,33,4,5,6,17];
// a.shift();
// document.write(a);
// unshift *******************
// adds element at start in  array 
// var a=[12,33,4,5,6,17];
// a.unshift("Ahmed");
// document.write(a);
// Array concat **************
// var a =[1,2,3,4,5];
// var b =[6,7,8,9];
// var c = a.concat(b);
// we can concat more than two array as well
// var d=[11,12,13];
// var e = a.concat(b,d);
// document.write(e);
// join in array **************
// var d=[11,12,13,14,15];
// var e = d.join("-");
// document.write(e);
// document.write("<br>");
// var f = d.join(" ");
// document.write(f);
// slice in array******************
// it brings value require within given range 
// var a=["ali","ahmed","taha","yaseen"] ;
// var b= a.slice(1,3);
// document.write(b);
// slice with negative ************
// var a=["ali","ahmed","taha","yaseen"];
// var b= a.slice(-3,-1);
// document.write(b);
// splice in array ****************
// inserts new value into an array with or without deleting previous values 
// var a=["ali","ahmed","taha","yaseen"] ;
// var b= a.splice(2,0,"Saqib","Faseeh");
// document.write(a);
// more splice deleting
// var a=["ali","ahmed","taha","yaseen"] ;
// var b= a.splice(2,2,"Saqib","Faseeh");
// document.write(a);
// just deleting with splice 
// var a=["ali","ahmed","taha","yaseen"] ;
// var b= a.splice(2,3);
// document.write(a);
// Array.isArray ****************
// var a=[1,2,3,4,5];
// var a=22;
// document.write(a+"<br>");
// if(Array.isArray(a)){
//     document.write("It's Array.");
// }else{
//     document.write("It's not an Array.");
// }
// loop se khel kood *************
// for(var i=0;i<=5;i*=2){
//     console.log("hi"+"<br>");
// }
// for(;;){
//     console.log("hi"+"<br>");
// }
// index of array **************
// var a=["ahmed","ali","Saqib","ali","lala"];
// var b = a.indexOf("ali",2);
// document.write(b);
// firstindex ***********
// var a=["ahmed","ali","Saqib","ali","lala"];
// var b = a.lastIndexOf("ali");
// document.write(b);
// .include ****************
// var a=["ahmed","ali","Saqib","ali","lala"];
// var b =a.includes("Saqib");
// document.write(b);
// some function ********
// one condition true then true.
// var a=[12,34,51,22];
// var b =a.some(findAge);
// function findAge(x){
// return x >=50;
// }
// document.write(b);
// every function ***********
// all condition should be true 
// var a=[12,33,11,5,20];
// var b = a.every(findValue);
// function findValue(x){
//     return x<=30;
// }
// document.write(b);
// find ********************
// it gives the value which meets condition 
// var a=[12,33,11,5,20];
// var b = a.find(findValue);
// function findValue(x){
//     return x>=30;
// }
// document.write(b);
// findindex *******************
// var a=[12,33,11,5,20];
// var b = a.findIndex(find_Index);
// function find_Index(x){
//     return x>=30;
// }
// document.write(b);
// filter 
// it returns a filtered array which after checking condiiton 
// var a=[12,33,11,5,20];
// var b = a.filter(filterArray);
// function filterArray(x){
//     return x>=20;
// }
// document.write(a);
// document.write("<br>");
// document.write(b);
// tostring **************
// var a=[12,33,11,5,20];
// var b= a.toString();
// document.write(b);
// document.write("<br>");
// document.write(typeof(b));
// value of array 
// it just return array's value 
// var a=[12,33,11,5,20];
// var b= a.valueOf();
// document.write(b);
// document.write("<br>");
// document.write(typeof(b));
// fill ******************
//  var a=[12,33,11,5,20];
// var b= a.fill(12,22);
// document.write(b);
// document.write("<br>");
// document.write(typeof(b));
// foreach loop ***************
var a={
    "fname":"Shahid",
    "lname":"Afridi",
    "age":23,
    "contact":"03021542685",
    "email":"Ali@gmail.com",
    "subject":["eng","urdu","comp"],
    "Studies":function(){
      return 222;
    },
    "fullname":function(){
      return this.fname+this.lname;
    },
    "littleBro":{
      "class":5,
      "school":"Vision",
      "age":11,
    }
  }
  
  console.log(a);
  console.log(a.age);
  console.log(a.contact);
  console.log(a.fullname());
  console.log(a.Studies());
  console.log(a.subject);
  console.log(a.subject[2]);
  console.log(a.littleBro);
  





 
