// 创建数组
var numbers = [];//得到一个长度为0的空数组  *****推荐使用
var numbers = new Array();//调用Array的构造函数创建数组
var numbers = new Array(10);//指定数组长度为10
//调用字符串对象的split()方法生成数组
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
print("word " + i + ": " + words[i]);
}

var numbers = [1,2,3,4,5];
if (Array.isArray(numbers)) { //调用Array.isArray()来判断一个对象是否是数组
   // perform array tasks on numbers
}

//查找元素
indexOf() //用来查找传进来的参数在目标数组中是否存在 如果存在，返回索引；不存在，返回-1
lastIndexOf()//返回最后一个
//数组的字符串表示 逗号分隔
join()
toString()
//由已有数组创建新数组
concat()//可以合并多个数组创建一个新数组
splice(截取起始索引，截取长度)//截取一个数组的子集创建一个新数组
//为数组添加元素
push()
unshift()
//从数组中删除元素
pop()
shift()
//从数组中间位置添加和删除元素
splice(起始索引，删除个数，新添元素)
//数组排序
reverse()//翻转
sort()//按字典顺序对元素进行排序

var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
names.sort();
print(names); // Bryan,Clayton,Cynthia,David,Mike,Raymond

var nums = [3,1,2,100,4,200];
nums.sort();
print(nums); // 1,100,2,200,3,4

function compare(num1, num2) {
return num1 - num2;
}
var nums = [3,1,2,100,4,200];
nums.sort(compare);
print(nums); // 1,2,3,4,100,200

//迭代器方法
//不生成新数组的迭代器方法（要么对数组中的每个元素执行某种操作，要么返回一个值）
forEach()//接受一个函数作为参数，对数组中的每个元素使用该函数
every()//接受一个返回值为布尔类型的函数 如果所有元素都返回true 则该方法返回true
some()//接受一个返回值为布尔类型的函数  只要有一个元素返回true 该方法就返回true
reduce()//接受一个函数，返回一个值  累加
reduceRight()//从右向左执行
//生成新数组的迭代器方法
map()//对数组每个元素都执行函数参数 类似forEach()
filter()//类似every()