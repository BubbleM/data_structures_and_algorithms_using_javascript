function List() {
   this.listSize = 0;//列表的元素个数
   this.pos = 0;//列表的当前位置
   this.dataStore = [];//初始化一个空数组来保存列表元素
   this.clear = clear;//清空列表中的所有元素
   this.find = find;
   this.toString = toString;//返回列表的字符串形式
   this.insert = insert;//在现有元素后插入新元素
   this.append = append;//在列表的末尾添加新元素
   this.remove = remove;//从列表中删除元素
   this.front = front;//将列表的当前位置设移动到第一个元素
   this.end = end;//将列表的当前位置移动到最后一个元素
   this.prev = prev;//将当前位置后移一位
   this.next = next;//将当前位置前移一位
   this.length = length;//返回列表中元素的个数
   this.currPos = currPos;//返回列表的当前位置
   this.moveTo = moveTo;//将当前位置移动到指定位置
   this.getElement = getElement;//返回当前位置的元素
   this.contains = contains;//判断给定值是否在列表中
}

//给列表添加元素
function append(element) {
   this.dataStore[this.listSize++] = element;
}
//查找指定元素
function find(element) {
   for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
         return i;
      }
   }
   return -1;
}
//从列表中删除元素
function remove(element) {
   var foundAt = this.find(element);//使用find方法返回的位置对数组进行截取
   if (foundAt > -1) {
      this.dataStore.splice(foundAt,1);
      --this.listSize;//数组改变后，listSize减1，以反映列表的最新长度
      return true;
   }
   return false;
}
//返回列表中元素的个数
function length(){
   return this.listSize;
}
//显示列表中的元素
function toString() {
    return this.dataStore;
}
//向列表中插入一个元素到after之后
function insert(element,after){
   var insertPos = this.find(after);
   if(insertPos > -1){
      this.dataStore.splice(insertPos,0,element);
      ++this.listSize;
      return true;
   }
   return false;
}
//清空列表中所有的元素
function clear(){
   delete this.dataStore;
   this.dataStore = [];
   this.listSize = this.pos = 0;//表明这个一个新的空列表
}
//判断给定值是否在列表中
function contains(element){
   for(var i=0;i<this.dataStore.length;i++){
      if(this.dataStore[i] == element){
         return true;
      }
   }
   return false;
}

function front(){
   this.pos = 0;
}
function end(){
   this.pos = this.listSize - 1;
}
function prev(){
   if(this.pos > 0){
      --this.pos;
   }
}
function next(){
   if(this.pos < this.listSize){
      ++this.pos;
   }
}
function currPos(){
   return this.pos;
}
function moveTo(position){
   this.pos = position;
}
//返回列表的当前元素
function getElement(){
   return this.dataStore[this.pos];
}
var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
print(names.toString());
// names.remove("Raymond");
// print(names.toString());
// names.front();
// print(names.getElement());
print(names.front());
names.next();
// print(names.getElement());
print(names.currPos());
print(names.front());
print(names.length());

function displayList(list){
   for(list.front();list.currPos()<list.length();list.next()){
         print(list.getElement());
   }
}
displayList(names);