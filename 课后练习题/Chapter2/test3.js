// 修改本章前面出现过的 weeklyTemps 对象，
// 使它可以使用一个二维数组来存储每月的有用数据。
// 增加一些方法用以显示月平均数、
// 具体某一周平均数和所有周的平均数。
function weekTemps(){
	this.dataStore = [];
	this.add = add;
	this.average = average;
}
function add(temp) {
	this.dataStore.push(temp);
}
function average() {
	var total = 0;
	for (var i = 0; i < this.dataStore.length; ++i) {
		total += this.dataStore[i];
	}
	return total / this.dataStore.length;
}
var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average()); // 显示 54.875