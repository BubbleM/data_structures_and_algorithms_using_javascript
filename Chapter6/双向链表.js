function Node(element){
	this.element = element;
	this.next = null;
	this.previous = null;
}
function LList(){
	this.head = new Node('head');
	this.insert = insert;
	this.find = find;
	this.remove = remove;
	this.findLast = findLast;//查找链表中的最后节点
	this.dispReverse = dispReverse;//反序显示双向链表中的元素
	this.display = display;
}
function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement,item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	// current.next.previous = newNode;
	current.next = newNode;
}
function remove(item){
	var currNode = this.find(item);
	if(!(currNode.next == null)){
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}
//查找链表最后的节点
function findLast(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		currNode = currNode.next;
	}
	return currNode;
}
// 反序显示双向链表中的元素
function dispReverse(){
	var currNode = this.head;
	currNode = this.findLast();
	while(!(currNode.previous == null)){
		print(currNode.element);
		currNode = currNode.previous;
	}
}

function display(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		print(currNode.next.element);
		currNode = currNode.next;
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
print();
cities.dispReverse();