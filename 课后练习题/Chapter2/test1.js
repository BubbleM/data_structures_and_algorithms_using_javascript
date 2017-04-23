// 创建一个记录学生成绩的对象，
// 提供一个添加成绩的方法，
// 以及一个显示学生平均成绩的方法。
function grade(){
	this.dataStore = [];//记录成绩
	this.add = add;//添加成绩
	this.average = average;//求平均成绩
}
function add(temp){
	this.dataStore.push(temp);
}
function average(){
	var total = 0;
	for(var i=0;i<this.dataStore.length;i++){
		total+=this.dataStore[i];
	}
	return total/this.dataStore.length;
}
var grades = new grade();
grades.add(78);
grades.add(80);
grades.add(68);
grades.add(84);
grades.add(85);
grades.add(90);
print(grades.average().toFixed(2));//80.83