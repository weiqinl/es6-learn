// {
// 	let a = 10;
// 	var b = 1;
// }
// console.log(a); // undefined
// console.log(b); //1

//使用var定义for循环中的变量
var a = [];
for (var i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	};
}
a[6]();  //10

//使用let定义for循环中的变量
var a = [];
for (let i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	};
}
a[6]();  //6

/**
 * 循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域。
 * @param  {[type]} let i             [description]
 * @return {[type]}     [description]
 */
for (let i = 0; i < 3; i++) {
	let i = 'abc';
	console.log(i);
}
// abc
// abc
// abc

//"暂时性死区"TDZ: Temporal Die Zone 
////暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

// function func(arg) {
// 	let arg;
// 	// SyntaxError: Identifier 'arg' has already been declared
// }

function func(arg) {
	{
		let arg;//不报错
	} 
}


var tmp = new Date();

function f() {
	console.log(tmp);
	if (false) {
		var tmp = 'hello world';
	}
}
f();// undefined // var 变量提升

// function f() {
// 	console.log('I am outside!');
// }

// (function () {
// 	if (false) {
// 		function f() {
// 			console.log('i am inside!');
// 		}
// 	}

// 	f();
// }());   //f is not a function


//在块级作用域之前加上do，使它变为do表达式。
let x = do {
	let t = f();
	t * t + 1;
}
//上面代码中，变量x会得到整个块级作用域的返回值。