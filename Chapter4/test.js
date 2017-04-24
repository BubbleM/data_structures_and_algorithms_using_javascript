function Stack(){
	this.dataStore = [];//保存栈内元素 初始化为一个空数组
	this.top = 0;//top记录栈顶位置
	this.push = push;//压入一个新元素
	this.pop = pop;//弹出栈顶元素
	this.peek = peek;//返回栈顶元素，但不删除它
	this.length = length;//通过返回变量top值的方式返回栈内的元素个数
	this.clear = clear;//将变量top的值设为0，清空一个栈
}

//++放在this.top后面，这样新入栈的元素就被放在top的当前值对应的位置，
//然后再将变量top的值加1，指向下一个位置
function push(element){
	this.dataStore[this.top++] = element;
}

function pop(){
	return this.dataStore[--this.top];
}

//对一个空栈调用peek()，结果为undefined
function peek(){
	return this.dataStore[this.top-1];
}

function length(){
	return this.top;
}

function clear(){
	this.top = 0;
}

//测试Stack类的实现
// var s = new Stack();
// s.push("David");
// s.push("Raymond");
// s.push("Bryan");
// print("length: " + s.length());//3
// print(s.peek());//Bryan
// var popped = s.pop();
// print("The popped element is: " + popped);//Bryan
// print(s.peek());//Raymond
// s.push("Cynthia");
// print(s.peek());//Cynthia
// s.clear();
// print("length: " + s.length());//0
// print(s.peek());//undefined
// s.push("Clayton");
// print(s.peek());//Clayton

//将数字n转换为以b为基数的数字
function mulBase(num,base){
	var s = new Stack();
	do{
		s.push(num%base);
		num=Math.floor(num /= base);/************/
	}while(num>0);
	var converted="";
	while(s.length()>0){
		converted+=s.pop();
	}
	return converted;
}

// print(mulBase(13,2));

// print(13/2);//6
// print(Math.floor(13/2));//6.5

//测试将数字转换为2进制和8进制
// var num = 32;
// var base = 2;
// var newNum = mulBase(num, base);
// print(num + " converted to base " + base + " is " + newNum);
// num = 125;
// base = 8;
// var newNum = mulBase(num, base);
// print(num + " converted to base " + base + " is " + newNum);


//判断给定字符串是否是回文
function isPalindrome(word){
	var s = new Stack();
	for(var i=0;i<word.length;i++){
		s.push(word[i]);
	}
	var rword = "";
	while(s.length()>0){
		rword+=s.pop();
	}
	if(word == rword){
		return true;
	}else{
		return false;
	}
}

//测试
// var word = "hello";
// if (isPalindrome(word)) {
// 	print(word + " is a palindrome.");
// }
// else {
// 	print(word + " is not a palindrome.");
// }
// word = "racecar"
// if (isPalindrome(word)) {
// 	print(word + " is a palindrome.");
// }
// else {
// 	print(word + " is not a palindrome.");
// }

//阶乘函数的递归定义
function factorial(n){
	if(n===0){
		return 1;
	}else{
		return n * factorial(n-1);
	}
}
// print(factorial(5));//120
//使用栈模拟递归
function fact(n){
	var s = new Stack();
	while(n>1){
		s.push(n--);
	}
	var product = 1;
	while(s.length()>0){
		product *= s.pop();
	}
	return product;
}
print(fact(5));//120