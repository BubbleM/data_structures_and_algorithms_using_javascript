function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;//向队尾添加一个元素
	this.dequeue = dequeue;//从队首删除一个元素
	this.front =front;//读取队首元素
	this.back = back;//读取队尾元素
	this.toString = toString;//显示队列内的所有元素
	this.empty = empty;//判断队列是否为空
}
function enqueue(element){
	this.dataStore.push(element);
}
function dequeue(){
	person = this.front();
	this.dataStore.shift();
	return person;
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
//测试
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
print(q.toString());//M C J
// q.dequeue();
print("删除了 "+q.dequeue());
print(q.toString());//C J
// print("Front of queue: " + q.front());//C
// print("Back of queue: " + q.back());//J