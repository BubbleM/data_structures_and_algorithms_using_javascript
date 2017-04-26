function Dictionary(){
	this.datastore = new Array();
	this.add = add;//添加一个键值对
	this.find = find;//以键作为参数，返回和其关联的值
	this.remove = remove;//同时删除键和与其关联的值
	this.showAll = showAll;//显示字典中的所有键-值对
	this.count = count;//返回字典中元素个数
	this.clear = clear;//情况字典中的元素
}
function add(key,value){
	this.datastore[key] = value;
}
function find(key){
	return this.datastore[key];
}
function remove(key){
	delete this.datastore[key];
}
function showAll(){
	var keys = Object.keys(this.datastore).sort(); //先将键进行排序
	var res = new Dictionary();
	for(var i=0;i<keys.length;i++){
		res.add(keys[i],this.datastore[keys[i]]);
		print(keys[i] + " -> " + this.datastore[keys[i]]);
	}
}
function count(){
	// return Object.keys(this.datastore).length; 
	var n = 0;
	for(var key in this.datastore){
		++n;
	}
	return n;
}
function clear(){
	for(var key in this.datastore){
		delete this.datastore[key];
	}
}


