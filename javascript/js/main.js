 // console.log("salam");
// console.log(5*5>24 && 5!=6);
// console.log(5*5>24 && 5==6);
// var theNumber = prompt('reqem daxil edin :","');
// var kv =theNumber * theNumber /2;
// alert("girdiyiniz ededin kv :" + kv);
// var number = prompt ('reqemi girin :', '');
// if (number >=18)
// alert('gire bilersiniz');
// else

//  var kafi = prompt ('reqemi girin :', '');
// if (kafi<=35){
// 	var goster = "kafi"
// }
// // console.log('kafi');
// // var normal= prompt('reqemi girin :', '')
 
// if (kafi>=35 && kafi<=60){
// 	var goster = "normal"
// }
// if (kafi>=60 &&kafi<=100){
// 	var goster = "ela"
// }
// console.log(goster)

// var netice= number*number;
// var netice=number*number*number;
// console.log(netice)
var g=prompt('gunu daxil edin:', '');
if (g>0 && g<32){

var gg=prompt('gunluk geliri daxil edin:','');
var bt= g*gg;
if (bt<1000) {
var fa= bt* 0.2;
}else{
var fa=bt* 0.25;
}
var ng= bt-fa;

console.log('sizin atliq qazanciniz:' +ng+'AZN-dir');

}else{
console.log('sehv')
}

