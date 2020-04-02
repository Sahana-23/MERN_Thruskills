//if-else
var num =6;
if(num%2==0){
    console.log(num," is even")
} else {
    console.log(num," is odd")
}

//if-else-if
var totalPurchase = 500;
var discount = 20;
var biggerDiscount = 1000;

var finalAmount=totalPurchase;

if (totalPurchase > 50 && totalPurchase <=5000) {
    console.log('If block ');

    finalAmount = totalPurchase - discount;

}else if(totalPurchase > 5000) {

    console.log('Else if Block');

    finalAmount = totalPurchase - biggerDiscount;
    console.log('Insde elseif ', finalAmount)
} 



console.log(finalAmount)
