// 使用散列表存储数据时，通过一个散列函数将键映射为一个数字，这个数字的范围是0到散列表的长度
// 需要解决的问题
	// 1.collision碰撞  即使使用一个高效的散列函数，依然存在将两个键映射成同一个值的可能
	// 2.对数组大小常见的限制是：数组长度应该是一个质数
//散列函数的选择依赖于键值的数据类型，如果键是整型，最简单的散列函数就是以数组的长度对键取余
// 字符串类型的散列函数，将字符串中每个字符的ASCII码值相加的和除以数组长度 取的余数就是散列值
	// 1.除留取余法

function HashTable(){
	this.table = new Array(137);
	this.simpleHash = simpleHash;//计算散列值的方法
	this.showDistro = showDistro;//显示散列表数据分布
	this.betterHash = betterHash;
	this.put = put;//向散列中插入数据
	this.get = get;//从散列表中读取数据
	this.buildChains = buildChains;
}
function simpleHash(data){
	var total = 0;
	for(var i=0;i<data.length;++i){
		total += data.charCodeAt(i); 
	}
	print("Hash value: " + data + " -> " + total);
	return total % this.table.length;
}
//使用霍纳算法的更好的散列函数
function betterHash(string){
	const H = 37;
	var total = 0;
	for(var i=0;i<string.length;i++){
		total += H * total + string.charCodeAt(i);//求和时每次乘以一个质数
	}
	total = total % this.table.length;
	if(total < 0){
		total += this.table.length-1;
	}
	return parseInt(total);
}
// function put(data){
// 	// var pos = this.simpleHash(data);
// 	var pos = this.betterHash(data);
// 	this.table[pos] = data;
// }

// function put(key,data){
// 	var pos = this.betterHash(key);
// 	this.table[pos] = data;
// }

function put(key, data) {
	var pos = this.betterHash(key);
	var index = 0;
	if (this.table[pos][index] == undefined) {
		this.table[pos][index+1] = data;
	}
	++index;
	else{
		while (this.table[pos][index] != undefined) {
			++index;
		}
		this.table[pos][index+1] = data;
	}
}

// function get(key){
// 	return this.table[this.betterHash(key)];
// }

function get(key){
	var index = 0;
	var hash = this.betterHash(key);
	if (this.table[pos][index] = key) {
		return this.table[pos][index+1];
	}
	index += 2;
	else {
		while (this.table[pos][index] != key) {
			index += 2;
		}
		return this.table[pos][index+1];
	}
	return undefined;
}

function showDistro(){
	var n = 0;
	for(var i=0;i<this.table.length;++i){
		if(this.table[i][0] != undefined){
			print(i + ": " + this.table[i]);
		}
	}
}

//散列化整型键
function getRandomInt(min,max){
	return Math.floor(Math.random() * (max-min+1)) + min; //随机产生min-max之间的值  包括min和max
}
function genStuData(arr){//生成学生的数据
	for(var i=0;i<arr.length;++i){
		var num = "";//将数字转成字符串 方便连接
		for(var j=1;j<=9;j++){
			num += Math.floor(Math.random()*10);
		}//用来生成学生的ID
		num += getRandomInt(50,100); //生成一个随机的成绩  并且把成绩缀在ID的后面
		arr[i] = num;
	}
}

//讨论两种解决碰撞的方法
// 1.开链法
// 开链法是指实现散列表的底层数组中，每个数组元素又是一个新的数据结构，比如另一个数组，这样就能存储多个键了
// 使用这种技术，即使两个键散列后的值相同，依然被保存在同样的位置，只不过它们在第二个数组中的位置不一样罢了
// 实现开链法的方法是：在创建存储散列过的键值的数组时，通过调用一个函数创建一个新

// 的空数组，然后将该数组赋给散列表里的每个数组元素。这
function buildChains(){
	for(var i=0;i<this.table.length;++i){
		this.table[i] = new Array();
	}
}

// 2.线性探测法
// 开放寻址散列 。当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空。如果为空，
// 就将数据存入该位置；如果不为空，则继续检查下一个位置，直到找到一个空的位置为
// 止。

// 当存储数据使用的数组特别大时，选择线性探测法要比开链法好。这里有一个公式，常常
// 可以帮助我们选择使用哪种碰撞解决办法：如果数组的大小是待存储数据个数的 1.5 倍，
// 那么使用开链法；如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探
// 测法。