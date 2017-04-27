//二叉查找树：一种特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中。
//实现二叉查找树
function Node(data,left,right){
	this.data = data;
	this.count = 1;
	this.left = left;
	this.right = right;
	this.show = show;
}
function show(){
	return this.data;
}
function BST(){ //二叉查找树
	this.root = null;//根节点 初始化为null，以此创建一个空节点
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder = preOrder;
   	this.postOrder = postOrder;
	this.getMax = getMax;
	this.getMin = getMin;
	this.find = find;
	this.update = update;
}
function insert(data){
	var n = new Node(data,null,null);
	if( this.root == null ){
		this.root = n;
	}else{
		var current = this.root;//设根节点为当前节点
		var parent;
		while(true){
			parent = current;
			if(data < current.data){//如果带插入节点保存的数据小于当前节点
				current = current.left;//设新的当前节点为原节点的左节点
				if(current == null){//如果当前节点的左节点为null
					parent.left = n;//将新的节点插入这个位置
					break;//退出循环
				}
			}else{
				current = current.right;
				if(current == null){
					parent.right = n;
					break;
				}
			}
		}
	}
}
//中序遍历使用遍历的方式最容易实现。该方法需要以升序访问树中所有节点。 左 根 右
function inOrder(node){
	if(!(node == null)){
		inOrder(node.left);
		putstr(node.show() + " ");
		inOrder(node.right);
	}
}
//先序
function preOrder(node){
	if(!(node == null)){
		putstr(node.show() + " ");
		preOrder(node.left);
		preOrder(node.right);
	}
}
//后序
function postOrder(node){
	if(!(node == null)){
		postOrder(node.left);
		postOrder(node.right);
		putstr(node.show() + " ");
	}
}
//查找最大值
function getMax(){
	var current = this.root;
	while(!(current.right == null)){
		current = current.right;
	}
	return current.data;
}
//查找最小值
// 在BST上因为较小的值总是在左子节点上，查找最小值，只需要遍历左子树，直到找到最后一个节点
function getMin(){
	var current = this.root;
	while(!(current.left == null)){
		current = current.left;
	}
	return current.data;
}

//查找给定值
function find(data){
	var current = this.root;
	while( current != null){
		if(current.data == data){
			return current;
		}else if(data < current.data){
			current = current.left;
		}else{
			current = current.right;
		}
	}
	return null;//如果找到给定值，该方法返回保存该值的节点；如果没找到，该方法返回 null。
}
//从二叉查找树上删除节点
function remove(data){ //简单地接受待删除数据
	root = removeNode(this.root,data);
}
function removeNode(node,data){//删除节点
	if(node == null){ 
		return null;
	}
	if(data == node.data){ //判断当前节点是否包含待删除的数据
		if(node.left == null && node.right == null){ //没有子节点的节点  叶子节点
			return null;//只需将从父节点指向它的链接指向null
		}
		if(node.left == null){//没有左子节点的节点
			return node.right;
		}
		if(node.right == null){//没有右子节点的节点
			return node.left;
		}
		var tempNode = getSmallest(node.right);//有两个子节点的节点
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	}else if(data < node.data){//如果不包含 比较当前节点上的数据和待删除的数据
		node.left = removeNode(node.left,data); //如果待删除数据小于当前节点上的数据，则移至当前节点的左子节点继续比较
		return node;
	}else{
		node.right = removeNode(node.right, data);//如果删除数据大于当前节点上的数据，则移至当前节点的右子节点继续比较。
		return node;
	}
}
function update(data){
	var grade = this.find(data);
	grade.count++;
	return grade;
}
