
/*

!true || !false
(true && !false) && (false || !true)
(4 > 5) || true
document.write(("this" != "that") && ("zebra" > "aardvark"))
((4 >= 6) || ("grass" != "green")) && !(((12 * 2) == 144) && true)

*/


myColor = ["Red", "Green", "White", "Black"];
document.write(myColor,"<br>");
var a=myColor.join("+");
document.write(a);
/*
Expected Output : 
"Red,Green,White,Black"
"Red+Green+White+Black"
*/


var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
arr1.sort()
document.write("<br>",arr1);
/*
Sample Output : -4,-3,1,2,3,5,6,7,8
*/


// var array = [1, 2, 3, 4, 5, 6]
// function topla(total+num){
// return total+num;

// }

// document.write(1+2+3+4+5+6);
/*Expected Output : 21 
*/


var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };
document.write("<br>",student.name+",",student.sclass,","+student.rollno);
/*
Sample Output : name,sclass,rollno

*/


//
var reqem=[32243];
reqem.reverse()
document.write("<br>",reqem);
//Example x = 32243;
//Expected Output : 34223	


/*
Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '
*/

/* 

Example string: Ttttrevaaaniannnn;
Expected Output : 4t,3a,4n

*/


// var a=Number(prompt(' 1-ci reqemi daxil et',''));
// var b=Number(prompt(' 2-ci reqemi daxil et',''));
// a^b
// var result=1;
// for (var i = 1; i <=b; i++) {
// result=result*a;
// }
// console.log(result);

a=5;
b=3;
// console.log('a: '+a);
// console.log('b: '+a);
var x=a+b;
var a=x-a;
var b=x-b;
console.log(a);
console.log(b);

