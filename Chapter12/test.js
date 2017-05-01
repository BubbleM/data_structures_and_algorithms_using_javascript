load("CArray.js");
// var numElements = 100;
// var myNums = new CArray(numElements);
// myNums.setData();
// print(myNums.toString());

/*
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
// mynums.bubbleSort();
// mynums.selectionSort();
mynums.insertionSort();
print();
print(mynums.toString());
*/


// //计时系统
// var numElements = 1000;
// var nums = new CArray(numElements);
// nums.setData();
// var start = new Date().getTime();/**********开始计时********/
// nums.bubbleSort();
// var stop = new Date().getTime();/*********计时结束**********/
// var elapsed = stop-start;
// print(" 对 " + numElements + " 个元素执行冒泡排序消耗的时间为：" +
// elapsed + " 毫秒。");
// start = new Date().getTime();
// nums.selectionSort();
// stop = new Date().getTime();
// elapsed = stop - start;
// print(" 对 " + numElements + " 个元素执行选择排序消耗的时间为：" +
// elapsed + " 毫秒。");
// start = new Date().getTime();
// nums.insertionSort();
// stop = new Date().getTime();
// elapsed = stop - start;
// print(" 对 " + numElements + " 个元素执行插入排序消耗的时间为：" +
// elapsed + " 毫秒。");

/*
选择排序和插入排序要比冒泡排序快
插入排序是这三种算法中最快的。
*/

/*var nums = new CArray(10);
nums.setData();
print(" 希尔排序前：\n");
print(nums.toString());
print("\n 希尔排序中：\n");
nums.shellsort();
print("\n 希尔排序后：\n");
print(nums.toString());*/

/*
var nums = new CArray(10);
nums.setData();
print(nums.toString());
nums.mergeSort();
print(nums.toString());
*/

var a = [];
for(var i=0;i<10;++i){
	a[i] = Math.floor((Math.random()*100)+1);
}
print(a);
print();
print(qSort(a));