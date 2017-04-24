function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;//向队尾添加一个元素
	this.dequeue = dequeue;//从队首删除一个元素
	this.front =front;//读取队首元素
	this.back = back;//读取队尾元素
	this.toString = toString;//显示队列内的所有元素
	this.empty = empty;//判断队列是否为空
	this.count = count;//显示队列的元素数
}
function enqueue(element){
	this.dataStore.push(element);
}
function dequeue(){
	delet = this.front();
	this.dataStore.shift();
	return delet;
}
function front(){
	return this.dataStore[0];
}
function back(){
	return this.dataStore[this.dataStore.length-1];
}
function toString(){
	var retStr = "";
	for(var i=0;i<this.dataStore.length;i++){
		retStr+=this.dataStore[i]+"\n";
	}
	return retStr;
}
function empty(){
	if(this.dataStore.length == 0){
		return true;
	}else{
		return false;
	}
}
function count(){
	return this.dataStore.length;
}

//舞者的信息都被存储在一个Dancer对象中
function Dancer(name,sex){
	this.name = name;
	this.sex = sex;
}

// var names = read('./data.txt').split("\n");
// print(names);

//将舞者信息从文件中读到程序里
function getDancers(males,females){
	var names = read('./data.txt').split("\n");
	for(var i=0;i<names.length;i++){
		names[i]=names[i].trim();
	}
	for(var i=0;i<names.length;i++){
		var dancer = names[i].split(" ");
		var sex = dancer[0];
		var name = dancer[1];
		if(sex == "F"){
			females.enqueue(new Dancer(name,sex));
		}else{
			males.enqueue(new Dancer(name,sex));
		}
	}
}

//将男性和女性组成舞伴，并宣布配对结果
function dance(males,females){
	print("The dance partners are: \n");
	if(!males.empty() && !females.empty()){
		// person = males.dequeue();
		print("Male dancer is: " + males.dequeue().name);
		// person = females.dequeue();
		print("and the Female dancer is: " + females.dequeue().name);
	}
	print();
}

//测试
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers,femaleDancers);
dance(maleDancers,femaleDancers);
if (!femaleDancers.empty()) {
	print(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
	print(maleDancers.front().name + " is waiting to dance.");
}
if (maleDancers.count() > 0) {
	print("There are " + maleDancers.count() +
" male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
	print("There are " + femaleDancers.count() +
" female dancers waiting to dance.");
}