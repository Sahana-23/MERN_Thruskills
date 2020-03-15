//data-type: number

// *integer
// *float
// *octal
// *hexadecimal
// *binary
// *special
// *exponential

var num=10;
console.log("num: ",num, "; Type of num:", typeof(num));

var num2=10.10;
console.log("num2: ",num2, "; Type of num2:", typeof(num2));

var num3=0123;
console.log("num3: ",num3, "; Type of num3:", typeof(num3));

var num4=0x12a;
console.log("num4: ",num4, "; Type of num4:", typeof(num4));

var num5=0b1010;
console.log("num5: ",num5, "; Type of num5:", typeof(num5));

var num6 = 8*'f';
console.log("num6: ",num6, "; Type of num6:", typeof(num6));

var num7 = 1e4 //also written as 1e+4
console.log("num7: ",num7, "; Type of num6:", typeof(num7));

var num8 = 1e309 //too huge, infinite
console.log("num8: ",num8, "; Type of num8:", typeof(num8));
