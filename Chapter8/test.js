load("Hash.js");
// var someNames = ["David", "Jennifer", "Donnie", "Raymond",
// "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
// var hTable = new HashTable();
// for (var i = 0; i < someNames.length; ++i) {
// 	hTable.put(someNames[i]);
// }
// hTable.showDistro();



// var numStudents = 10;
// var arrSize = 97;
// var idLen = 9;
// var students = new Array(numStudents);
// genStuData(students);
// print ("Student data: \n");
// for (var i = 0; i < students.length; ++i) {
// 	print(students[i].substring(0,8) + " " +
// 	students[i].substring(9));
// }
// print("\n\nData distribution: \n");
// var hTable = new HashTable();
// for (var i = 0; i < students.length; ++i) {
// 	hTable.put(students[i]);
// }
// hTable.showDistro();


// var pnumbers = new HashTable();
// var name, number;
// for (var i = 0; i < 3; i++) {
// 	putstr("Enter a name (space to quit): ");
// 	name = readline();
// 	putstr("Enter a number: ");
// 	number = readline();
// }
// name = "";
// putstr("Name for number (Enter quit to stop): ");
// while (name != "quit") {
// 	name = readline();
// 	if (name == "quit") {
// 		break;
// }
// print(name + "'s number is " + pnumbers.get(name));
// putstr("Name for number (Enter quit to stop): ");
// }


var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i]);
}
hTable.showDistro();