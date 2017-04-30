function Vertex(label){//创建一个Vertex类来保存顶点和边
	this.label = label;
}
function Graph(v){
	this.vertices = v;//顶点数
	this.edges = 0;//边数
	this.adj = []; //长度与顶点数相同的数组来记录顶点的数量
	for(var i=0;i<this.vertices;++i){
		this.adj[i] = [];//for循环为数组中每个元素添加一个子数组来存储所有的相邻顶点
		this.adj[i].push("");//并将所有元素初始化为空字符串
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.toString = toString;

	this.dfs = dfs;
	this.marked = [];//添加一个数组，用来存储已访问过的顶点
	for(var i=0;i<this.vertices;++i){
		this.marked[i] = false;//将它所有元素的值全部初始化为false
	}

	this.bfs = bfs;

	this.edgeTo = [];//保存从一个顶点到下一个顶点的所有边的数组
	this.pathTo = pathTo;
	this.hasPathTo = hasPathTo;
}
function addEdge(v,w){//传入顶点v,w
	this.adj[v].push(w);//先找到顶点v的邻接表，将顶点w添加到列表中
	this.adj[w].push(v);//查找顶点w的邻接表，将顶点v添加到列表。
	this.edges++;//边数加1
}
function showGraph(){//通过打印所有顶点及其相邻顶点列表的方式来显示图
	for(var i=0;i<this.vertices;++i){
		putstr(i + "->");
		for(var j=0;j<this.vertices;++j){
			if(this.adj[i][j] != undefined)
				putstr(this.adj[i][j] + ' ');
		}
		print();
	}
}

// 深度优先搜索
/*深度优先搜索包括从一条路径的起始顶点开始追溯，直到到达最后一个顶点，然后回溯，
继续追溯下一条路径，直到到达最后的顶点，如此往复，直到没有路径为止。*/
/*深度优先搜索算法比较简单：访问一个没有访问过的顶点，将它标记为已访问，再递归地
去访问在初始顶点的邻接表中其他没有访问过的顶点。*/

function dfs(v){
	this.marked[v] = true;
	if(this.adj[v] != undefined)
		print("Visited vertex: " + v);
	for each(var w in this.adj[v]){
		if(!this.marked[w]){
			this.dfs(w);
		}
	}
}

// 广度优先搜索
/*广度优先搜索从第一个顶点开始，尝试访问尽可能靠近它的顶点。
广度优先搜索算法使用了抽象的队列而不是数组来对已访问过的顶点进行排序。
*/

function bfs(s){
	var queue = [];
	this.marked[s] = true;
	queue.push(s);//添加到队尾
	while(queue.length > 0){
		var v = queue.shift();//从队首移除
		if(v != undefined){
			print("Visited vertex: " + v);
		}
		for each(var w in this.adj[v]){
			if(!this.marked[w]){
				this.edgeTo[w] = v;
				this.marked[w] = true;
				queue.push(w);
			}
		}
	}
}

function pathTo(v){
	var source = 0;
	if(!this.hasPathTo(v)){
		return undefined;
	}
	var psth = [];
	for(var i=v;i != source;i=this.edgeTo[i]){
		path.push(i);
	}
	path.push(s);
	return path;
}
function hasPathTo(v){
	return this.marked[v];
}

//拓扑排序算法   优先级约束调度
/*拓扑排序算法与深度优先搜索类似。不同的是，拓扑排序算法不会立即输出已访问的顶
点，而是访问当前顶点邻接表中的所有相邻顶点，直到这个列表穷尽时，才将当前顶点压
入栈中。*/