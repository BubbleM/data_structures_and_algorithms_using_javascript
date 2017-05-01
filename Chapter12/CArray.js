function CArray(numElements){//数组测试平台类
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;//想要的元素数
	this.insert = insert;
	this.toString = toString;
	this.clear = clear;
	this.setData = setData;
	this.swap = swap;//用于交换数组元素
	for(var i=0;i<numElements;++i){
		this.dataStore[i] = i;
	}
	this.bubbleSort = bubbleSort;
	this.selectionSort = selectionSort;
	this.insertionSort = insertionSort;

	this.gaps = [5,3,1];//对间隔序列的定义
	function setGaps(arr){
		this.gaps = arr;
	}
	this.shellsort = shellsort;

	this.mergeSort = mergeSort;
	this.mergeArrays = mergeArrays;
}

function setData(){//生成了存储在数组中的随机数字
	for(var i=0;i<this.numElements;++i){
		this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
	}
}

function clear(){
	for(var i=0;i<this.dataStore;++i){
		this.dataStore[i] = 0;
	}
}

function insert(element){
	this.dataStore[this.pos++] = element;
}

function toString(){
	var retstr = "";
	for(var i=0;i<this.dataStore.length;++i){
		retstr += this.dataStore[i]+" ";
		if(i>0 & i%10==0){
			retstr += "\n";
		}
	}
	return retstr;
}

function swap(arr,index1,index2){
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

//冒泡排序（最慢的排序算法之一，但也是最容易实现的排序算法）
/*算法会多次在数组中移动，比较相邻的数据，当左侧值大于右侧值时将它们进行互换*/
function bubbleSort(){
	var numElements = this.dataStore.length;
	var temp;
	for(var outer=numElements;outer >= 2;--outer){
		for(var inner=0;inner <= outer-1;++inner){
			if(this.dataStore[inner] > this.dataStore[inner+1]){
				swap(this.dataStore,inner,inner+1);
			}
		}
		// print(this.toString());//为了能看到排序过程
	}
}

//选择排序
/*选择排序从数组的开头开始，先找到最小的放第一位，然后是次小放第二位*/
function selectionSort(){
	var min,temp;
	for(var outer=0;outer <= this.dataStore.length-2;++outer){
		min = outer;
		for (var inner = outer + 1; 
           inner <= this.dataStore.length-1; ++inner) { 
			if(this.dataStore[inner] < this.dataStore[min]){
				min = inner;
			}
		}
		swap(this.dataStore,outer,min);
		// print(this.toString());
	}
}

//插入排序
/*通过将较大的数组元素移动到右侧，为数组左侧的较小元素腾出位置。*/
function insertionSort(){
	var temp,inner;
	for(var outer=1;outer<=this.dataStore.length-1;++outer){
		temp = this.dataStore[outer];
		inner = outer;
		while(inner > 0 && (this.dataStore[inner-1] >= temp)){
			this.dataStore[inner] = this.dataStore[inner-1];
			--inner;
		}
		this.dataStore[inner] = temp;
		// print(this.toString());
	}
}


//高级排序算法
//希尔排序 /*核心理念与插入排序不同，它会首先比较距离较远的元素，而非相邻的元素*/
function shellsort(){
	for(var g=0;g<this.gaps.length;++g){//外循环控制间隔序列的移动
		for(var i=this.gaps[g];i<this.dataStore.length;++i){
			var temp = this.dataStore[i];
			for(var j=i;j >= this.gaps[g] && this.dataStore[j-this.gaps[g]]>temp;j -= this.gaps[g]){
				this.dataStore[j] = this.dataStore[j-this.gaps[g]];
			}
			this.dataStore[j] = temp;
		}
		print("间隔"+ this.gaps[g] + ": " + this.toString());
	}
}
/*动态间隔*/
function shellsort1(){
	var N = this.dataStore.length;
	var h = 1;
	while(h < N/3){
		h = 3*h+1;
	}
	while(h >= 1){
		for(var i=h;i<N;i++){
			for(var j=i;j>=h && this.dataStore[j]<this.dataStore[j-h];j -= h){
				swap(this.dataStore,j,j-h);
			}
		}
		h = (h-1)/3;
	}
}
/*硬编码间隔序列的希尔排序和动态间隔序列的希尔排序效率是一样的*/

//归并排序 ： 把一系列排好序的子序列合并成一个大的完整有序序列
//自顶向下的归并排序：递归

//自底向上的归并排序：非递归或迭代版本
function mergeArrays(arr,startLeft, stopLeft, startRight, stopRight) {
   var rightArr = new Array(stopRight - startRight + 1);
   var leftArr = new Array(stopLeft - startLeft + 1);
   k = startRight;
   for (var i = 0; i < (rightArr.length-1); ++i) {
      rightArr[i] = arr[k];
      ++k;
   }
   
   k = startLeft;
   for (var i = 0; i < (leftArr.length-1); ++i) {
      leftArr[i] = arr[k];
      ++k;
   }
  
   rightArr[rightArr.length-1] = Infinity; // a sentinel value
   leftArr[leftArr.length-1] = Infinity; // a sentinel value
   var m = 0;
   var n = 0;
   for (var k = startLeft; k < stopRight; ++k) {
      if (leftArr[m] <= rightArr[n]) {
         arr[k] = leftArr[m];
         m++;
      }
      else {
         arr[k] = rightArr[n];
         n++;
      }
   }
   print("left array - ", leftArr);
   print("right array - ", rightArr);
}

function mergeSort() {
   if (this.dataStore.length < 2) {
      return;
   }
   var step = 1;
   var left, right;
   while (step < this.dataStore.length) {
      left = 0;
      right = step;
      while (right + step <= this.dataStore.length) {
         mergeArrays(this.dataStore, left, left+step, right, right+step);
         left = right + step;
         right = left + step;
      }
      if (right < this.dataStore.length) {
         mergeArrays(this.dataStore, left, left+step, right, this.dataStore.length);
      }
      step *= 2;
   }
}

//快速排序  是处理大数据集最快的排序算法之一
/*
它是一种分而治之的算法，通过递归的方
式将数据依次分解为包含较小元素和较大元素的不同子序列。该算法不断重复这个步骤直
到所有数据都是有序的。
这个算法首先要在列表中选择一个元素作为基准值（pivot）。数据排序围绕基准值进行，
将列表中小于基准值的元素移到数组的底部，将大于基准值的元素移到数组的顶部。
*///快速排序算法非常适用于大型数据集合；在处理小数据集时性能反而会下降
function qSort(arr){
	if(arr.length == 0){
		return [];
	}
	var left = [];
	var right = [];
	var pivot = arr[0];//基准值
	for(var i=1;i<arr.length;i++){
		print("基准值: " + pivot + "当前元素：" + arr[i]);
		if(arr[i] < pivot){
			print(" 移动 " + arr[i] + " 到左边 ");
			left.push(arr[i]);
		}else{
			print(" 移动 " + arr[i] + " 到右边 ");
			right.push(arr[i]);
		}
	}
	return qSort(left).concat(pivot, qSort(right));
}