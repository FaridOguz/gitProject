// function test(x){
// return x*x;
// }
// // document.write (test(5));
// function test2(y){return(y*y*y);}
//  test2(test(5))
// var ad=("atash")
// var soyad=("yumurtabash")
// var adsoyad=(ad+" "+soyad)
// document.write(adsoyad);

// var reqem=10;
// reqem+=10
// document.write(reqem);

// function efqan(){
//  var a="adlar"

//  document.write(a);
// }
// efqan();

// function elovset(){
// document.write(a);
// }
// ad=["Ad1","Ad2","Ad3","Ad4"];

//  console.log(ad[Math.floor(Math.random()+ad.length)]);

/*ayin tarixi bas
var gunler=["Bazarertesi","Cersenbe axsami","Cersenbe","Cume axsami","Cume","Senbe","Bazar"];
var aylar=['yanvar','fevral','mart','aprel','may','iyun','iyul','avqust','sentyabr','oktyabr','noyabr','dekabr'];
bugun=new Date();
gun=bugun.getDay();
ay=bugun.getMonth();

console.log(bugun.getFullYear()+" "+ bugun.getDate()+" "+ aylar[ay]+" "+gunler[gun-1]+ "dir");
ayin tarixi son*/
// var a=new Date(1992,11,24,12.00);
// var bugun=new Date();
// var x=bugun-a;

// var zamanBugun=bugun.getTime();
// var zaman=a.getTime();

// console.log(zamanBugun+zaman);
// var reqem =10;
// (reqem<11)?
// // document.write('duzdur'): 
// // document.write('sehvdir');
// alert('duzdur'): 
// alert('sehvdir');

// var sayi=1;
// for (var i = 1; i <=10; i++){
// 	document.write(i+"<br>");
// }

// var ad=0
// while(ad<=100){
// document.write(ad+"<br>");
// ad=ad+1
// }
// function topla(){
// 	var sayi1=document.getElementById("sayi1").value;
// 	var sayi2=document.getElementById("sayi2").value;
// if (sayi1==""||sayi2=""){
// 	document.getElementById("netice").value='verileni daxil edin';
// }else{
// 	document.getElementById("netice").value=parseInt(sayi1)+parseInt(sayi2);
// 	}
// }
// setInterval("topla()",100);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// var gunler =new Array("Bazarertesi","Cersenbe axsami","Cersenbe","Cume axsami","Cume","Senbe","Bazar");

// var zaman =new Date();
// 		// document.write(zaman);
// var gun =zaman.getDate();
//  		// document.write(gun);
// var ay =zaman.getMonth();ay=ay+1;
//  		// document.write(ay);
//  var il =zaman.getFullYear();
//  		// document.write(il);
//  var gunadi =zaman.getDay();
//  var tarix =gun+"/"+ay+"/"+il+"<br>"+gunler[gunadi]+"<br>";
//  		document.write(tarix);
//  var saat =zaman.getHours();
//  		// document.write(saat);
//  var deqiqe =zaman.getMinutes();
//  var saniye =zaman.getSeconds();
//  var vaxt =saat+":"+deqiqe+":"+saniye;
//  		document.write(vaxt);
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// var saat2  =zaman.toLocaleTimeString();
// var tarix2 =zaman.toLocaleDateString();
// document.write(tarix2);
///////////////////////////////////////////////////////////
// a=true;
// function yandir(){
//  document.write('<button onclick="yandir()">Click</button>');
//   		if(a){
//   		document.write("<div style='width:100px;height:150px;background:blue;'></div>");
//   		document.close()
//   		a=false;
//   	}else{
//   		document.write("<div style='width:100px;height:150px;background:red;'></div>");
//   		document.close()
//   		a=true;
//   	}
// }
// yandir()
//////////////////////////////////////////////
// a = 6;

// function kicikdir(){
//   document.write("a 5-den kicikdir")
// }

// function boyukdur(){
//   document.write("a 5-den boyukdur")
// }


// if (a < 5) {

//     kicikdir();

// }else if(a > 5){
    
//     boyukdur();

// }





// var a=(prompt("reqem daxil edin",""));

// function boyukdur(){
// alert("a 10 dan boyukdur");
// }
// function kicikdir(){
//   alert("a 10-dan kicikdir");
// }
// function beraberdir(){
//   alert("a 10-a beraberdir");
// }
// if(a>10){
//   boyukdur()
// }else if(a<10){
//   kicikdir()
// }else{
// beraberdir()
// }


// console.log("10" === 10);

// ||

// &&

  // console.log(10 === 10 & 10 > 5 );

// console.log(10 = 10);
 // var a=[function x(){
 // 	console.log("isleyir");
 // }]

 // console.log(a[0])
 // a[0]();

// console.log(a.length);

// var a = [15, 20, 30]

// console.log(a[1]);

// for (var i = 1; i=; i++) {
// 	console.log("icerideki i "+i)
// }
// 	console.log("coldeki i:"+i);
 //1. Promptla reqem daxil olunsun
// 2. Hemin Reqemin deyerinin 20-den boyuk olub olmadigi yoxlanilsin
// 3. Mueyyen bir array-e istifade olunacaq funksiyalar yazilsin (boyukdur, kiickdir, beraberdir)
// 4. Hemin reqemin if statement-ler vasitesile arrayimizdeki funksiyalardan istifade ederek boyuk ve ya kicik olmasi yoxlanilsin
