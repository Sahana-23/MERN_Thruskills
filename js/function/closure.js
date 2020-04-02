//Example 1 : without any parameters

function outer(){
	var x=20;
	console.log("Outer Function")
	function inner(){
		console.log("Inner function")
		console.log("x: ",x);
	}
	return inner;
}

var inn=outer();
console.log("inn: ",inn)

inn(); 
//alterntive way
//outer()()

//Example 2 : with parameters

function outer2(out_arg){
	function inner2(inn_arg){
		// console.log(out_arg)
		console.log(out_arg+inn_arg) 
	}
	return inner2
}

var inn2 = outer2(2)
console.log("inn2: ",inn2)

inn2(3);

//alterntive way
//outer2(1)(2)


//Example 3

function outer3(){
	var a=[];
	for(var i =0;i<5;i++)
	{
		a[i] = function (){return i};
	}
	// console.log(i);
	return a;
}
var get_arr=outer3();
console.log("get_arr: ",get_arr);
console.log("get_arr[0]: ",get_arr[0]);
console.log("0:",get_arr[0]());
console.log("1:",get_arr[1]());
console.log("2:",get_arr[2]());
console.log("3:",get_arr[3]());
console.log("4:",get_arr[4]());