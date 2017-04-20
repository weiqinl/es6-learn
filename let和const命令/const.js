const PI = 3.1415;
console.log(PI);



const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
// foo = {}; // TypeError: "foo" is read-only

const a = [];
a.push('hello');				//可执行
console.log(a.length);	//可执行
a.length = 0;						//可执行
console.log(a.length); 	//可执行
a  = ['Dave']; //报错


const free = Object.freeze({});
//常规模式时，下面一行不起作用；
//严格模式时，该行会报错
free.prop = 123;
//常量free指向一个冻结的对象，
//所以添加新属性不起作用，严格模式时还会报错。

//除了将对象本身冻结，对象的属性也应该冻结。
//下面是一个将对象彻底冻结的函数。
var constantize = (obj) => {
	Object.freeze(obj);
	Object.keys(obj).forEach((key, i) => {
		if (typeof obj[key] === 'object') {
			constantize(obj[key]);
		}
	})
}

//下面是两种勉强可以使用的方法，取到顶层对象。
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};