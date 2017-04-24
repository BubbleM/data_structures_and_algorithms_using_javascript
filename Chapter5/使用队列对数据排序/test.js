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

//使用队列对数据进行排序

//根据对应位（个位和十位）上的数组，将数字分配到相应队列的函数
function distribute(nums,queues,n,digit){//digit表示个位或十位上的值
	for(var i=0;i<n;i++){
		if(digit == 1){
			queues[nums[i]%10].enqueue(nums[i]);
		}else{
			queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
		}
	}
}

//从队列中收集数字的函数
function collect(queues,nums){
	var i=0;
	for(var digit=0;digit<10;digit++){
		while(!queues[digit].empty()){
			nums[i++]=queues[digit].dequeue();
		}
	}		
}

function dispArray(arr){
	for(var i=0;i<arr.length;i++){
		putstr(arr[i]+" ");
	}
}

//主程序
var queues = [];
for (var i = 0; i < 10; ++i) {
	queues[i] = new Queue();//创建9个队列
}
var nums = [];
for (var i = 0; i < 10; ++i) {
	nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

// print(Math.random()*101);
// print(Math.floor(Math.random() * 101));

print("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
print("\n\nAfter radix sort: ");
dispArray(nums);