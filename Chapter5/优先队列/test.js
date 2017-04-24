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
	var priority = this.dataStore[0].code;
	for(var i=1;i<this.dataStore.length;i++){
		if(this.dataStore[i].code<priority){
			priority=i;
		}
	}
	return this.dataStore.splice(priority,1);
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
		retStr+=this.dataStore[i].name+" code: "+this.dataStore[i].code +"\n";
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

//定义存储队列元素的对象
function Patient(name,code){
	this.name = name;
	this.code = code;//表示患者的优先级或病情严重程度 优先码值最小的元素优先级最高
}

//测试
var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());
// 下一轮
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());