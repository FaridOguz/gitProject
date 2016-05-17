// var i=0;
// (function efqanFunc(){
// 	i++;
// 	document.write("Efqan<br>"+i);
// 	if(i<500){
// 	efqanFunc();
// }
// })();
//son//son//son//son//
// var sinif={
// 	telebeler:["Elsad","Qulu","Feride","Kamran"],
// 	muellimler:["Yolcu","Eldar","Samir"],
// 	mentorlar:[
// 	{
// 		seher:["Miti","Aysel","Heyder"],
// 		gunorta:["Orxan","Ferid"],
// 	},
// 	{
// 		axsam:["Kerim","Rehim"]
// 	}
// ],
// 	"/*-":"Bu axmaq xususiyyetdir",
// 	"1":1,
// 	}
// document.write(sinif.telebeler[2]," , ");
// document.write(sinif.mentorlar[1].axsam[1],"  ");
// document.write(sinif[1] ,"  ");
// document.write("<b>"+sinif.muellimler+"</b>");

//tapsiriq 3//
 //   	var bar = true;
	// console.log(bar + 0);   
	// console.log(bar + "xyz");  
	// console.log(bar + true);  
	// console.log(bar + false);
//true=1 false=0 oldugunu nezere alaraq :
//(bar+0)=1+0=1 
//(bar + "xyz")-burada "xyz"string olduguna gore + isaresi verilenleri birlesdirir.
//(bar + true) true=1, bar= true olgudu ucun netice 1+1=2 olur.
//(bar+false) bar=true=1, false=0 oldugundan netice 1+0=1 olur.

//tapsiriq 4 //
 // var salary = "1000$";

 // (function () {
 //     console.log("Original salary was " + salary);

 //     var salary = "5000$";

 //     console.log("My New Salary " + salary);
 // })();
 //Burada function-in icinde  console.log("Original salary was " + salary)-den
 //evvel her hansi bir deyisken olmadigi ucun program console.log-un ikinci
 //hissesini basa dusmur.


//Tapsiriq 1 //
 //  var y = 1;
 // if (function f(){} ){
 //    y+= typeof f;
 //  }
 //  console.log(y);
  //function if serti daxilinde verildiyi ucun program onu anlamir.Eger if
  //sertini silsek o zaman program bunu- 1function- kimi oxuyacaq.

  //tapsiriq
   var myArr =  ['a','b','c','d','e','f'];
   // myArr=[];
   // myArr=[0];
   // myArr=[]