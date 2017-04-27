/*集合是一种包含不同元素的数据结构
集合中的元素称为成员
集合中的成员是无序的
集合中不允许相同成员存在*/

function Set(){
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.contains = contains;//检查一个成员是否属于该集合
	this.union = union;//并集
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
}

//因为集合中不能包含相同的元素，所以插入前使用 indexOf() 检查新加入的元素在数组中是否存在。如果找到，
// 该方法返回该元素在数组中的位置；如果没有找到，该方法返回 -1
function add(data){
	if(this.dataStore.indexOf(data) < 0){
		this.dataStore.push(data);
		return true;
	}else{
		return false;
	}
}

function remove(data){
	var pos = this.dataStore.indexOf(data);
	if(pos > -1){
		this.dataStore.splice(pos,1);
		return true;
	}else{
		return false;
	}
}

function show(){
	return this.dataStore;
}

function contains(data){
	if(this.dataStore.indexOf(data) > -1){
		return true;
	}else{
		return false;
	}
}
function union(set){
	var tempSet = new Set();
	for(var i=0;i<this.dataStore.length;++i){
		tempSet.add(this.dataStore[i]);
	}
	for(var i=0;i<set.dataStore.length;++i){
		if(!tempSet.contains(set.dataStore[i])){
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
}

function intersect(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}