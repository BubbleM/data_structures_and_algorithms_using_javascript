//设计一个基于对象的链表

//Node类用来表示节点
function Node(element){
	this.element = element;//保存节点上的数据
	this.next = null;//保存指向下一个节点的链接
}
//LinkedList类提供了插入节点、删除节点、显示列表元素的方法等
function LList(){
	this.head = new Node("head");//头节点
	this.find = find;//在列表中查找给定的值
	this.insert = insert;//插入节点
	this.remove = remove;//删除节点
	this.display = display;//显示链表中的元素
	this.findPrevious = findPrevious;
}
//find检查每一个节点是否等于待查找数据
function find(item){
	var currNode = this.head;
	while(currNode.element != item){/********************************************/
		currNode = currNode.next;
	}
	return currNode;
}

//在已知节点item后面插入元素
function insert(newElement,item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}
//显示链表中的元素
function display(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

//删除一个节点  首先要找到待删除节点前面的节点

//findPrevious()遍历链表中的元素，检查每一个节点的下一个节点中是否存储着待删除数据，
// 如果找到，返回该节点（即前一个节点）
function findPrevious(item){
	var currNode = this.head;
	while(!(currNode.next == null) && (currNode.next.element != item) ){/*************************/
		currNode = currNode.next;
	}
	return currNode;
}
function remove(item){
	var prevNode = this.findPrevious(item);/***之前遗漏掉了this. 结果一直报错TypeError: currNode is undefined*****/
	if(!(prevNode.element == null)){
		prevNode.next = prevNode.next.next;
	}
}

//测试
var cities = new LList();
cities.insert("Conway","head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.insert("Carlisle", "Russellville");
cities.display();//Conway   Russellville   Alma
console.log();
cities.remove("Carlisle");
cities.display();